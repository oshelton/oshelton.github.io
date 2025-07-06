<!-- metadata
title: A Self Hosted Project Management Search
id: ff268e17-e13a-4d79-8b71-0336f6cb1e41
posted: 7/5/2025
lastModified: 7/5/2025
summary: I went on the hunt for a customizable free self hosted project management solution.  Here's what I found.
tags: ["Self Hosting" , "Project Management", "Open Source", YouTrack, JetBrains]
-->

<!--
	@component
	component for the "Self Hosted Project Management" blog post.
-->

<script>
	import { A, Li } from 'flowbite-svelte';

	import { BuildUrlForPost } from '../PostsHelpers';
	import { GetItemForUrl } from '$lib/Navigation.js';
	import ContentParagraph from '$lib/components/ContentParagraph.svelte';
	import HeadingLink from '$lib/components/HeadingLink.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';
	import PopupImage from '$lib/components/PopupImage.svelte';
	import PageToc from '$lib/components/PageToc.svelte';

	import YouTrackAutomotiveIssue from '$lib/blog/posts/7-5-2025 ProjectManagementSearch/youtrack-automotive-issue.png';
	import YouTrackHomelabBoard from '$lib/blog/posts/7-5-2025 ProjectManagementSearch/youtrack-homelab-board.png';

	const url = BuildUrlForPost('ff268e17-e13a-4d79-8b71-0336f6cb1e41');
	const navItem = GetItemForUrl(url);
</script>

<PageToc
	item={navItem}
	urlRoot={url}
	contents={[
		{ title: 'Title', url: '#title' },
		{ title: 'Requirements', url: '#requirements' },
		{ title: 'Evaluations', url: '#evaluations' },
		{ title: 'Vikunja', url: '#vikunja', level: 2 },
		{ title: 'OpenProject', url: '#open', level: 2 },
		{ title: 'Leantime', url: '#lean', level: 2 },
		{ title: 'Plane', url: '#plane', level: 2 },
		{ title: 'YouTrack', url: '#youtrack', level: 2 },
		{ title: 'Conclusions', url: '#conclusions' }
	]}
/>

<ContentParagraph>
	In my day job as a Software Engineer I spend quite a bit of time working in what is probably the
	most widely used piece of software that has also generated the most frustration to its users: <A
		href="https://www.atlassian.com/software/jira">Jira</A
	>.
</ContentParagraph>

<ContentParagraph>
	Don't misunderstand me, I have plenty of gripes with Jira, but I also find it invaluable for
	keeping track of work and keeping momentum going and organized for larger projects.
</ContentParagraph>

<ContentParagraph>
	With that in mind I really wanted to find some kind of project management software that I could
	install on my server here at home and take advantage of it with projects that aren't software, and
	this sent me down quite the rabbit hole.
</ContentParagraph>

<HeadingLink tag="h1" id="requirments">Requirements</HeadingLink>

<ContentParagraph>
	I was looking for something that could meet the following requirements:
</ContentParagraph>

<UnorderedList>
	<Li
		><strong>Free</strong> - I couldn't really justify spending money on the software at this time.</Li
	>
	<Li
		><strong>Customizable</strong> - I already had solutions in place for managing software projects
		(<A href="https://github.com/">github</A> for public code and self hosted <A
			href="https://forgejo.org/">Forgejo</A
		> for private) and was looking for something that could be used for things like home renovation or
		vehicle maintenance.</Li
	>
	<Li
		><strong>Kanban Support</strong> - I find <A href="https://en.wikipedia.org/wiki/Kanban_board"
			>Kanban boards</A
		> to be an excellent way to visually progress and solid support for them was very important, but
		not quite required.</Li
	>
	<Li
		><strong>Wiki Support</strong> - Some kind of integrated wiki support was desirable to allow documentation
		to live inside the project management solution.</Li
	>
</UnorderedList>

<ContentParagraph>
	I didn't consider this to be a particularly demanding list of requirements, but it wound up being
	quite an adventure finding something that met them all.
</ContentParagraph>

<HeadingLink tag="h1" id="evaluations">Evaluations</HeadingLink>

<ContentParagraph>
	I tried out quite a few options and the following are my findings.
</ContentParagraph>

<HeadingLink tag="h2" id="vikunja">Vikunja</HeadingLink>
<A href="https://vikunja.io">Homepage</A>

<ContentParagraph>
	Vikunja made a great first impression with its simple installation and ease of use, but I sadly
	ran into its limitations and found it not suitable for my purposes and wound up uninstalling it.
</ContentParagraph>

<ContentParagraph>
	<strong>Pros:</strong>
</ContentParagraph>

<UnorderedList>
	<Li>Simple and straightforward docker installation.</Li>
	<Li>Brings its own CalDav server (though I did not test it)</Li>
	<Li>You can easily use as little or as much of its features as you want.</Li>
	<Li>Very easy to switch between view modes.</Li>
</UnorderedList>

<ContentParagraph>
	<strong>Cons:</strong>
</ContentParagraph>

<UnorderedList>
	<Li>No real customization of workflows or fields.</Li>
	<Li>Its available fields and features are oriented more towards software projects.</Li>
	<Li>No wiki or knowledge base support.</Li>
	<Li>No advanced planning or sprint oriented tools.</Li>
</UnorderedList>

<ContentParagraph>
	I found myself quite torn when it came to Vikunja. Its simplicity was quite refreshing, but I
	don't quite know when I would really use it.
</ContentParagraph>

<ContentParagraph>
	If I were needing something to organize non-software projects unless my needs were extremely
	simple I would very quickly run into its limited customization support, and if I were working on a
	software project it really doesn't offer enough to pull me away from the project management
	capabilities built into GitHub or Forgejo.
