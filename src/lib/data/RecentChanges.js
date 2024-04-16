import Enumerable from 'linq';

import { GetItemForUrl } from '$lib/Navigation';

/** Class representing a group of changes to one or more changes. */
class RecentChange {
	/**
	 * Construct a new RecentChange object; representing a collection of changes.
	 * @param {string} title - Title of the collection of changes to display to the user.
	 * @param {Date} date - Date the changes were made available.
	 * @param {string[]} changedPageUrls - Collection of page urls that were affected by the change (the name is looked up by the UI).
	 */
	constructor(title, date, changedPageUrls) {
		this.title = title;
		this.date = date;

		if (changedPageUrls) {
			this.changedPageItems = Enumerable.from(changedPageUrls)
				.select((x) => GetItemForUrl(x))
				.toArray();
		}
	}
}

/**
 * All recent changes, already ordered from most recent to last.
 * @type RecentChange[]
 * @todo This list will need to be regularly pruned on some basis.
 */
export const AllRecentChanges = [
	new RecentChange(
		'Filled in High School Projects page and created a post.',
		new Date(2024, 2, 26),
		['/software_projects/school/high_school']
	),
	new RecentChange('Updated many headings to be links.', new Date(2024, 2, 26), []),
	new RecentChange(
		'Added How the Blog Works Post and addressed a number of styling issues.',
		new Date(2024, 2, 23),
		['/blog/post/?id=124520dd-56cd-4b13-808f-7e54e885925a']
	),
	new RecentChange('Add recent blog posts to home page.', new Date(2024, 2, 18), []),
	new RecentChange('Add basic date and tag blog post searching support.', new Date(2024, 2, 2), [
		'/blog/search'
	]),
	new RecentChange(
		'Added support for loading blog post content dynamically.',
		new Date(2024, 1, 26),
		[]
	)
];
