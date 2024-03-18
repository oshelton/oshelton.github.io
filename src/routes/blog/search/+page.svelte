<!--
  @component

  Component for the Search Blog Posts page.
-->

<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { A, Badge, Button, Checkbox, Input, Modal, Toggle, P } from 'flowbite-svelte';
	import SveltyPicker from 'svelty-picker';

	import { GetItemForUrl } from '$lib/Navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PostMetadataBlock from '$lib/components/PostMetadataBlock.svelte';
	import { CountPageVisit } from '$lib/Visitor';
	import { AllTags } from '$lib/blog/SearchData';
	import {
		GetPostsPostedOnOrAfter,
		GetPostsPostedOnOrBefore,
		GetPostIdsForTags
	} from '$lib/blog/SearchHelpers';
	import { BuildUrlForPost, GetMetadatasForPostIds } from '$lib/blog/PostsHelpers';

	CountPageVisit();

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `This page lets you search through all Blog Posts available on this site.`;

	// Load saved preferences.
	const preferences = browser && localStorage.getItem('SearchPreferences');

	/** @type {import('$lib/types').SearchPostPreferences} */
	const parsedPreferences = preferences && JSON.parse(preferences);

	/** If searching by at least posted by date is enabled. @type {boolean} */
	let searchAtLeastPostedBy = parsedPreferences?.searchAtLeastPostedBy ?? false;
	/** The date to at least be posted by when searching. @type {Date} */
	let searchAtLeastPostedByDate = parsedPreferences?.searchAtLeastPostedByDate;

	/** If searching by no later posted by date is enabled. @type {boolean} */
	let searchNoLaterPostedBy = parsedPreferences?.searchNoLaterPostedBy ?? false;
	/** The date to no later be posted by when searching. @type {Date} */
	let searchNoLaterPostedByDate = parsedPreferences?.searchNoLaterPostedByDate;

	/** If searching by tags is enabled. @type {boolean} */
	let searchTags = parsedPreferences?.searchTags ?? false;
	/** Selected tags for searching. @type {string[]} */
	let selectedSearchTags = parsedPreferences?.selectedSearchTags ?? [];
	/** If the tag selector dialog is open or not. @type {boolean} */
	let isTagSelectorOpen = false;

	/** Array of matching post metadata. @type {import('$lib/types').PostMetadata[]} */
	let foundPostMetadata = [];

	//browser && localStorage.setItem('theme', 'dark');

	// Save Preferences.
	onMount(() => {
		return () => {
			console.log('unmounting');

			localStorage.setItem(
				'SearchPreferences',
				JSON.stringify({
					searchAtLeastPostedBy: searchAtLeastPostedBy,
					searchAtLeastPostedByDate: searchAtLeastPostedByDate,
					searchNoLaterPostedBy: searchNoLaterPostedBy,
					searchNoLaterPostedByDate: searchNoLaterPostedByDate,
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
		let postIdsToFetch = [];
		if (searchAtLeastPostedBy && searchAtLeastPostedByDate) {
			postIdsToFetch.push(GetPostsPostedOnOrAfter(searchAtLeastPostedByDate));
		}

		if (searchNoLaterPostedBy && searchNoLaterPostedByDate) {
			postIdsToFetch.push(GetPostsPostedOnOrBefore(searchNoLaterPostedByDate));
		}

		if (searchTags && selectedSearchTags && selectedSearchTags.length > 0) {
			postIdsToFetch.push(GetPostIdsForTags(selectedSearchTags));
		}

		/** @type {Object.<string, number>} */
		let counts = [];
		postIdsToFetch.forEach((id) => {
			if (!counts[id]) {
				counts[id] = 1;
			} else {
				counts[id]++;
			}
		});

		const requiredIdCount =
			(searchAtLeastPostedBy ? 1 : 0) + (searchNoLaterPostedBy ? 1 : 0) + (searchTags ? 1 : 0);
		postIdsToFetch.length = 0;
		for (const [key, value] of Object.entries(counts)) {
			if (value >= requiredIdCount) {
				postIdsToFetch.push(key);
			}
		}

		foundPostMetadata = GetMetadatasForPostIds(postIdsToFetch)
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

<!-- At least posted by filter. -->
<div class="flex gap-2 flex-wrap items-center">
	<Toggle bind:checked={searchAtLeastPostedBy}>Posted at least by:</Toggle>

	<SveltyPicker
		bind:value={searchAtLeastPostedByDate}
		mode="date"
		displayFormat="mm/dd/yyyy"
		format="mm/dd/yyyy"
		disabled={!searchAtLeastPostedBy}
	>
		<svelte:fragment
			slot="inputs"
			let:disabled
			let:displayValue
			let:onInputFocus
			let:onInputBlur
			let:onKeyDown
		>
			<Input
				size="sm"
				value={displayValue}
				on:keydown={onKeyDown}
				on:click={onInputFocus}
				on:blur={onInputBlur}
				{disabled}
				readonly
			/>
		</svelte:fragment>
	</SveltyPicker>
</div>

<!-- Posted no later than by filter. -->
<div class="flex gap-2 flex-wrap items-center mt-2">
	<Toggle bind:checked={searchNoLaterPostedBy}>Posted no later than:</Toggle>

	<SveltyPicker
		bind:value={searchNoLaterPostedByDate}
		mode="date"
		displayFormat="mm/dd/yyyy"
		format="mm/dd/yyyy"
		disabled={!searchNoLaterPostedBy}
	>
		<svelte:fragment
			slot="inputs"
			let:disabled
			let:displayValue
			let:onInputFocus
			let:onInputBlur
			let:onKeyDown
		>
			<Input
				size="sm"
				value={displayValue}
				on:keydown={onKeyDown}
				on:click={onInputFocus}
				on:blur={onInputBlur}
				{disabled}
				readonly
			/>
		</svelte:fragment>
	</SveltyPicker>
</div>

<!-- Tag bassed searching. -->
<div class="flex gap-2 flex-wrap items-center mt-2">
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
	disabled={(!searchAtLeastPostedBy || !searchAtLeastPostedByDate) &&
		(!searchNoLaterPostedBy || !searchNoLaterPostedByDate) &&
		(!searchTags || selectedSearchTags.length === 0)}
	on:click={searchForPosts}
>
	Search Posts
</Button>

{#if foundPostMetadata.length === 0}
	<P class="mt-16 mx-0 place-self-center">- No Posts Found -</P>
{:else}
	<div class="flex flex-col gap-3 mt-12">
		{#each foundPostMetadata as metadata}
			<PostMetadataBlock {metadata} />
		{/each}
	</div>
{/if}
