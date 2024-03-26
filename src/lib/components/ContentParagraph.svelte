<!--
	@component
	Component for rendering a paragraph with some common styling.
-->

<script>
	import { P } from 'flowbite-svelte';

	/** @type {string} Classes to apply to the Paragraph.*/
	let pClass = '';
	export { pClass as class };
</script>

<P class={`mb-4 ${pClass}`}>
	<slot />
</P>
