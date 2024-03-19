<!--
	@component
	Component for wrapping an unordered list with some common styling.
-->

<script>
	import { List } from 'flowbite-svelte';

	/**
	 * Additional classes to apply to the List.
	 * @type {string}
	 */
	export let additionalClasses = '';
</script>

<List tag="ul" class={`list-outside ml-4 ${additionalClasses}`}>
	<slot />
</List>
