<!--
	@component
	Component for rendering Markdown lists with Flowbite Svelte components and default styles.
-->

<script>
	import { List } from 'flowbite-svelte';

	/** @type {boolean} Whether or not the list is ordered. */
	export let ordered;
	/** @type {string} The current value to start the list at. */
	export let start;
</script>

<List class="mb-4 list-outside ml-4" tag={ordered ? 'ol' : 'ul'} {start}><slot /></List>
