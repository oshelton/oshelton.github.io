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
	new RecentChange('Add basic date and tag blog post searching support.', new Date(2024, 3, 2), [
		'/blog/search'
	]),
	new RecentChange(
		'Added support for loading blog post content dynamically.',
		new Date(2024, 1, 26),
		[]
	),
	new RecentChange('Added initial Blog Support.', new Date(2024, 1, 22), [
		'/blog/all',
		'/blog/post?id=86f85de2-571b-4df4-9b39-140907351b5d'
	]),
	new RecentChange(
		'Added initial GoatCounter analytics support for completed pages.',
		new Date(2024, 0, 26),
		[]
	),
	new RecentChange('Added initial recent changes support.', new Date(2024, 0, 24), [])
];
