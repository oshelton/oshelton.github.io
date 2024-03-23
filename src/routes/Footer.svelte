<script>
	import {
		Footer,
		FooterCopyright,
		FooterIcon,
		FooterLink,
		FooterLinkGroup,
		Img
	} from 'flowbite-svelte';
	import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
	import svelte from '$lib/images/svelte-logo.svg';
</script>

<Footer
	footerType="socialmedia"
	class="bg-slate-200 border-t border-slate-500 dark:border-gray-600 dark:bg-gray-800"
>
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright aClass="text-primary-600 dark:text-primary-500 hover:underline" by="Owen Shelton" year={2023} href="mailto://jowenshelton@gmail.com" />

		<FooterLinkGroup>
			<FooterLink
				href="https://svelte.dev/"
				target="_blank"
				aClass="flex align-center space-between-4 text-primary-600 dark:text-primary-500 hover:underline"
				>Powered by Svelte <Img src={svelte} size="w-6 h-6" imgClass="ml-1" /></FooterLink
			>
		</FooterLinkGroup>

		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon href="https://github.com/oshelton">
				<GithubSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>

			<FooterIcon href="https://www.linkedin.com/in/owen-shelton-35332567/">
				<LinkedinSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
