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
	metaDescription="Search through all blog posts made on the site."
	markdown={pageDescription}
/>

<UnderConstructionSign />
