<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { Badge, Spinner } from 'flowbite-svelte';

	import {
		GetMetadataForPost,
		GetComponentForPost,
		GetAdjacencyInfoForPost
	} from '$lib/blog/PostsHelpers';
	import ContentParagraph from '$lib/components/ContentParagraph.svelte';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import { CountPageVisit } from '$lib/Visitor';

	CountPageVisit();

	const postId = browser && $page.url.searchParams.get('id');
	const postMetadata = browser && GetMetadataForPost(postId);
	const postComponent = browser && GetComponentForPost(postId);
	const postAdjacency = browser && GetAdjacencyInfoForPost(postId);
</script>

<PageTitleBlock
	title={postMetadata.title}
	metaDescription={postMetadata.summary}
	markdown={postMetadata.summary}
	postAdjacencyInfo={postAdjacency}
/>

<ContentParagraph>
	<strong>Published:</strong>
	{postMetadata.posted}
	{#if postMetadata.lastModified && postMetadata.lastModified !== postMetadata.posted}
		<strong> - Last Modified:</strong>
		{postMetadata.lastModified}
	{/if}
	<br />
	<strong>Tags:</strong>
	{#if browser}
		{#each postMetadata.tags as tag}<Badge color="green" rounded class="ml-2">{tag}</Badge>{/each}
	{/if}
</ContentParagraph>

{#await postComponent}
	<div class="flex items-center gap-2">
		<Spinner size="4" /> Loading...
	</div>
{:then component}
	<svelte:component this={component.default} />
{:catch error}
	{error}
{/await}
