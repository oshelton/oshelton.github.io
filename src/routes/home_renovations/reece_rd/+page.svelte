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
	metaDescription="About my first major home renovation project with my in-laws."
	markdown={pageDescription}
/>

<UnderConstructionSign />
