<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let source;
</script>

<div class="markdown">
	<SvelteMarkdown {source} options={{ breaks: true }} />
</div>

<style>
	div :global(p) {
		margin-bottom: 1rem;
	}
</style>
