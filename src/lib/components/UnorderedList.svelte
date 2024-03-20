<!--
	@component
	Component for wrapping an unordered list with some common styling.
-->

<script>
	import { List } from 'flowbite-svelte';

	/** @type {string} Additional classes to apply to the List. */
	let additionalClasses = '';
	export { additionalClasses as class };
</script>

<List
	tag="ul"
	class={`list-outside ml-7 text-gray-900 dark:text-white leading-normal font-normal text-left whitespace-normal ${additionalClasses}`}
>
	<slot />
</List>
