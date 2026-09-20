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
	<button onclick={() => (isFullPreviewOpen = true)}>
		<Img {src} alt={tooltip} class={`${imgSize} ${imgClass}`} />
	</button>

	{#if tooltip}
		<Tooltip>{tooltip}</Tooltip>
	{/if}
</Span>

<!--
	flowbite-svelte 1.x removed autoclose and outsideclose, and the close button
	Modal renders next to a title does nothing: it dismisses through a context
	Dialog sets on itself, which Modal's children are not inside. That left the
	preview closable only with Escape - no way out at all on a touch device.

	So the X is suppressed with dismissable={false} and the image itself closes
	the preview, which is what a lightbox should do anyway.
-->
<Modal title={tooltip} bind:open={isFullPreviewOpen} size="xl" dismissable={false}>
	<button
		type="button"
		class="block w-full cursor-zoom-out"
		aria-label="Close image preview"
		onclick={() => (isFullPreviewOpen = false)}
	>
		<Img src={fullSrc ?? src} alt={tooltip} class="max-w-full mx-auto" />
	</button>
</Modal>
