import Enumerable from 'linq';

import { PostIdsAndPostedDate, TagsToPostIds } from './SearchData';

/**
 * Get the ids for posts made after the provided date.
 * @param {string} date - Date to get posts at or after, must be int he format mm/dd/yyyy.
 * @returns {string[]}
 */
export function GetPostsPostedOnOrAfter(date) {
	if (!date) {
		throw new Error('Date must be provided');
	}

	var splitComponents = date.split('/');
	var parsedDate = new Date(
		splitComponents[2],
		Number.parseInt(splitComponents[0]) - 1,
		splitComponents[1]
	);
	console.log(parsedDate.toDateString());

	return Enumerable.from(PostIdsAndPostedDate)
		.where((x) => x.posted >= parsedDate)
		.select((x) => x.id)
		.toArray();
}

/**
 * Get the ids for posts made before the provided date.
 * @param {string} date - Date to get posts at or after, must be in the format of mm/dd/yyyy.
 * @returns {string[]}
 */
export function GetPostsPostedOnOrBefore(date) {
	if (!date) {
		throw new Error('Date must be provided');
	}

	var splitComponents = date.split('/');
	var parsedDate = new Date(
		splitComponents[2],
		Number.parseInt(splitComponents[0]) - 1,
		splitComponents[1]
	);
	console.log(parsedDate.toDateString());

	return Enumerable.from(PostIdsAndPostedDate)
		.where((x) => x.posted <= parsedDate)
		.select((x) => x.id)
		.toArray();
}

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
