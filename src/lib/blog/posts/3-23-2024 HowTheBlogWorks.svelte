<!-- metadata
title: How the Blog Works
id: 124520DD-56CD-4B13-808F-7E54E885925A
posted: 3/23/2024
lastModified: 3/26/2024
summary: All about how this blog of mine is currently working.
tags: [C#, "Code Generation", JS, Nuke, "Software Engineering", Svelte]
-->

<!--
	@component
	component for the "How the Blog Works" blog post.
-->

<script>
	import { A, Li } from 'flowbite-svelte';
	import Prism from 'svelte-prism';

	import { BuildUrlForPost } from '../PostsHelpers';
	import { GetItemForUrl } from '$lib/Navigation.js';
	import ContentParagraph from '$lib/components/ContentParagraph.svelte';
	import HeadingLink from '$lib/components/HeadingLink.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';
	import PageToc from '$lib/components/PageToc.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import { PostExample } from './3-23-2024 HowTheBlogWorks';

	const url = BuildUrlForPost('124520DD-56CD-4B13-808F-7E54E885925A');
	const navItem = GetItemForUrl(url);
</script>

<PageToc
	item={navItem}
	contents={[
		{ title: 'Title', url: url + '#title' },
		{ title: 'Anatomy of a Blog Post', url: '#post' },
		{ title: 'The C# Tooling', url: url + '#tooling' },
		{ title: 'JS Helpers', url: url + '#helpers' }
	]}
/>

<ContentParagraph>
	I promised a blog post about how this blogging thing I've built works and here it is.
</ContentParagraph>

<ContentParagraph>
	It doesn't have a whole lot of miles on it yet and there are some features that haven't yet been
	implemented (post images, next and previous post navigation, etc) but I'm pretty happy with how
	things are working.
</ContentParagraph>

<ContentParagraph>The blog on this site consists of three parts:</ContentParagraph>

<OrderedList>
	<Li
		>The <A href="https://github.com/oshelton/oshelton.github.io/tree/main/src/lib/blog/posts"
			>Blog Posts themselves</A
		></Li
	>
	<Li
		>A <A href="https://github.com/oshelton/oshelton.github.io/tree/main/tools">C# tool</A> that generates
		the post related data</Li
	>
	<Li
		>The <A
			href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/PostsHelpers.js"
			>Post</A
		> and <A
			href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/SearchHelpers.js"
			>Search</A
		> helper functions to allow for easier access to the generated data.</Li
	>
</OrderedList>

<ContentParagraph>
	Each of these play a critical role in the blogging platform and it's functionality. Before we get
	too far into the weeds this platform probably isn't:
</ContentParagraph>

<UnorderedList>
	<Li>Scalable (probably not)</Li>
	<Li>Performant (we will see)</Li>
	<Li>A good idea (I think so, but well...)</Li>
</UnorderedList>

<ContentParagraph>
	My goals really were to make something that made sense to me and didn't require me to write a ton
	of JavaScript, require a server to enable things like searching, and was generally performant to
	work within a static site context.
</ContentParagraph>

<ContentParagraph>I'm convinced it achieves those goals very well.</ContentParagraph>

<ContentParagraph>
	<strong>But</strong>, I only have two posts right now. Will this hold up when there are 10? 50? We
	will see.
</ContentParagraph>

<HeadingLink id="post">Anatomy of a Blog Post</HeadingLink>

<ContentParagraph>
	The posts themselves make up the core of the blogging platform and are basically <em>just</em> Svelte
	components with a bit of decoration.
</ContentParagraph>

<ContentParagraph>
	The general idea was to take a page from the markdown world and create something that works very
	similar to <A
		href="https://dpericich.medium.com/what-is-front-matter-and-how-is-it-used-to-create-dynamic-webpages-9d8dc053b457"
		>markdown front matter</A
	> where posts define their own metadata in an outside the content manner.
</ContentParagraph>

<ContentParagraph>In general a post winds up looking something like this:</ContentParagraph>

<Prism language="svelte" source={PostExample} />

<ContentParagraph>
	The post metadata is defined as yaml inside an html comment block with 'metadata' on the same line
	as the comment opening sequence. This is necessary to identify the metadata block from other
	comment blocks that may be present in the file.
</ContentParagraph>

<ContentParagraph>
	Generally, all metadata fields that exist <em>must</em> have a value and none are optional.
</ContentParagraph>

<ContentParagraph>
	The advantages of allowing blog posts to be full and proper Svelte components are numerous:
</ContentParagraph>

<UnorderedList>
	<Li><em>Any</em> svelte component can be easily used in a post without too much shenanigans.</Li>
	<Li class="ml-5"
		>This post uses a <A href="https://github.com/jakobrosenberg/svelte-prism?tab=readme-ov-file"
			>Svelte wrapper around Prism</A
		> for example for displaying the above example.</Li
	>
	<Li
		>Posts are not restricted to the set of features available in the specific flavor of markdown
		supported by the tooling or the run time markdown viewer.</Li
	>
	<Li
		>All of the existing Svelte tooling and styling capabilities can be used resulting in a lot more
		flexibility being readily available.</Li
	>
	<Li class="ml-5"
		>This post (and the rest of the site) make use of <A href="https://tailwindcss.com/"
			>Tailwind CSS</A
		> for various styling tasks.</Li
	>
</UnorderedList>

<ContentParagraph>
	The only real restriction with blog posts as Svelte components is that the components cannot
	export properties. The way post components are constructed at navigation time will not allow them
	to be populated.
</ContentParagraph>

<ContentParagraph>
	For an example of a real post feel free to take a look <A
		href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/posts/HowTheBlogWorks.svelte"
		>at the source for this post</A
	>.
</ContentParagraph>

<HeadingLink id="tooling" tag="h4">The C# Tooling</HeadingLink>

<ContentParagraph>
	I implemented a simple application using <A href="https://nuke.build/">Nuke Build</A> that generates
	the glue that links the posts with the rest of the site. It winds up generating a pair of files:
</ContentParagraph>

<UnorderedList>
	<Li
		><A href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/Posts.js"
			>Posts.js</A
		> - File containing the metadata and component creation functions.</Li
	>
	<Li
		><A href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/SearchData.js"
			>SearchData</A
		> - File containing the collection of all available tags, which tags belong to which posts, and when
		each post was posted.</Li
	>
</UnorderedList>

<ContentParagraph>
	I elected not to implement the tooling in JavaScript for the following reasons:
</ContentParagraph>

<UnorderedList>
	<Li>I am much more familiar with using C# for tools like this than I am Node and JS.</Li>
	<Li
		>The C# and the .NET ecosystem feels like a much better fit for the task, and I can do what I
		need to do with very few additional dependencies.</Li
	>
	<Li
		>I expect as the number of posts grows that the performance of the tooling will hold up much
		better with it being written in C#.</Li
	>
	<Li
		>I can easily add additional tools and between tool dependencies by taking advantage of <A
			href="https://nuke.build/docs/fundamentals/targets/#dependencies"
			>Nuke Build's built in capabilities.</A
		></Li
	>
	<Li
		><span class="text-red-600">HOT TAKE:</span> Fundamentally I think JS is a poor choice for tools.</Li
	>
</UnorderedList>

<ContentParagraph>The post generation tool can be ran two different ways:</ContentParagraph>

<OrderedList>
	<Li
		>By running <strong>nuke</strong> from the root of your clone of the repo. This may change as additional
		tools are created.</Li
	>
	<Li
		>By running <strong>npm run generateBlogData</strong> from the root of your clone of the repo.
	</Li>
</OrderedList>

<HeadingLink id="helpers" tag="h4">JS Helpers</HeadingLink>

<ContentParagraph>
	The final piece of the puzzle are the helper functions and the associated components that take
	advantage of them. There are two files containing helper methods and one that defines the types
	used by the platform:
</ContentParagraph>

<UnorderedList>
	<Li
		><A href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/PostsHelpers.js"
			>PostHelpers.js</A
		> - This file contains functions to make accessing the post data much simpler.</Li
	>
	<Li
		><A
			href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/SearchHelpers.js"
			>SearchHelpers.js</A
		> - This file contains helper functions to make finding posts that meet specific criteria much easier.</Li
	>
	<Li
		><A href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/types.d.ts"
			>types.d.ts</A
		> - This defines types based on the generated data for use with JSDoc to aid in development.</Li
	>
</UnorderedList>

<ContentParagraph>
	The first two files represent what I would call a Service if I were writing C#. They both provide
	a set of stateless functions for retrieving and interacting with Post content and metadata.
</ContentParagraph>

<ContentParagraph>
	The functions in <A
		href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/blog/PostsHelpers.js"
		>post helpers</A
	> are consumed throughout the application wherever post data is needed including:
</ContentParagraph>

<UnorderedList>
	<Li
		><A
			href="https://github.com/oshelton/oshelton.github.io/blob/main/src/routes/%2Bpage.svelte#L12"
			>Home Page</A
		> - The helpers are used to build up a "Recent Blog Posts" feature.</Li
	>
	<Li
		><A
			href="https://github.com/oshelton/oshelton.github.io/blob/main/src/routes/blog/all/%2Bpage.svelte#L5"
			>All Posts Page</A
		> - To provide the ability to fetch all Post metadata.</Li
	>
	<Li
		><A
			href="https://github.com/oshelton/oshelton.github.io/blob/main/src/routes/blog/search/%2Bpage.svelte#L24"
			>Search Posts Page</A
		> - To work back from the post ids found in search results to their metadata.</Li
	>
	<Li
		><A href="https://github.com/oshelton/oshelton.github.io/blob/main/src/lib/navigation.js#L10"
			>Navigation.js</A
		> - Several helper functions are used to add a "Latest Blog Post" item to the site menu and for building
		navigation items to posts.</Li
	>
	<Li
		><A
			href="https://github.com/oshelton/oshelton.github.io/blob/main/src/routes/blog/post/%2Bpage.svelte#L6"
			>Specific Post Page</A
		> - Where helpers are used to fetch the metadata and content for the post that should be displayed.</Li
	>
</UnorderedList>

<ContentParagraph class="pb-4">
	The search helpers are currently only used on the <A
		href="https://github.com/oshelton/oshelton.github.io/blob/main/src/routes/blog/search/%2Bpage.svelte#L82-L120"
		>Search Page</A
	> to make searching for specific posts just a bit easier.
</ContentParagraph>
