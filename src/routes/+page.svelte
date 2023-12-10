<script>
	import { Button, Card, Heading, Hr, P, Tooltip } from 'flowbite-svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import ConeStriped from 'svelte-icons-pack/bs/BsConeStriped';

	import MarkdownParagraph from '$lib/components/MarkdownParagraph.svelte';
	import { NavigationMenus } from '$lib/navigation.js';
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
				{menu.label}
			</Heading>

			<MarkdownParagraph source={menu.description} />

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
