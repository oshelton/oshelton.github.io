<!--
  @component

  Component for the Search Blog Posts page.
-->

<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { A, Badge, Button, Checkbox, Modal, Toggle, P } from 'flowbite-svelte';

	import { GetItemForUrl } from '$lib/navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import { CountPageVisit } from '$lib/visitor';
	import { AllTags } from '$lib/blog/SearchData';
	import { GetPostIdsForTags } from '$lib/blog/SearchHelpers';
	import { BuildUrlForPost, GetMetadatasForPostIds } from '$lib/blog/PostsHelpers';

	CountPageVisit();

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `This page lets you search through all Blog Posts available on this site.`;

	// Load saved preferences.
	const preferences = browser && localStorage.getItem('SearchPreferences');

	/** @type {import('$lib/types').SearchPostPreferences} */
	const parsedPreferences = preferences && JSON.parse(preferences);

	/**
	 * If searching by tags is enabled.
	 * @type {boolean}
	 */
	let searchTags = parsedPreferences?.searchTags ?? false;

	/**
	 * Selected tags for searching.
	 * @type {string[]}
	 */
	let selectedSearchTags = parsedPreferences?.selectedSearchTags ?? [];

	/**
	 * If the tag selector dialog is open or not.
	 * @type {boolean}
	 */
	let isTagSelectorOpen = false;

	/**
	 * Array of matching post metadata.
	 * @type {import('$lib/types').PostMetadata[]}
	 */
	let foundPostMetadata = [];

	// Save Preferences.
	onMount(() => {
		return () => {
			console.log('unmounting');

			localStorage.setItem(
				'SearchPreferences',
				JSON.stringify({
					searchTags: searchTags,
					selectedSearchTags: selectedSearchTags
				})
			);
		};
	});

	/**
	 * Find posts matching selected criteria.
	 */
	function searchForPosts() {
		const postIdsMatchingTags = GetPostIdsForTags(selectedSearchTags);
		foundPostMetadata = GetMetadatasForPostIds(postIdsMatchingTags)
			.orderByDescending((x) => x.posted)
			.toArray();

		console.log(foundPostMetadata);
	}
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="Search through all blog posts made on the site."
	markdown={pageDescription}
/>

<div class="flex gap-2 flex-wrap items-center">
	<Toggle bind:checked={searchTags}>Tags</Toggle>

	<div class="hidden gap-3 flex-wrap sm:flex">
		{#each selectedSearchTags as tag}
			<Badge color="green">{tag}</Badge>
		{/each}
	</div>

	<P class="flex sm:hidden">{selectedSearchTags.length} Tag(s) Selected</P>

	<Button size="xs" outline disabled={!searchTags} on:click={() => (isTagSelectorOpen = true)}>
		Select Tags
	</Button>

	<Modal
		title="Select Tags to search for"
		bind:open={isTagSelectorOpen}
		size="md"
		autoclose
		outsideclose
	>
		<div class="flex flex-col flex-wrap gap-2 max-h-96">
			{#each AllTags as tag}
				<Checkbox bind:group={selectedSearchTags} value={tag}>
					{tag}
				</Checkbox>
			{/each}

			<Button class="place-self-end">Close</Button>
		</div>
	</Modal>
</div>

<Button
	class="place-self-start mt-3"
	disabled={!searchTags || selectedSearchTags.length === 0}
	on:click={searchForPosts}
>
	Search Posts
</Button>

{#if foundPostMetadata.length === 0}
	<P class="mt-16 mx-0 place-self-center">- No Posts Found -</P>
{:else}
	<div class="flex flex-col gap-3 mt-12">
		{#each foundPostMetadata as metadata}
			<div class="flex flex-col">
				<A href={BuildUrlForPost(metadata.id)}>
					<b>{metadata.posted} - </b>
					{metadata.title}
				</A>

				<P class="ml-8 dark:text-gray-400 text-gray-500">
					{metadata.summary}
				</P>

				<div class="flex gap-2 ml-8 mt-2">
					{#each metadata.tags as tag}
						<Badge color="green">{tag}</Badge>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/if}
