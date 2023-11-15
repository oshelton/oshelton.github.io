<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div class="app absolute">
	<Header />

	<main class="dark:divide-gray-700">
		<section>
			<slot />
		</section>
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-width: 100vw;
		max-height: 100vh;
		max-width: 100vw;
	}

	main {
		flex: 1;
		display: flex;
		overflow: auto;
		justify-content: center;
		width: 100%;
		max-width: 64rem;
		padding: 1rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
