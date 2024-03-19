<!--
	@component
	Component for rendering Markdown lists with Flowbite Svelte components and default styles.
-->

<script>
	import { List } from 'flowbite-svelte';

	import UnorderedList from '../UnorderedList.svelte';
	import OrderedList from '../OrderedList.svelte';

	/** @type {boolean} Whether or not the list is ordered. */
	export let ordered;
	/** @type {string} The current value to start the list at. */
	export let start;
</script>

{#if ordered}
	<OrderedList {start}><slot /></OrderedList>
{:else}
	<UnorderedList><slot /></UnorderedList>
{/if}