</ContentParagraph>

<HeadingLink tag="h2" id="open">OpenProject</HeadingLink>
<A href="https://www.openproject.org">Homepage</A>

<ContentParagraph>
	I had high hopes upon installing OpenProject as it really seemed to cover a lot of my
	requirements, but the experience quickly soured when I started noticing more and more
	advertisements and up-sells in the community edition for the paid edition, with no way to turn
	them off.
</ContentParagraph>

<ContentParagraph>
	<strong>Pros:</strong>
</ContentParagraph>

<UnorderedList>
	<Li>Not too complex of an installation.</Li>
	<Li>Supports quite a lot of customization.</Li>
</UnorderedList>

<ContentParagraph>
	<strong>Cons:</strong>
</ContentParagraph>

<UnorderedList>
	<Li
		>Lots of up-sales and advertisements, to the point I had a tough time figuring out which
		features were available in the community edition and which ones weren't.</Li
	>
	<Li
		>No support for Kanban boards in community edition, and it took a bit to figure out that was the
		case.</Li
	>
	<Li
		>Workflow management and customization was pretty complicated; of all the options I evaluated
		this one was the most Jira like.</Li
	>
</UnorderedList>

<ContentParagraph>
	Besides the lack of Kanban boards in the community edition, the shear amount of ads was very
	disconcerting. Of all the options I tried OpenProject felt the most like an open core project that
	really expected users to upgrade before they can have a fully functional product.
</ContentParagraph>

<ContentParagraph>
	The presence of all of the ads and up-sells made me feel like fewer features were available to me
	than actually were.
</ContentParagraph>

<HeadingLink tag="h2" id="lean">Leantime</HeadingLink>
<A href="https://leantime.io">Homepage</A>

<ContentParagraph>
	I made a mistake when evaluating Leantime in that I did not take th etime to look over their
	version comparison before installing it via Docker. This resulted in me spending quite a bit of
	time with their non-trivial Docker compose instructions getting an application running whose free
	version did not meet my needs.
</ContentParagraph>

<ContentParagraph>
	My mistake, and a lesson I took to heart when evaluating the next application, Plane.
</ContentParagraph>

<HeadingLink tag="h2" id="plane">Plane</HeadingLink>
<A href="https://plane.so">Homepage</A>

<ContentParagraph>
	Plane's website presents a really neat looking product, but they also very clearly state up front
	what they do and don't support in their community edition.
</ContentParagraph>

<ContentParagraph>
	In this case the deal breaker was the absence of customized workflows and properties in the free
	plan, features that I pretty strongly require. Thanks to them being very upfront with the
	information I quickly passed on to the next option without spending too much time on Plane.
</ContentParagraph>

<HeadingLink tag="h2" id="youtrack">YouTrack</HeadingLink>
<A href="https://www.jetbrains.com/youtrack/">Homepage</A>

<ContentParagraph>
	To get it out of the way, YouTrack is not open source in any sense of the phrase. It is a fully
	commercial product with a <em>very</em> generous free tier for self hosting that makes it very attractive.
</ContentParagraph>

<ContentParagraph>
	I was really hoping to find a solution that was at least partially open source, but it wasn't a
	hard requirement and I did wind up choosing to use YouTrack going forward.
</ContentParagraph>

<ContentParagraph>
	<strong>Pros:</strong>
</ContentParagraph>

<UnorderedList>
	<Li>Simple installation.</Li>
	<Li>Full customization possible in free tier.</Li>
	<Li>Really nice custom property support.</Li>
	<Li>Rather simple notions of custom fields that give a lot of freedom when creating projects.</Li>
	<Li>Basic dashboard support.</Li>
	<Li>Excellent user management and anonymous/guest access support.</Li>
	<Li>Script driven workflows for responding to issue changes and automating things.</Li>
</UnorderedList>

<ContentParagraph>
	<strong>Cons:</strong>
</ContentParagraph>

<UnorderedList>
	<Li
		>Compared to Jira it has a very weak notion of issue workflows and how issue states can be
		transitioned into and out of.</Li
	>
	<Li>Doesn't work great on mobile devices but is generally tolerable.</Li>
	<Li
		>Some odd Ui/Ux around Kanban boards and issue management, but works plenty well for my needs.</Li
	>
</UnorderedList>

<ContentParagraph>
	I was quite surprised at how well I found YouTrack worked for my needs. The fact that it keeps a
	really loose project workflow and issue property model actually works out really well.
</ContentParagraph>

<ContentParagraph>
	For example, creating a project for keeping up with our automotive maintenance needs was pretty
	simple an allows for the creation of issues like this:
</ContentParagraph>

<PopupImage
	src={YouTrackAutomotiveIssue}
	tooltip="An example of a regular automotive maintenance task."
/>

<ContentParagraph>
	And simple Kanban boards that can be used to visualize progress on various tasks:
</ContentParagraph>

<PopupImage src={YouTrackHomelabBoard} tooltip="A kanban board for upcoming Homelab work." />

<HeadingLink tag="h1" id="conclusions">Conclusions</HeadingLink>

<ContentParagraph>
	I was quit surprised at how hard a time I had finding a fully open source and free self hosted
	Project Management solution, especially one that could work well for non-software projects.
</ContentParagraph>

<ContentParagraph>
	The number of open core but otherwise very commercial products I found was surprising. As was the
	fact that the solution I wound up landing on wasn't open source at all.
</ContentParagraph>

<ContentParagraph>
	I'm sure there are many applications out there that I missed, but for now I'm pretty happy where I
	landed.
</ContentParagraph>
