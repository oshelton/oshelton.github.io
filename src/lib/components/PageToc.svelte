<!--
	@component
	Component for representing a basic page table of contents.
-->

<script>
	import { A, Button, Popover, P, Tooltip } from 'flowbite-svelte';
	import { BarsSolid } from 'flowbite-svelte-icons';

	/** @type {string} Title of the page to display in the TOC.*/
	export let item;
	/** @type {{url: string, title: string, level: number}[]} Content items to display in the TOC. */
	export let contents;
</script>

<Button
	id="button"
	pill
	outline
	color="light"
	size="md"
	class="absolute overflow-hidden !p-2 ml-[-2.5rem] z-50"
>
	<BarsSolid class="w-3 h-3" />
</Button>

<span class="overflow-hidden">
	<Tooltip placement="right" triggeredBy="#button" class="z-50">
		Open/close TOC for the "{item.title}" page.
	</Tooltip>

	<Popover
		triggeredBy="#button"
		trigger="click"
		placement="bottom"
		title="{item.title} Contents"
		class="ml-2 z-50"
	>
		{#each contents as content}
			{@const indentationClass = content.level && content.level > 1 ? `ml-${content.level + 1}` : ''}
			<P class={indentationClass}><A href={content.url}>{content.title}</A></P>
		{/each}
	</Popover>
</span>
