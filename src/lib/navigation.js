import { InfoCircleOutline, HomeOutline, DesktopPcOutline } from 'flowbite-svelte-icons';
import resumeFile from '$lib/files/generic_resume.pdf';

// Class representing a navigation menu with items.
class NavigationMenu {
	constructor(label, description, icon, items) {
		this.label = label;
		this.description = description;
		this.icon = icon;
		this.items = items;
	}
}

// Classs representing a single item in a Navigation dropdown menu.
class NavigationMenuItem {
	constructor(label, tip, url, target) {
		this.label = label;
		this.tip = tip;
		this.url = url;
		this.target = target;
	}
}

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
				'/about/education',
				'_self'
			),
			new NavigationMenuItem(
				'Outside of Work',
				'All about my outside of work hobbies and interests.',
				'/about/outside_work',
				'_self'
			),
			new NavigationMenuItem(
				'Work',
				'All about my work history and experience.',
				'/about/work',
				'_self'
			),
			new NavigationMenuItem(
				'Generic resume',
				'A link to a generic resume.  Hopefully up to date.',
				resumeFile,
				'_blank'
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
				'/home_renovations/reece_rd',
				'_self'
			),
			new NavigationMenuItem(
				'Clayton Home',
				'All about the renovation work we did on our first owned home as a married couple.',
				'/home_renovations/clayton_ga',
				'_self'
			),
			new NavigationMenuItem(
				'Clyde River Home',
				'All about the renovations we are making to our current home.',
				'/home_renovations/clyde_river',
				'_self'
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
				'/software_projects/open_source',
				'_self'
			),
			new NavigationMenuItem(
				'Work',
				'A chosen selection of some of my work related projects that I can talk about.',
				'/software_projects/work',
				'_self'
			),
			new NavigationMenuItem(
				'School',
				'Some of the more interesting and more significant projects I worked on in school.',
				'/software_projects/school',
				'_self'
			)
		]
	)
];
