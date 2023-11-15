<script>
	import { Img } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import logo from '$lib/images/site-logo.jpg';

	$: activeUrl = $page.url.pathname;
</script>

<header class="w-full flex z-20 top-0 left-0">
	<Navbar
		class="px-2 sm:px-4 py-2.5 bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800"
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
			<NavLi href="/about">About</NavLi>
		</NavUl>
	</Navbar>
</header>
