import Enumerable from 'linq';

import { GetItemForUrl } from '$lib/navigation';

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
	new RecentChange('Added initial recent changes support.', new Date(2024, 0, 24), [])
];