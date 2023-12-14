<script>
	import { Img, Modal, Tooltip } from 'flowbite-svelte';

	export let imgClass = 'rounded-lg';
	export let imgSize = 'w-48';
	export let tooltip = null;
	export let src = null;
	export let fullSrc = null;

	let isFullPreviewOpen = false;
</script>

<button on:click={() => (isFullPreviewOpen = true)}>
	<Img {src} alt={tooltip} size={imgSize} class={imgClass} />
</button>

{#if tooltip}
	<Tooltip>{tooltip}</Tooltip>
{/if}

<Modal title={tooltip} bind:open={isFullPreviewOpen} size="xl" autoclose outsideclose>
	{#if fullSrc}
		<Img src={fullSrc} size="max-w" />
	{:else}
		<Img {src} size="max-w" />
	{/if}
</Modal>
