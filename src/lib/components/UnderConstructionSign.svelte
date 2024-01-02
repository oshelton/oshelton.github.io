<!--
	@component
	Component for displaying a simple under construction block for use on pages that are still being worked on.
-->

<script>
	import { Hr } from 'flowbite-svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import ConeStriped from 'svelte-icons-pack/bs/BsConeStriped';
	import { Heading } from 'flowbite-svelte';

	export let iconSize = '48';

	/** @type {string} Classes to apply to the Heading displayed under the construction icons. */
	export let headingClass = 'text-xl lg:text-2xl';
	/** @type {string} Actual heading tag to use, h1, h2, etc. */
	export let headingTag = 'h2';
	/** @type {string} Content to display in the heading under the construction icons. */
	export let headingContent = 'Under Construction';
</script>

<div class="flex flex-col items-center mx-auto">
	<Hr classHr="w-[100%] min-h-[1px] mx-auto my-4" />

	<div class="flex mb-4">
		<Icon size={iconSize} src={ConeStriped} />
		<Icon size={iconSize} src={ConeStriped} />
		<Icon size={iconSize} src={ConeStriped} />
	</div>

	<Heading tag={headingTag} class={headingClass}>{headingContent}</Heading>

	<Hr classHr="w-[100%] min-h-[1px] mx-auto my-4" />
</div>
