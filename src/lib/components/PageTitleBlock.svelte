<!--
	@component
	Reusable component for creating a simple page title and description block.
-->

<script>
	import { Heading } from 'flowbite-svelte';
	import MarkdownParagraph from '$lib/components/MarkdownParagraph.svelte';

	/** @type {string} Title of the page. */
	export let title;
	/** @type {string} Description to use in the head meta data of the page. */
	export let metaDescription;
	/** @type {string} Markdown content to display as the page's description. */
	export let markdown;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metaDescription} />
</svelte:head>

<Heading tag="h1" class="mb-8 text-2xl lg:text-3xl flex flex-row flex-wrap">
	{title}
</Heading>

<MarkdownParagraph class="mb-4" source={markdown} />
