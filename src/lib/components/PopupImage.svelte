<!--
	@component
	Component for displaying an image with a tooltip, and when clicked showing a higher resolution version of it in a modal.
-->

<script>
	import { Img, Modal, Tooltip, Span } from 'flowbite-svelte';

	/** @type {string} Classes to apply to the image preview. */
	export let imgClass = 'rounded-lg';
	/** @type {string} Size class to use for the image. */
	export let imgSize = 'w-48';
	/** @type {string} Tooltip to display on the image thumbnail, also ussed ass the title of the popup modal. */
	export let tooltip = null;
	/** @type {string} Url used by the thumbnail image, and in the full size popup if fullSrc is unset. */
	export let src = null;
	/** @type {string} Url to the full size image to be displayed in the modal, may be null. */
	export let fullSrc = null;

	let isFullPreviewOpen = false;
</script>

<Span>
	<button on:click={() => (isFullPreviewOpen = true)}>
		<Img {src} alt={tooltip} size={imgSize} class={imgClass} />
	</button>

	{#if tooltip}
		<Tooltip>{tooltip}</Tooltip>
	{/if}
</Span>

<Modal title={tooltip} bind:open={isFullPreviewOpen} size="xl" autoclose outsideclose>
	{#if fullSrc}
		<Img src={fullSrc} size="max-w" imgClass="mx-auto" />
	{:else}
		<Img {src} size="max-w" imgClass="mx-auto" />
	{/if}
</Modal>
