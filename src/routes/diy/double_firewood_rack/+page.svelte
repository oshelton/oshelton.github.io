<script>
	import { page } from '$app/stores';

	import { GetItemForUrl } from '$lib/Navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import UnderConstructionSign from '$lib/components/UnderConstructionSign.svelte';

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = ``;
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="A simple jig I use to sharpen chainsaw blades when they aren't mounted on my chainsaw."
	markdown={pageDescription}
/>

<UnderConstructionSign />
