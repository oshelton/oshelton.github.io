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

	:global(.dark) {
		color-scheme: dark;
		--sdt-bg-main: #585858;
		--sdt-shadow-color: #777;
		--sdt-color: #eee;
		--sdt-clock-color: var(--sdt-color);
		--sdt-clock-color-hover: var(--sdt-color);
		--sdt-clock-time-bg: transparent;
		--sdt-clock-time-bg-hover: transparent;
		--sdt-clock-disabled: #b22222;
		--sdt-clock-disabled-bg: var(--sdt-bg-main);
		--sdt-clock-selected-bg: var(--sdt-bg-selected);
		--sdt-header-color: #eee;
		--sdt-bg-selected: #e1ac4a;
		--sdt-table-disabled-date: #b22222;
		--sdt-table-disabled-date-bg: var(--sdt-bg-main);
		--sdt-table-data-bg-hover: #777;
		--sdt-table-selected-bg: var(--sdt-bg-selected);
		--sdt-header-btn-bg-hover: #777;
		--sdt-color-selected: #fff;
		--sdt-table-today-indicator: #ccc;
		--sdt-clock-bg: #999;
		/* custom buttons */
		--sdt-today-bg: #e4a124;
		--sdt-today-color: #fff;
		--sdt-clear-color: #666;
		--sdt-clear-bg: #ddd;
		--sdt-clear-hover-color: #fff;
		--sdt-clear-hover-bg: #dc3545;
	}
</style>
