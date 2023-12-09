<!--
	@component
	Component for rendering Markdown lists with Flowbite Svelte components and default styles.
-->

<script>
	import { List } from 'flowbite-svelte';

	export let ordered;
	export let start;
</script>

<List class="mb-4 list-outside ml-4" tag={ordered ? 'ol' : 'ul'} {start}><slot /></List>
