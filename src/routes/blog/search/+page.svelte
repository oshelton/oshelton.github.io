<!--
  @component

  Component for the Search Blog Posts page.

  This is the only runes-mode component on the site; everything else is still
  legacy mode. flowbite-svelte 1.x's Checkbox mutates the array behind
  bind:group in place, which a legacy-mode parent never observes, so the tag
  filter silently did nothing until this file was converted.
-->
<svelte:options runes={true} />

<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Badge, Button, Checkbox, Modal, Toggle, P } from 'flowbite-svelte';
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
	import { GetMetadatasForPostIds } from '$lib/blog/PostsHelpers';

	CountPageVisit();

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `This page lets you search through all Blog Posts available on this site.`;

	/**
	 * Classes for the date pickers' own inputs. svelty-picker 6 removed the
	 * "inputs" slot that previously let us supply a flowbite <Input>, so these
	 * reproduce that look on the input it renders itself.
	 */
	const pickerInputClasses =
		'block w-full p-2 sm:text-xs rounded-lg bg-gray-50 text-gray-900 border border-gray-300 ' +
		'dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 ' +
		'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 ' +
		'dark:focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50';

	// Load saved preferences.
	const preferences = browser && localStorage.getItem('SearchPreferences');

	/** @type {import('$lib/types').SearchPostPreferences} */
	const parsedPreferences = preferences && JSON.parse(preferences);

	/** If searching by at least posted by date is enabled. @type {boolean} */
	let searchAtLeastPostedBy = $state(parsedPreferences?.searchAtLeastPostedBy ?? false);
	/** The date to at least be posted by when searching. @type {Date} */
	let searchAtLeastPostedByDate = $state(parsedPreferences?.searchAtLeastPostedByDate ?? null);

	/** If searching by no later posted by date is enabled. @type {boolean} */
	let searchNoLaterPostedBy = $state(parsedPreferences?.searchNoLaterPostedBy ?? false);
	/** The date to no later be posted by when searching. @type {Date} */
	let searchNoLaterPostedByDate = $state(parsedPreferences?.searchNoLaterPostedByDate ?? null);

	/** If searching by tags is enabled. @type {boolean} */
	let searchTags = $state(parsedPreferences?.searchTags ?? false);
	/** Selected tags for searching. @type {string[]} */
	let selectedSearchTags = $state(parsedPreferences?.selectedSearchTags ?? []);
	/** If the tag selector dialog is open or not. @type {boolean} */
	let isTagSelectorOpen = $state(false);

	/**
	 * Array of matching post metadata. Raw because it is only ever replaced
	 * wholesale, never mutated - unlike selectedSearchTags above.
	 * @type {import('$lib/types').PostMetadata[]}
	 */
	let foundPostMetadata = $state.raw([]);

	// Save Preferences.
	onMount(() => {
		return () => {
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
			postIdsToFetch.push(...GetPostsPostedOnOrAfter(searchAtLeastPostedByDate));
		}

		if (searchNoLaterPostedBy && searchNoLaterPostedByDate) {
			postIdsToFetch.push(...GetPostsPostedOnOrBefore(searchNoLaterPostedByDate));
		}

		if (searchTags && selectedSearchTags && selectedSearchTags.length > 0) {
			postIdsToFetch.push(...GetPostIdsForTags(selectedSearchTags));
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
		inputClasses={pickerInputClasses}
	/>
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
		inputClasses={pickerInputClasses}
	/>
</div>

<!-- Tag bassed searching. -->
<div class="flex gap-2 flex-wrap items-center mt-2">
	<Toggle bind:checked={searchTags}>Tags</Toggle>

	<div class="hidden gap-3 flex-wrap sm:flex">
		{#each selectedSearchTags as tag (tag)}
			<Badge color="green">{tag}</Badge>
		{/each}
	</div>

	<P class="flex sm:hidden">{selectedSearchTags.length} Tag(s) Selected</P>

	<Button size="xs" outline disabled={!searchTags} onclick={() => (isTagSelectorOpen = true)}>
		Select Tags
	</Button>

	<!-- flowbite-svelte 1.x dropped autoclose and outsideclose, so the Close
	     button below closes the modal explicitly. -->
	<Modal title="Select Tags to search for" bind:open={isTagSelectorOpen} size="md">
		<div class="flex flex-col flex-wrap gap-2 max-h-96">
			{#each AllTags as tag (tag)}
				<Checkbox bind:group={selectedSearchTags} value={tag}>
					{tag}
				</Checkbox>
			{/each}

			<Button class="place-self-end" onclick={() => (isTagSelectorOpen = false)}>Close</Button>
		</div>
	</Modal>
</div>

<Button
	class="place-self-start mt-3"
	disabled={(!searchAtLeastPostedBy || !searchAtLeastPostedByDate) &&
		(!searchNoLaterPostedBy || !searchNoLaterPostedByDate) &&
		(!searchTags || selectedSearchTags.length === 0)}
	onclick={searchForPosts}
>
	Search Posts
</Button>

{#if foundPostMetadata.length === 0}
	<P class="mt-16 mx-0 place-self-center">- No Posts Found -</P>
{:else}
	<div class="flex flex-col gap-3 mt-12">
		{#each foundPostMetadata as metadata (metadata.id)}
			<PostMetadataBlock {metadata} />
		{/each}
	</div>
{/if}
