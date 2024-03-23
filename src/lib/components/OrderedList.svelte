<!--
	@component
	Component for wrapping an ordered list with some common styling.
-->

<script>
	import { List } from 'flowbite-svelte';

	/** @type {number?} Starting value of the list. */
	export let start = null;

	/** @type {string} Additional classes to apply to the List. */
	let additionalClasses = '';
	export { additionalClasses as class };
</script>

<List
	tag="ol"
	class={`list-outside ml-7 mb-4 text-gray-900 dark:text-white leading-normal font-normal text-left whitespace-normal ${additionalClasses}`}
	{start}
>
	<slot />
</List>
