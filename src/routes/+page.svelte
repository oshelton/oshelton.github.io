<script>
	import { Button, Card, Heading, Hr, P, Tooltip } from 'flowbite-svelte';
	import { ArrowRightSolid } from 'flowbite-svelte-icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import ConeStriped from 'svelte-icons-pack/bs/BsConeStriped';

	import MarkdownParagraph from '$lib/components/MarkdownParagraph.svelte';
	import PostMetadataBlock from '$lib/components/PostMetadataBlock.svelte';
	import { CountPageVisit } from '$lib/Visitor';
	import { NavigationMenus } from '$lib/Navigation.js';
	import { GetMetdataForMostRecentPosts } from '$lib/blog/PostsHelpers';
	import { AllRecentChanges } from '$lib/data/RecentChanges';

	CountPageVisit();

	const mostRecentPosts = GetMetdataForMostRecentPosts(5);

	function getDescriptionForItem(menu) {
		if (menu.title === 'About') {
			return `All about me, my work history, education backstory, and some of the other things I enjoy doing.

I do a *lot* more than just engineer software...`;
		} else if (menu.title === 'Renovations') {
			return `I have done several home renovations.
		
So far, just two homes of our own and one that was an investment/flip property.`;
		} else if (menu.title === 'Software') {
			return "I've written quite a few cool projects over the years for work and for fun.";
		} else if (menu.title === 'DIY/Woodworking') {
			return `I occasionally find that I need to create something with my bare hands to meet a need we have around the house.
		
These projects also come plans included.`;
		} else if (menu.title === 'Blog') {
			return 'This site also plays host to a blog where I discuss various tech things and some of my projects.';
		} else {
			console.error(`Unknown nav title ${menu.title} encountered.`);
			return '';
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Heading tag="h1" class="mb-8 text-2xl lg:text-3xl flex flex-row flex-wrap">
	Software
	<span class="text-slate-600 ml-4 mr-4">&bull;</span>
	DIY
	<span class="text-slate-600 ml-4 mr-4">&bull;</span>
	Home Reno
	<span class="text-slate-600 ml-4 mr-4">&bull;</span>
	Photography
</Heading>

<P class="mb-4">This is the profile/portfolio site of Jack Owen Shelton.</P>

<P class="mb-4">
	This site is dedicated to various parts of my life, projects I have worked on over the years, and
	giving folks a better picture of who I am and what I am up to.
</P>

<P class="mb-8">At some point it may even host a blog.</P>

<Hr classHr="w-[90%] min-h-[1px] mx-auto my-2" />

<div class="py-8 gap-4 columns-1 lg:columns-2 md:columns-2">
	{#each NavigationMenus as menu}
		<Card class="mb-4 max-w-full break-inside-avoid-column">
			<Heading tag="h6" class="flex mb-4 align-middle">
				<svelte:component this={menu.icon} class="w-5 h-5 mr-2 my-auto" />
				{menu.title}
			</Heading>

			<MarkdownParagraph source={getDescriptionForItem(menu)} />

			<div class="flex flex-wrap gap-2">
				{#each menu.items as item}
					{#if item.underConstruction}
						<Button class="p-2" color="alternative" href={item.url} target={item.target} pill>
							<span class="flex gap-1">
								<Icon size="16" className="my-auto" src={ConeStriped} />
								{item.title}
							</span>
						</Button>

						<Tooltip>This page is under construction.</Tooltip>
					{:else}
						<Button class="p-2" href={item.url} target={item.target} pill>
							{item.title}
						</Button>
					{/if}
				{/each}
			</div>
		</Card>
	{/each}
</div>

<Hr classHr="w-[90%] min-h-[1px] mx-auto my-2" />

<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
	<div class="flex flex-col gap-3 mb-6">
		<Heading tag="h4" class="mb-4">Recent Posts</Heading>

		{#each mostRecentPosts as post}
			<PostMetadataBlock metadata={post} />
		{/each}
	</div>

	<div class="flex flex-col gap-3 mb-6">
		<Heading tag="h4" class="mb-4">Recent Changes:</Heading>

		{#each AllRecentChanges as change}
			<div class="flex flex-col gap-1">
				<div class="flex gap-3">
					<P><strong>{change.date.toLocaleDateString()}</strong></P>
					<P><ArrowRightSolid class="w-3 mt-0.5 self-center" /></P>
					<P>{change.title}</P>
				</div>

				{#if change.changedPageItems && change.changedPageItems.length > 0}
					<div class="ml-12 col-span-2 flex gap-4 flex-wrap">
						{#each change.changedPageItems as pageItem}
							<Button
								class="p-2"
								color="alternative"
								href={pageItem.url}
								target={pageItem.target}
								pill
							>
								<span class="flex gap-1">
									{pageItem.title}
								</span>
							</Button>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
