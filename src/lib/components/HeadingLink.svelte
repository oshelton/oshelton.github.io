<!--
	@component
	Component for rendering a heading as a link.
-->

<script>
	import { A, Heading } from 'flowbite-svelte';

    /** @type {string} */
    export let id = '';

    /** @type {string} Tag to apply to the heading.*/
    export let tag = "h4";

    /** @type {string} Classess to apply to the link part fo the heading.*/
    export let aClass = '';

	/** @type {string} Classes to apply to the Heading.*/
	export let headingClass = '';
</script>

<A href={`#${id}`} class={`group ${aClass}`}>
    <Heading {id} {tag} class={`text-primary-600 dark:text-primary-500 ${headingClass}`}>
        <slot/>
        <span class="collapse group-hover:visible">#</span>
    </Heading>
</A>
