import {
	InfoCircleOutline,
	HomeOutline,
	DesktopPcOutline,
	RuleCombinedOutline
} from 'flowbite-svelte-icons';
import Enumerable from 'linq';
import resumeFile from '$lib/files/generic_resume.pdf';

/** Class representing a navigation menu with one or more items. */
export class NavigationMenu {
	/**
	 * Construct a new NavigationMenu.
	 * @param {string} title - Label/Title to use for the menu.
	 * @param {SvelteComponent} icon - Svelte Component corresponding to the icon for easy display.
	 * @param {NavigationMenuItem[]} items - Array of one or more items belonging to the menu.
	 */
	constructor(title, icon, items) {
		this.title = title;
		this.icon = icon;
		this.items = items;
	}
}

/** Class representing a single item in a Navigation dropdown menu. */
export class NavigationMenuItem {
	/**
	 * Construct a new NavigationMenuItem.
	 * @param {string} title - Title of the item.
	 * @param {string} url - Relative to the root URL to the target page.
	 * @param {string} target - Target to use when opening the page; may be null or one of https://www.w3schools.com/tags/att_a_target.asp.
	 * @param {boolean} underConstruction - Whether or not this page is still under construction.
	 * @param {boolean} countClick - Whether or not clicking on this page should be counted.
	 */
	constructor(title, url, target, underConstruction, countClick = false) {
		this.title = title;
		this.url = url;
		this.target = target;
		this.underConstruction = underConstruction;
		this.countClick = countClick;
	}
}

/**
 * Exported array of navigation menus.
 * @type NavigationMenu[]
 */
export const NavigationMenus = [
	new NavigationMenu('About Me', InfoCircleOutline, [
		new NavigationMenuItem('Education', '/about/education', null, false),
		new NavigationMenuItem('Outside of Work', '/about/outside_work', null, false),
		new NavigationMenuItem('Work', '/about/work', null, false),
		new NavigationMenuItem('Generic resume', resumeFile, '_blank', false, true)
	]),
	new NavigationMenu('Home Renovations', HomeOutline, [
		new NavigationMenuItem('Reece Rd House', '/home_renovations/reece_rd', null, true),
		new NavigationMenuItem('Clayton Home', '/home_renovations/clayton_ga', null, true),
		new NavigationMenuItem('Clyde River Home', '/home_renovations/clyde_river', null, true)
	]),
	new NavigationMenu('Software', DesktopPcOutline, [
		new NavigationMenuItem('Open Source', '/software_projects/open_source', null, true),
		new NavigationMenuItem('Work', '/software_projects/work', null, true),
		new NavigationMenuItem('School', '/software_projects/school', null, true)
	]),
	new NavigationMenu('DIY/Woodworking', RuleCombinedOutline, [
		new NavigationMenuItem('Double Stack Firewood Rack', '/diy/double_firewood_rack', null, true),
		new NavigationMenuItem('Chainsaw Sharpening Jig', '/diy/chainsaw_sharpener', null, true)
	])
];

/**
 * Get the NavigationMenuItem corresponding to the passed url.
 * @param {string} url - The url to retrieve an item for, must be provided.
 * @returns NavigationMenuItem
 */
export function GetItemForUrl(url) {
	if (!url) {
		throw new Error('url must be non-null and defined');
	}

	return Enumerable.from(NavigationMenus)
		.selectMany((x) => x.items)
		.first((x) => x.url === url);
}
