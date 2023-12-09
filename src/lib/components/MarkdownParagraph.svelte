<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Paragraph from '$lib/components/markdownRenderers/Paragraph.svelte';
	import List from '$lib/components/markdownRenderers/List.svelte';
	import ListItem from '$lib/components/markdownRenderers/ListItem.svelte';

	export let source;
</script>

<div class="markdown">
	<SvelteMarkdown
		{source}
		options={{ breaks: true }}
		renderers={{ paragraph: Paragraph, list: List, listItem: ListItem }}
	/>
</div>
