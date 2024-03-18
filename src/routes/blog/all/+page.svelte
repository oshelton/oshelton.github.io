<script>
	import { page } from '$app/stores';
	import { P, A, Badge, Span } from 'flowbite-svelte';
	import { ArrowRightSolid } from 'flowbite-svelte-icons';

	import { GetItemForUrl } from '$lib/Navigation';
	import { BuildUrlForPost, GetAllPostMetadata } from '$lib/blog/PostsHelpers';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PostMetadataBlock from '$lib/components/PostMetadataBlock.svelte';
	import { CountPageVisit } from '$lib/Visitor';

	CountPageVisit();

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const allMetadata = GetAllPostMetadata();
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="Browse through all blog posts made on this site."
	markdown="This page lists out **all** blog Posts currently on the site; ordered by most recent first."
/>

<div class="flex flex-col gap-3 mb-6">
	{#each allMetadata as post}
		<PostMetadataBlock metadata={post} />
	{/each}
</div>
