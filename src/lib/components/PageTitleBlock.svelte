<!--
	@component
	Reusable component for creating a simple page title and description block.
-->

<script>
	import { browser } from '$app/environment';
	import HeadingLink from './HeadingLink.svelte';
	import MarkdownParagraph from '$lib/components/MarkdownParagraph.svelte';
	import { GetMetadataForPost } from '$lib/blog/PostsHelpers.js';

	/**
	* @typedef {import('$lib/types').PostAdjacency} PostAdjacency
	* @typedef {import('$lib/types').PostMetadata} PostMetadata
	*/

	/** @type {string} Title of the page. */
	export let title;
	/** @type {string} Description to use in the head meta data of the page. */
	export let metaDescription;
	/** @type {string} Markdown content to display as the page's description. */
	export let markdown;
	/** @type {PostAdjacency} Post adjacency info*/
	export let postAdjacencyInfo;

	/** @type {PostMetadata} Post metadata for the previous post. */
	let previousPostMetadata = null;
	/** @type {PostMetadata} Post metadata for the next post. */
	let nextPostMetadata = null;
	if (postAdjacencyInfo && browser) {
		if (postAdjacencyInfo.previous) {
			previousPostMetadata = GetMetadataForPost(postAdjacencyInfo.previous);
		}
		if (postAdjacencyInfo.next) {
			nextPostMetadata = GetMetadataForPost(postAdjacencyInfo.next);
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metaDescription} />
</svelte:head>

{#if postAdjacencyInfo}
	<div class="md:columns-2 sm:columns-1">
		<HeadingLink id="title" tag="h2">
			{title}
		</HeadingLink>

		<div class="flex">
			{#if previousPostMetadata}
			{/if}

			{#if nextPostMetadata}
			{/if}
		</div>
	</div>
{:else}
	<HeadingLink id="title" tag="h2">
		{title}
	</HeadingLink>
{/if}

<MarkdownParagraph class="mb-4" source={markdown} />
