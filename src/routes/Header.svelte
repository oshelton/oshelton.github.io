<script>
	import { Img } from 'flowbite-svelte';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Tooltip
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { DarkMode } from 'flowbite-svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import ConeStriped from 'svelte-icons-pack/bs/BsConeStriped';
	import { page } from '$app/stores';

	import logo from '$lib/images/site-logo.jpg';
	import { NavigationMenus } from '$lib/navigation.js';

	$: activeUrl = $page.url.pathname;
</script>

<header class="w-full flex z-20 top-0 left-0">
	<Navbar
		class="px-2 sm:px-4 py-2.5 bg-slate-200 border-b border-slate-500 dark:border-gray-600 dark:bg-gray-800"
	>
		<NavBrand href="/">
			<Img src={logo} class="mr-3 h-6 sm:h-9 rounded" alt="A headshot of Owen Shelton" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Owen Shelton</span
			>
		</NavBrand>

		<div class="flex md:order-2">
			<NavHamburger />
			<DarkMode />
		</div>

		<NavUl {activeUrl}>
			<NavLi href="/">Home</NavLi>

			{#each NavigationMenus as menu}
				<NavLi class="cursor-pointer">
					{menu.label}<ChevronDownOutline
						class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
					/>
				</NavLi>
				<Dropdown {activeUrl} class="z-20">
					{#each menu.items as item}
						<DropdownItem href={item.url} target={item.target}>
							{#if item.underConstruction}
								<span class="flex gap-2">
									<Icon size="16" src={ConeStriped} />
									<Tooltip>This page is under construction.</Tooltip>
									{item.title}
								</span>
							{:else}
								<span class="ml-6">{item.title}</span>
							{/if}
						</DropdownItem>
					{/each}
				</Dropdown>
			{/each}
		</NavUl>
	</Navbar>
</header>
