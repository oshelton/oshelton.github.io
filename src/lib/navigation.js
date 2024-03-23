import {
	InfoCircleOutline,
	FolderDuplicateOutline,
	HomeOutline,
	DesktopPcOutline,
	RuleCombinedOutline
} from 'flowbite-svelte-icons';
import Enumerable from 'linq';

import { GetLatestPostId, BuildUrlForPost, GetMetadataForPost } from './blog/PostsHelpers';
import resumeFile from '$lib/files/generic_resume.pdf';

/**
 * @typedef {import('$lib/types').NavigationMenu} NavigationMenu
 * @typedef {import('$lib/types').NavigationMenuItem} NavigationMenuItem
 */

/**
 * Exported array of navigation menus.
 * @type {NavigationMenu[]}
 */
export const NavigationMenus = [
	{
		title: 'About',
		icon: InfoCircleOutline,
		items: [
			{
				title: 'Education',
				url: '/about/education',
				target: null,
				underConstruction: false,
				countClick: false
			},
			{
				title: 'Outside of Work',
				url: '/about/outside_work',
				target: null,
				underConstruction: false,
				countClick: false
			},
			{
				title: 'Work',
				url: '/about/work',
				target: null,
				underConstruction: false,
				countClick: false
			},
			{
				title: 'Generic resume',
				url: resumeFile,
				target: '_blank',
				underConstruction: false,
				countClick: true
			}
		]
	},
	{
		title: 'Blog',
		icon: FolderDuplicateOutline,
		items: [
			{
				title: 'Latest Post',
				url: BuildUrlForPost(GetLatestPostId()),
				target: null,
				underConstruction: false,
				countClick: false
			},
			{
				title: 'All Posts',
				url: '/blog/all',
				target: null,
				underConstruction: false,
				countClick: false
			},
			{
				title: 'Search Posts',
				url: '/blog/search',
				target: null,
				underConstruction: false,
				countClick: false
			}
		]
	},
	{
		title: 'Renovations',
		icon: HomeOutline,
		items: [
			{
				title: 'Reece Rd House',
				url: '/home_renovations/reece_rd',
				target: null,
				underConstruction: true,
				countClick: false
			},
			{
				title: 'Clayton Home',
				url: '/home_renovations/clayton_ga',
				target: null,
				underConstruction: true,
				countClick: false
			},
			{
				title: 'Clyde River Home',
				url: '/home_renovations/clyde_river',
				target: null,
				underConstruction: true,
				countClick: false
			}
		]
	},
	{
		title: 'Software',
		icon: DesktopPcOutline,
		items: [
			{
				title: 'Open Source',
				url: '/software_projects/open_source',
				target: null,
				underConstruction: true,
				countClick: false
			},
			{
				title: 'Work',
				url: '/software_projects/work',
				target: null,
				underConstruction: true,
				countClick: false
			},
			{
				title: 'School',
				url: '/software_projects/school',
				target: null,
				underConstruction: true,
				countClick: false
			}
		]
	},
	{
		title: 'DIY/Woodworking',
		icon: RuleCombinedOutline,
		items: [
			{
				title: 'Double Stack Firewood Rack',
				url: '/diy/double_firewood_rack',
				target: null,
				underConstruction: true,
				countClick: false
			},
			{
				title: 'Chainsaw Sharpening Jig',
				url: '/diy/chainsaw_sharpener',
				target: null,
				underConstruction: true,
				countClick: false
			}
		]
	}
];

/**
 * Get the NavigationMenuItem corresponding to the passed url.
 * @param {string} url - The url to retrieve an item for, must be provided.
 * @returns {NavigationMenuItem} Navigation menu item corresponding to the given URL.
 */
export function GetItemForUrl(url) {
	if (!url) {
		throw new Error('url must be non-null and defined');
	}

	if (url.endsWith('/')) {
		url = url.slice(0, -1);
	}

	let foundItem = Enumerable.from(NavigationMenus)
		.selectMany((x) => x.items)
		.firstOrDefault((x) => x.url === url && x.title !== 'Latest Post');

	// Must be a Blog post link.
	if (!foundItem) {
		const idFragment = 'id=';
		const indexOfId = url.indexOf(idFragment);
		const id = url.substring(indexOfId + idFragment.length);
		const metadata = GetMetadataForPost(id);
		foundItem = {
			title: metadata.title,
			url: BuildUrlForPost(id),
			target: null,
			underConstruction: false,
			countClick: false
		};
	}

	return foundItem;
}
