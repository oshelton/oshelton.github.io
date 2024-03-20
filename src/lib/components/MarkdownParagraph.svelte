<!--
	@component
	Component for rendering a collection of markdown as one or more paragraphs.
-->

<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Paragraph from '$lib/components/markdownRenderers/Paragraph.svelte';
	import List from '$lib/components/markdownRenderers/List.svelte';
	import ListItem from '$lib/components/markdownRenderers/ListItem.svelte';
	import BlockQuote from '$lib/components/markdownRenderers/BlockQuote.svelte';

	/** @type {string} Markdown content to display. */
	export let source = '';
	/** @type {string} Classes to apply to the markdown container.*/
	let markdownClass = '';
	export { markdownClass as class };
</script>

<div class={markdownClass}>
	<SvelteMarkdown
		{source}
		options={{ breaks: true }}
		renderers={{ paragraph: Paragraph, list: List, listItem: ListItem, blockquote: BlockQuote }}
	/>
</div>
