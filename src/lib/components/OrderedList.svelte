<!--
	@component
	Component for wrapping an ordered list with some common styling.
-->

<script>
	import { List } from 'flowbite-svelte';

	/** @type {number?} Starting value of the list. */
	export let start = null;

	/** @type {string} Additional classes to apply to the List. */
	export let additionalClasses = '';
</script>

<List tag="ol" class={`list-outside ml-4 ${additionalClasses}`} {start}>
	<slot />
</List>
