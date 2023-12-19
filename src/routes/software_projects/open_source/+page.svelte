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
	metaDescription="About my open source and personal projects."
	markdown={pageDescription}
/>

<UnderConstructionSign />
