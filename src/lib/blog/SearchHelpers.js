import Enumerable from 'linq';

import { TagsToPostIds } from './SearchData';

/**
 * Get all post ids for the posts which have one or more of the provided tags.
 * @param {string[]} tags - Collection of tags to return posts for.
 * @returns {string[]} Ids for the posts which have any of the provided tags.
 */
export function GetPostIdsForTags(tags) {
	if (!tags) {
		throw new Error('Tags must not be provided and defined.');
	} else if (tags.length === 0) {
		return [];
	}

	return Enumerable.from(tags)
		.selectMany((t) => TagsToPostIds[t])
		.distinct()
		.toArray();
}
