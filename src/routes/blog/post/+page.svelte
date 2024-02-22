<script>
	import { page } from '$app/stores';

	import { GetMetadataForPost, GetComponentForPost } from '$lib/blog/PostsHelpers';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import { P, Badge } from 'flowbite-svelte';

	const postId = $page.url.searchParams.get('id');
	const postMetadata = GetMetadataForPost(postId);
	const postComponent = GetComponentForPost(postId);
</script>

<PageTitleBlock title={postMetadata.title} metaDescription={postMetadata.summary} markdown="" />

<P class="mb-4">
	<strong>Published:</strong>
	{postMetadata.posted}
	{#if postMetadata.lastModified && postMetadata.lastModified !== postMetadata.posted}
		<strong> - Last Modified:</strong>
		{postMetadata.lastModified}
	{/if}
	<br />
	<strong>Tags:</strong>
	{#each postMetadata.tags as tag}<Badge color="green" rounded class="ml-2">{tag}</Badge>{/each}
</P>

<svelte:component this={postComponent} />
