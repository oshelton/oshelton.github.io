import {
	InfoCircleOutline,
	HomeOutline,
	DesktopPcOutline,
	RuleCombinedOutline
} from 'flowbite-svelte-icons';
import Enumerable from 'linq';
import resumeFile from '$lib/files/generic_resume.pdf';

/** Class representing a navigation menu with one or more items. */
class NavigationMenu {
	/**
	 * Construct a new NavigationMenu.
	 * @param {string} label - Label/Title to use for the menu.
	 * @param {string} description - Longer form Markdown description of the menu.
	 * @param {SvelteComponent} icon - Svelte Component corresponding to the icon for easy display.
	 * @param {NavigationMenuItem[]} items - Array of one or more items belonging to the menu.
	 */
	constructor(label, description, icon, items) {
		this.label = label;
		this.description = description;
		this.icon = icon;
		this.items = items;
	}
}

/** Classs representing a single item in a Navigation dropdown menu. */
class NavigationMenuItem {
	/**
	 * Construct a new NavigationMenuItem.
	 * @param {string} title - Title of the item.
	 * @param {string} metaDescription - brief description to be used with the pages metadata.
	 * @param {string} description - Longer form markdown description of the item.
	 * @param {string} url - Relative to the root URL to the target page.
	 * @param {string} target - Target to use when opening the page; may be null or one of https://www.w3schools.com/tags/att_a_target.asp.
	 * @param {boolean} underConstruction - Whether or not this page is still under construction.
	 */
	constructor(title, metaDescription, description, url, target, underConstruction) {
		this.title = title;
		this.metaDescription = metaDescription;
		this.description = description;
		this.url = url;
		this.target = target;
		this.underConstruction = underConstruction;
	}
}

/**
 * Exported array of navigation menus.
 * @type {NavigationMenu[]}
 */
export const NavigationMenus = [
	new NavigationMenu(
		'About Me',
		`All about me, my work history, education backstory, and some of the other things I enjoy doing.

I do a *lot* more than just engineer software...`,
		InfoCircleOutline,
		[
			new NavigationMenuItem(
				'Education',
				'All about my educational history.',
				`My educational history can be divided into three phases (one phase more than most):

1. High School and everything else before college.
1. Undergraduate college at Valdosta State University.
1. Graduate school at UGA.

I can't claim to *hold* a graduate degree sadly as I did not complete my graduate studies at UGA, but I was still able to learn a lot and benefited greatly from the experience.`,
				'/about/education',
				null,
				false
			),
			new NavigationMenuItem(
				'Outside of Work',
				'All about my outside of work hobbies and interests.',
				'',
				'/about/outside_work',
				null,
				true
			),
			new NavigationMenuItem(
				'Work',
				'All about my work history and experience.',
				'',
				'/about/work',
				null,
				true
			),
			new NavigationMenuItem(
				'Generic resume',
				'A link to a generic resume.  Hopefully up to date.',
				'',
				resumeFile,
				'_blank',
				true
			)
		]
	),
	new NavigationMenu(
		'Home Renovations',
		`I have done several home renovations.
		
So far, just two home of our own and one that was an investment/flip property.`,
		HomeOutline,
		[
			new NavigationMenuItem(
				'Reece Rd House',
				'About my first major home renovation project with my inlaws.',
				'',
				'/home_renovations/reece_rd',
				null,
				true
			),
			new NavigationMenuItem(
				'Clayton Home',
				'All about the renovation work we did on our first owned home as a married couple.',
				'',
				'/home_renovations/clayton_ga',
				null,
				true
			),
			new NavigationMenuItem(
				'Clyde River Home',
				'All about the renovations we are making to our current home.',
				'',
				'/home_renovations/clyde_river',
				null,
				true
			)
		]
	),
	new NavigationMenu(
		'Software',
		"I've written quite a few cool projects over the years for work and for fun.",
		DesktopPcOutline,
		[
			new NavigationMenuItem(
				'Open Source',
				'About my open source and personal projects.',
				'',
				'/software_projects/open_source',
				null,
				true
			),
			new NavigationMenuItem(
				'Work',
				'A chosen selection of some of my work related projects that I can talk about.',
				'',
				'/software_projects/work',
				null,
				true
			),
			new NavigationMenuItem(
				'School',
				'Some of the more interesting and more significant projects I worked on in school.',
				'',
				'/software_projects/school',
				null,
				true
			)
		]
	),
	new NavigationMenu(
		'DIY/Woodworking',
		`I occasionally find that I need to create something with my bare hands to meet a need we have around the house.
		
These projects also come plans included.`,
		RuleCombinedOutline,
		[
			new NavigationMenuItem(
				'Double Stack Firewood Rack',
				'This is a double depth firewood rack I have built 3 of for storing firewood at our home.',
				'',
				'/diy/double_firewood_rack',
				null,
				true
			),
			new NavigationMenuItem(
				'Chainsaw Sharpening Jig',
				`This is a simple jig I use to sharpen chainsaw blades when they aren't mounted on my chainsaw.`,
				'',
				'/diy/chainsaw_sharpener',
				null,
				true
			)
		]
	)
];

/**
 * Get the NavigationMenuItem corresponding to the passed url.
 * @param {string} url - The url to retrieve an item for, must be provided.
 */
export function GetItemForUrl(url) {
	if (!url) {
		throw new Error('url must be non-null and defined');
	}

	return Enumerable.from(NavigationMenus)
		.selectMany((x) => x.items)
		.first((x) => x.url === url);
}
