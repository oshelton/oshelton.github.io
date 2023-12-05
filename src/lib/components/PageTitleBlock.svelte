<script>
	import { Heading } from 'flowbite-svelte';

	import { GetItemForUrl } from '$lib/navigation.js';
	import MarkdownParagraph from '$lib/components/MarkdownParagraph.svelte';

	export let url;

	let navItem = GetItemForUrl(url);
</script>

<svelte:head>
	<title>{navItem.title}</title>
	<meta name="description" content={navItem.metaDescription} />
</svelte:head>

<Heading tag="h1" class="mb-8 text-2xl lg:text-3xl flex flex-row flex-wrap">
	{navItem.title}
</Heading>

<MarkdownParagraph class="mb-4" source={navItem.description} />
