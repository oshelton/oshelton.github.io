<!--
	@component
	Component for rendering a collection of markdown as one or more paragraphs.
-->

<script module>
	import { Li } from 'flowbite-svelte';
	import ContentParagraph from '$lib/components/ContentParagraph.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';
	import MarkdownBlockQuote from '$lib/components/MarkdownBlockQuote.svelte';

	// svelte-exmarkdown maps renderers by HTML element name rather than by
	// markdown node type, so ordered and unordered lists are separate entries
	// and the old List/ListItem wrapper components are no longer needed.
	//
	// Module scope so every instance shares one array rather than rebuilding it.
	const plugins = [
		{
			renderer: {
				p: ContentParagraph,
				ol: OrderedList,
				ul: UnorderedList,
				li: Li,
				blockquote: MarkdownBlockQuote
			}
		}
	];
</script>

<script>
	import Markdown from 'svelte-exmarkdown';

	/** @type {string} Markdown content to display. */
	export let source = '';
	/** @type {string} Classes to apply to the markdown container.*/
	let markdownClass = '';
	export { markdownClass as class };
</script>

<div class={markdownClass}>
	<Markdown md={source} {plugins} />
</div>
