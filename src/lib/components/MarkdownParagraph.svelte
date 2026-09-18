<!--
	@component
	Component for rendering a collection of markdown as one or more paragraphs.
-->

<script>
	import Markdown from 'svelte-exmarkdown';
	import { Li } from 'flowbite-svelte';
	import ContentParagraph from '$lib/components/ContentParagraph.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';
	import BlockQuote from '$lib/components/markdownRenderers/BlockQuote.svelte';

	/** @type {string} Markdown content to display. */
	export let source = '';
	/** @type {string} Classes to apply to the markdown container.*/
	let markdownClass = '';
	export { markdownClass as class };

	// svelte-exmarkdown maps renderers by HTML element name rather than by
	// markdown node type, so ordered and unordered lists are separate entries
	// and the old List/ListItem wrapper components are no longer needed.
	const plugins = [
		{
			renderer: {
				p: ContentParagraph,
				ol: OrderedList,
				ul: UnorderedList,
				li: Li,
				blockquote: BlockQuote
			}
		}
	];
</script>

<div class={markdownClass}>
	<Markdown md={source} {plugins} />
</div>
