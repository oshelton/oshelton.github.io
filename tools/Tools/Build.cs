using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using Nuke.Common;
using Nuke.Common.CI;
using Nuke.Common.Execution;
using Nuke.Common.IO;
using Nuke.Common.ProjectModel;
using Nuke.Common.Tooling;
using Nuke.Common.Utilities.Collections;
using Serilog;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;
using static Nuke.Common.EnvironmentInfo;
using static Nuke.Common.IO.FileSystemTasks;
using static Nuke.Common.IO.PathConstruction;

class Build : NukeBuild
{
    public static int Main () => Execute<Build>(x => x.GenerateBlogData);

    [Parameter("Configuration to build - Default is 'Debug'")]
    readonly Configuration Configuration = Configuration.Debug;

    Target GenerateBlogData => _ => _
        .Executes(() =>
        {
            var blogDataDir = RootDirectory / "src" / "lib" / "blog";
            var blogPostDir = blogDataDir / "posts";

            var generatedSearchDataFilePath = blogDataDir / "SearchData.js";

			var foundMetadata = LoadMetadata(blogPostDir);

            GeneratePostsFile(blogDataDir, foundMetadata);
			GenerateSearchFile(blogDataDir, foundMetadata);
		});

	/// <summary>
	/// Load all metadata present in all Posts in the blog data directory.
	/// </summary>
	/// <param name="blogPostsDir">Absolute path to the root of the directory containing posts in src/lib.</param>
	private static IReadOnlyList<PostMetadata> LoadMetadata(AbsolutePath blogPostsDir)
    {
		var postFiles = blogPostsDir.GlobFiles("*.svelte");

		var metadataDeserializer = new DeserializerBuilder()
			.WithNamingConvention(CamelCaseNamingConvention.Instance)
			.Build();

		var postMetadataRegex = new Regex("<!--\\s*metadata", RegexOptions.IgnoreCase | RegexOptions.Compiled);
		var foundMetadata = new List<PostMetadata>();
		foreach (var postFile in postFiles)
		{
			// Read all post content.
			var postContent = postFile.ReadAllText();

			// Extract the metadata from the content.
			var metadataPreambleMatch = postMetadataRegex.Match(postContent);
			if (!metadataPreambleMatch.Success)
			{
				Log.Warning("Metadata not found in svelte file \"{file}\".", postFile);
				continue;
			}

			var metadataStartEndIndex = metadataPreambleMatch.Index + metadataPreambleMatch.Length;
			var foundClosingElementIndex = postContent.IndexOf("-->", metadataStartEndIndex);

			var metadataContent = postContent.Substring(metadataStartEndIndex, foundClosingElementIndex - metadataStartEndIndex);

			// Deserialize and verify the metadata.
			var metadata = metadataDeserializer.Deserialize<PostMetadata>(metadataContent);
			if (metadata is null)
				throw new InvalidOperationException($"Error loading from file {postFile}.");

			// Derive the file path from the src directory and save it.
			var postFilelibIndex = postFile.ToString().IndexOf("lib");
			metadata.FilePath = $"${postFile.ToString().Substring(postFilelibIndex)}";
			metadata.FileNameNoExtension = postFile.NameWithoutExtension;
			metadata.Verify();
			foundMetadata.Add(metadata);
		}

		return foundMetadata.OrderBy(metadata => metadata.Posted).ToArray();
	}

