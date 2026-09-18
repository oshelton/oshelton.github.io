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
		<Img {src} alt={tooltip} class={`${imgSize} ${imgClass}`} />
	</button>

	{#if tooltip}
		<Tooltip>{tooltip}</Tooltip>
	{/if}
</Span>

<!-- autoclose/outsideclose were removed in flowbite-svelte 1.x; the modal's
     own dismiss button and backdrop handle closing. -->
<Modal title={tooltip} bind:open={isFullPreviewOpen} size="xl">
	{#if fullSrc}
		<Img src={fullSrc} alt={tooltip} class="max-w-full mx-auto" />
	{:else}
		<Img {src} alt={tooltip} class="max-w-full mx-auto" />
	{/if}
</Modal>
