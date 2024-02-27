// Reusable types for use throughout the app.

import type { SvelteComponent } from 'svelte';

/**
 * Type for an item from a navigation menu.
 */
export type NavigationMenuItem = {
	title: string;
	url: string;
	target: string?;
	underConstruction: boolean;
	countClick: boolean;
};

/**
 * Type representing a high level navigation menu.
 */
export type NavigationMenu = {
	title: string;
	icon: SvelteComponent;
	items: NavigationMenuItem[];
};
