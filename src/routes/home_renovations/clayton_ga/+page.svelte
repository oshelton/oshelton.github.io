<script>
	import { page } from '$app/stores';

	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import UnderConstructionSign from '$lib/components/UnderConstructionSign.svelte';

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = ``;
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="All about the renovation work we did on our first owned home as a married couple."
	markdown={pageDescription}
/>

<UnderConstructionSign />
