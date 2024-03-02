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
	metaDescription="All about the renovations we are making to our current home."
	markdown={pageDescription}
/>

<UnderConstructionSign />
