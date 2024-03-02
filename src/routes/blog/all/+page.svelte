<script>
	import { page } from '$app/stores';
	import { P, A, Badge, Span } from 'flowbite-svelte';
	import { ArrowRightSolid } from 'flowbite-svelte-icons';

	import { GetItemForUrl } from '$lib/Navigation';
	import { BuildUrlForPost, GetAllPostMetadata } from '$lib/blog/PostsHelpers';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
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

{#each allMetadata as post}
	<div>
		<P class="flex gap-3 flex-wrap"
			><strong>{post.posted} </strong> <ArrowRightSolid class="w-3 my-auto" /> {post.title}</P
		>
		<P class="ml-4 dark:text-gray-400 text-gray-500">{post.summary}</P>
		<div class="md:columns-2 sm:columns-1 mt-3">
			<A href={BuildUrlForPost(post.id)}>Read More...</A>
			<Span class="flex gap-2">
				{#each post.tags as tag}
					<Badge color="green" rounded>{tag}</Badge>
				{/each}
			</Span>
		</div>
	</div>
{/each}
