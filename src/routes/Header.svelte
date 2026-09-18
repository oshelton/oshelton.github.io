<script>
	import { browser } from '$app/environment';
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
	import { Icon } from 'svelte-icons-pack';
	import { BsConeStriped } from 'svelte-icons-pack/bs';
	import { page } from '$app/stores';

	import logo from '$lib/images/site-logo.jpg';
	import { NavigationMenus } from '$lib/Navigation.js';
	import { CountNavigationAction } from '$lib/Visitor';

	$: activeUrl = $page.url.pathname + (browser && $page.url.search);

	/**
	 * Handle an item being clicked
	 * @param item {NavigationMenuItem} - item that was clicked.
	 */
	function itemIsClicked(item) {
		if (item.countClick) {
			CountNavigationAction(item.url);
		}
	}
</script>

<header class="w-full z-20 top-0 left-0">
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
			<!-- flowbite-svelte 0.44.24 dropped the focus ring from DarkMode's default
			     btnClass, leaving the button with no visible keyboard focus indicator.
			     Restore the classes it used to ship with. -->
			<DarkMode class="focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" />
		</div>

		<NavUl {activeUrl}>
			<NavLi href="/">Home</NavLi>

			{#each NavigationMenus as menu (menu.title)}
				<NavLi class="cursor-pointer">
					{menu.title}<ChevronDownOutline
						class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
					/>
				</NavLi>
				<Dropdown {activeUrl} class="z-20">
					{#each menu.items as item (item.url)}
						<DropdownItem href={item.url} target={item.target} onclick={() => itemIsClicked(item)}>
							{#if item.underConstruction}
								<span class="flex gap-2">
									<Icon size="16" src={BsConeStriped} />
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
