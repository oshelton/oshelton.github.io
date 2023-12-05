<script>
	import { page } from '$app/stores';

	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import UnderConstructionSign from '$lib/components/UnderConstructionSign.svelte';
</script>

<PageTitleBlock url={$page.url.pathname} />

<UnderConstructionSign />
