<!--
	@component
	Component for rendering Markdown lists with Flowbite Svelte components and default styles.
-->

<script>
	import UnorderedList from '../UnorderedList.svelte';
	import OrderedList from '../OrderedList.svelte';

	/** @type {boolean} Whether or not the list is ordered. */
	export let ordered;
	/** @type {string} The current value to start the list at. */
	export let start;
</script>

{#if ordered}
	<OrderedList class="mb-4" {start}><slot /></OrderedList>
{:else}
	<UnorderedList class="mb-4"><slot /></UnorderedList>
{/if}
