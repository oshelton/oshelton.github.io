<script>
	import { A, Button, Popover, P, Tooltip } from 'flowbite-svelte';
	import { BarsSolid } from 'flowbite-svelte-icons';

	export let item;
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
			<P><A href={content.url}>{content.title}</A></P>
		{/each}
	</Popover>
</span>