    /// <summary>
    /// Generate the posts data file.
    /// </summary>
    /// <param name="blogDataDir">Absolute path to the root of the Blog data dir in src/lib.</param>
    /// <param name="foundMetadata">All of the Metadata found.</param>
    private static void GeneratePostsFile(AbsolutePath blogDataDir, IReadOnlyList<PostMetadata> foundMetadata)
    {
		Log.Information("Generating Post data file.");

		// Data is written to a temporary file first and then moved to the real file once everything is successful.
		var tmpPostsDataFilePath = blogDataDir / "Posts.js.tmp";
		if (tmpPostsDataFilePath.FileExists())
			tmpPostsDataFilePath.DeleteFile();

		// Write out warning.
		tmpPostsDataFilePath.AppendAllLines(new[] 
		{ 
			"// WARNING: This file is generated by tools and should not be modified by hand.",
		});

		// Write out post components.
		tmpPostsDataFilePath.AppendAllLines(new[]
		{
				"",
				"/** Association between Post id and component. */",
				"export const Posts = [];"
			});

		tmpPostsDataFilePath.AppendAllLines(foundMetadata.Select(metadata =>
			$"Posts['{metadata.Id}'] = () => import ('{metadata.FilePath.Replace('\\', '/')}');"));

		// Write out Post metadata.
		tmpPostsDataFilePath.AppendAllLines(new[]
		{
				"",
				"/** Association between Post id and its metadata. */",
				"export const PostMetadata = [];"
			});

		tmpPostsDataFilePath.AppendAllLines(foundMetadata.Select(metadata =>
			$"PostMetadata['{metadata.Id}'] = {{ title: `{metadata.Title}`, id: '{metadata.Id}', posted: '{metadata.Posted}', lastModified: '{metadata.Posted}', summary: `{metadata.Summary}`, tags: [ `{string.Join("`, `", metadata.Tags)}` ] }};"));

		// Write out Post Previous and Next Information.
		tmpPostsDataFilePath.AppendAllLines(new[]
		{
				"",
				"/** Association between Post id and and its previous and next post. */",
				"export const PostAdjacency = [];"
		});

		tmpPostsDataFilePath.AppendAllLines(foundMetadata.Select((metadata, index) =>
			$"PostAdjacency['{metadata.Id}'] = {{ previous: {(index > 0 ? $"'{foundMetadata[index - 1].Id}'" : "null")}, next: {(index + 1 < foundMetadata.Count ? $"'{foundMetadata[index + 1].Id}'" : "null")} }};"));

		// Write out the latest Posts Id.
		var latestPost = foundMetadata.LastOrDefault();
		tmpPostsDataFilePath.AppendAllLines(new[]
		{
				"",
				"/** Latest Post Id. */",
				$"export const LatestPostId = {(latestPost is not null ? $"'{latestPost.Id}'" : "null" )};"
		});

		// File's done, replace the existing one.
		var generatedPostDataFilePath = blogDataDir / "Posts.js";
		if (generatedPostDataFilePath.FileExists())
			generatedPostDataFilePath.DeleteFile();
		tmpPostsDataFilePath.Rename("Posts.js");
	}

	/// <summary>
	/// Generate the search data file.
	/// </summary>
	/// <param name="blogDataDir">Absolute path to the root of the Blog data dir in src/lib.</param>
	/// <param name="foundMetadata">All of the Metadata found.</param>
	private static void GenerateSearchFile(AbsolutePath blogDataDir, IReadOnlyList<PostMetadata> foundMetadata)
	{
		Log.Information("Generating Search data file.");

		// Data is written to a temporary file first and then moved to the real file once everything is successful.
		var tmpSearchDataFilePath = blogDataDir / "SearchData.js.tmp";
		if (tmpSearchDataFilePath.FileExists())
			tmpSearchDataFilePath.DeleteFile();

		// Write out warning.
		tmpSearchDataFilePath.AppendAllLines(new[] 
		{ 
			"// WARNING: This file is generated by tools and should not be modified by hand.",
			"",
			"/** All distinct tags used with notes. */"
		});

		// Write out all tags information.
		var allTags = foundMetadata.SelectMany(x => x.Tags).Distinct().OrderBy(x => x).ToList();
		if (allTags.Any()) 
		{
			tmpSearchDataFilePath.AppendAllLines(new[] { "export const AllTags = [" });
			tmpSearchDataFilePath.AppendAllLines(allTags.Select(tag => $"\t'{tag}',"));
			tmpSearchDataFilePath.AppendAllLines(new[] { "];" });
		}
		else
		{
			tmpSearchDataFilePath.AppendAllLines(new[] { "export const AllTags = [];" });
		}

		tmpSearchDataFilePath.AppendAllLines(new[] 
		{ 
			"", 
			"// TODO: This file is incomplete!"
		});

		// File's done, replace the existing one.
		var generatedPostDataFilePath = blogDataDir / "SearchData.js";
		if (generatedPostDataFilePath.FileExists())
			generatedPostDataFilePath.DeleteFile();
		tmpSearchDataFilePath.Rename("SearchData.js");
	}

    /// <summary>
    /// Class representing a Posts metadata.
    /// </summary>
    private class PostMetadata
    {
        public string Title { get; set; }
        public Guid Id { get; set; }
        public DateOnly Posted { get; set; }
        public DateOnly LastModified { get; set; }
        public string Summary { get; set; }
        public string[] Tags { get; set; }
        public string FilePath { get; set; }
        public string FileNameNoExtension { get; set; }

        public void Verify()
        {
            if (string.IsNullOrWhiteSpace(Title)) throw new MissingFieldException(nameof(Title));
            if (Id == Guid.Empty) throw new MissingFieldException(nameof(Id));
            if (Posted == default(DateOnly)) throw new MissingFieldException(nameof(Posted));
            if (string.IsNullOrWhiteSpace(Summary)) throw new MissingFieldException(nameof(Summary));
            
            if (Tags is null)
                Tags = Array.Empty<string>();

            if (string.IsNullOrWhiteSpace(FilePath)) throw new MissingFieldException(nameof(FilePath));
			if (string.IsNullOrWhiteSpace(FileNameNoExtension)) throw new MissingFieldException(nameof(FileNameNoExtension));
		}
    }
}
