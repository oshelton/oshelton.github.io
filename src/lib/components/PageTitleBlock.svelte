<script>
	import { Heading } from 'flowbite-svelte';
	import MarkdownParagraph from '$lib/components/MarkdownParagraph.svelte';

	export let title;
	export let metaDescription;
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
