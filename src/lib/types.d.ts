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

/**
 * Type for Blog Post Metadata.
 */
export type PostMetadata = {
	title: string;
	id: string;
	posted: string;
	lastModified: string?;
	summary: string;
	tags: string[];
};

/**
 * Type for post adjacency info.
 */
export type PostAdjacency = {
	previous: string;
	next: string;
};

/**
 * Type for searching posts preferences.
 */
export type SearchPostPreferences = {
	searchTags: boolean;
	selectedSearchTags: string[];
};
