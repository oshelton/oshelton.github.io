import Enumerable from 'linq';

import { Posts, PostMetadata, LatestPostId } from '$lib/blog/Posts';

/**
 * @typedef {import('$lib/types').PostMetadata} PostMetadata
 */

/**
 * Get the Metadata for a Post
 * @param {string} postId - The Id of the post whose metadata we want to retrieve.
 * @returns {PostMetadata} The metadata for the Post with the given Id.
 */
export function GetMetadataForPost(postId) {
	if (!postId) {
		throw new Error('Provided postId must exist');
	}

	const foundMetadata = PostMetadata[postId];
	if (!foundMetadata) {
		throw new Error(`No Post metadata found with Post Id '${postId}'`);
	}
	return foundMetadata;
}

/**
 * Get all possts for a given set of post ids.
 * @param {string[]} postIds - Array of post ids to return metadata for.
 */
export function GetMetadatasForPostIds(postIds) {
	if (!postIds) {
		throw new Error('postIds must exist');
	}

	return Enumerable.from(Object.values(PostMetadata)).where((x) => postIds.includes(x.id));
}

/**
 * Get the Svelte Component for a Post.
 * @param {string} postId - The Id of the post to retrieve.
 * @returns {import('svelte').SvelteComponent} The Svelte component to use for the Post with the given Id.
 */
export function GetComponentForPost(postId) {
	if (!postId) {
		throw new Error('Provided postId must exist');
	}

	const foundComponent = Posts[postId];
	if (!foundComponent) {
		throw new Error(`No Post metadata found with Post Id '${postId}'`);
	}
	return foundComponent();
}

/**
 * Get the Id of the latest post.
 * @returns {string} The Id of the latest post.
 */
export function GetLatestPostId() {
	return LatestPostId;
}

/**
 * Build a URL for a Post with a specific id.
 * @param {string} postId - The Id of the post to retrieve a URL for.
 * @returns {string} The relative URL to the Post page with the Id as a search param.
 */
export function BuildUrlForPost(postId) {
	if (!postId) {
		throw new Error('Provided postId must exist');
	}

	const foundMetadata = PostMetadata[postId];
	if (!foundMetadata) {
		throw new Error(`No Post exists with Id '${postId}'`);
	}
	return `/blog/post?id=${postId}`;
}

/**
 * Get all post metadata.
 * @returns {PostMetadata[]} All post metadata ordered most recent to furthest back.
 */
export function GetAllPostMetadata() {
	return Enumerable.from(Object.values(PostMetadata))
		.orderByDescending((x) => x.posted)
		.toArray();
}

/**
 * Get metadata for the most recent posts.
 * @param {number} mostRecentCount - Number of most recent posts to retrieve, must be 1 or greater.
 * @returns {PostMetadata[]} Array of metadata corresponding to the most recent posts.
 */
export function GetMetdataForMostRecentPosts(mostRecentCount) {
	if (!mostRecentCount) {
		throw new Error('mostRecentCount must be provided.');
	}
	if (mostRecentCount < 1) {
		throw new Error('mostRecentCount must be >= 1.');
	}

	return Enumerable.from(PostMetadata.slice(-1 * mostRecentCount))
		.reverse()
		.toArray();
}
