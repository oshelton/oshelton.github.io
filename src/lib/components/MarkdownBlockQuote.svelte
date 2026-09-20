<!--
	@component
	Component for rendering Markdown Block quotes with Flowbite Svelte components and default styles.
-->

<script>
	import { Blockquote } from 'flowbite-svelte';
</script>

<Blockquote border bg class="p-4 mb-4">
	<slot />
</Blockquote>
