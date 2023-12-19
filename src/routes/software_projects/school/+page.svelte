<script>
	import { page } from '$app/stores';

	import { GetItemForUrl } from '$lib/navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import UnderConstructionSign from '$lib/components/UnderConstructionSign.svelte';

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = ``;
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="Some of the more interesting and more significant projects I worked on in school."
	markdown={pageDescription}
/>

<UnderConstructionSign />
