<!--
	@component
	Component for the common approach to displaying a Blog Posts's metadata in a short concise format.
-->

<script>
	import { A, Badge, P } from 'flowbite-svelte';
	import { ArrowRightSolid } from 'flowbite-svelte-icons';

	import { BuildUrlForPost } from '$lib/blog/PostsHelpers';

	/**
	 * @typedef {import('$lib/types').PostMetadata} PostMetadata
	 */

	/** @type {PostMetadata} Blog Post Metadata to display information for. */
	export let metadata = null;
</script>

{#if metadata}
	<div class="flex flex-col gap-1">
		<div class="flex gap-3">
			<P><strong>{metadata.posted}</strong></P>
			<P><ArrowRightSolid class="w-3 mt-0.5 self-center" /></P>
			<P>{metadata.title}</P>
		</div>

		<P class="ml-4 dark:text-gray-400 text-gray-500">{metadata.summary}</P>

		<div class="flex flex-wrap items-stretch gap-2">
			<A class="mr-1" href={BuildUrlForPost(metadata.id)}>Read More...</A>

			{#each metadata.tags as tag}
				<Badge color="green" rounded>{tag}</Badge>
			{/each}
		</div>
	</div>
{:else}
	<P><strong>NO METADATA</strong></P>
{/if}
