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
	metaDescription="A double depth firewood rack I have built 3 of for storing firewood at our home."
	markdown={pageDescription}
/>

<UnderConstructionSign />
