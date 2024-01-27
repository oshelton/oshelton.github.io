<!--
	@component
	Component backing the about/education page.
-->

<script>
	import { A, Heading, List, Li, P, Timeline, TimelineItem } from 'flowbite-svelte';

	import { page } from '$app/stores';

	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PageToc from '$lib/components/PageToc.svelte';

	import { CountPageVisit } from '$lib/visitor';
	import { GetItemForUrl } from '$lib/navigation.js';

	CountPageVisit();

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `My educational history can be divided into three phases (one phase more than most):

1. High School and everything else before college.
1. Undergraduate college at Valdosta State University.
1. Graduate school at UGA.

I can't claim to *hold* a graduate degree sadly as I did not complete my graduate studies at UGA, but I was still able to learn a lot and benefited greatly from the experience.`;
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="All about my educational history."
	markdown={pageDescription}
/>

<PageToc
	item={navItem}
	contents={[
		{ title: 'Graduate School', url: url + '#graduate' },
		{ title: 'Undergraduate College', url: url + '#undergraduate' },
		{ title: 'High School', url: url + '#high-school' }
	]}
/>

<Timeline order="vertical">
	<span id="graduate">
		<TimelineItem title="Graduate School - University of Georgia" date="2010-2013">
			<div class="flex flex-col gap-4">
				<P>
					Graduate school at the <A href="https://www.uga.edu/">University of Georgia</A> was an incredible
					time. The experiences I had there, and a lot of the struggles I had have helped shape me into
					who I am today.
				</P>

				<P>
					All that, <em>despite</em> the fact that I did not complete any degree programs there.
				</P>

				<P>There's a story there, and I may write up a blog post about it at some point.</P>

				<P>
					In grad school I was blesssed to be able to interact and work with people from radically
					different backgrounds, cultures, and beliefs than my own. I was introduced to Indian and
					Middle Eastern cuisine and was able to just hang out and work with people from all over
					the world and get to know them and establish friendships with them.
				</P>

				<P>
					Those relationships and experiences were much more impactful on the course of my life than
					anything academically I was able to participate in.
				</P>

				<P
					>I was still able to work on some cool projects though while I was there, and discovered
					how awesome Linux can be.</P
				>

				<!-- Add project links here. -->

				<Heading tag="h6">Awards and Honors:</Heading>

				<List tag="ul" class="list-outside ml-4">
					<Li>UGA Department of Computer Science Outstanding Teaching Assistant, Spring 2012</Li>
					<Li
						>I published <A href="https://ieeexplore.ieee.org/abstract/document/6209169"
							>one paper</A
						>
						during my studies</Li
					>
				</List>

				<Heading tag="h6">Activities:</Heading>

				<List tag="ul" class="list-outside ml-4">
					<Li
						>Participated regularly in an interfaith community discussing beliefs and holding
						community activities</Li
					>
				</List>
			</div>
		</TimelineItem>
	</span>

	<span id="undergraduate">
		<TimelineItem title="Undergraduate College - Valdosta State University" date="2006-2010">
			<div class="flex flex-col gap-4">
				<P
					>College for me at <A href="https://www.valdosta.edu/">Valdosta State University</A> probably
					wasn't as exciting as it was for a lot of people.</P
				>

				<P>
					I began college as a Computer Science major, stayed a computer science major, and didn't
					participate in the partying scene. I took my time there very seriously from beginning to
					end, and used my college Computer Science classes as a way to gain as much experience with
					as many different technologies and software development methodologies as possible.
				</P>

				<P>
					As an honor student at VSU I was expected to go above and beyond the normal expectations
					of my classes, which translated into opportunities to work on some very cool projects:
				</P>

				<!-- Add project links here. -->

				<P>
					It was also during this time that I got my first tastes of what it was like to work in the
					field:
				</P>

				<List tag="ul" class="list-outside ml-4">
					<Li
						>I worked a semester as a Quality assurance analyst (software tester) for a local
						software company. This was an extremely valuable experience and really gave me my first
						taste of what working in the field could be like.</Li
					>
					<Li
						>I also worked several semesters as a teaching assisstant; evaluating and grading other
						students code and assisting with lab sessions with limited teaching duties.</Li
					>
				</List>

				<Heading tag="h6">Awards and Honors:</Heading>

				<List tag="ul" class="list-outside ml-4">
					<Li>Honors Graduate, 3.8 GPA</Li>
					<Li>VSU Department of Computer Science Outstanding Senior, Spring 2010</Li>
				</List>

				<Heading tag="h6">Activities:</Heading>

				<List tag="ul" class="list-outside ml-4">
					<Li>Vice President Valdosta State University chapter of the ACM (2009-2010)</Li>
					<Li
						>I was highly active in VSU's chapter of the Baptist Collegiate Ministry, including
						community activities and mission trips.</Li
					>
				</List>
			</div>
		</TimelineItem>
	</span>

	<span id="high-school">
		<TimelineItem title="High School - Clinch County High School" date="2002-2006">
			<div class="flex flex-col gap-4">
				<P>
					High school at <A href="https://www.clinchcounty.com/domain/13"
						>Clinch County High School in Homerville Georgia</A
					> was a curious time for me full of ups and downs. I made a lot of friends and was able to
					participate in a lot of activities and learned a lot.
				</P>

				<P>
					One of the high points of high school was my participation in the high school band. I was
					never particularly athletic so it provided me with an excellent form of exercise that
					stretched my body as well as my brain.
				</P>

				<P
					>Especially since I played Tuba. That thing was <strong>heavy</strong>. But boy was it
					fun.</P
				>

				<P>
					It was during my senior year of high school that I discovered programming as part of my
					honors Calculus class. It started with simple programs on my Texas Instruments calculator
					and grew to include basic and eventually C programs.
				</P>

				<P>
					It was this initial exploration into the field that convinced me that I could make a
					career out of software engineering; both due to it being something I enjoyed and something
					I appeared to have some talent for.
				</P>

				<P
					>Some of these projects still exist and even run in 2023 without recompiling (which is
					nice since getting them into a recompilable state would likely take some time):</P
				>

				<!-- Add project links here. -->

				<Heading tag="h6">Awards and Honors:</Heading>

				<List tag="ul" class="list-outside ml-4">
					<Li>Salutatorian of my class.</Li>
					<Li>Received the John Phillip Sousa Marching Band award.</Li>
					<Li>Boy Scout Eagle Scout</Li>
				</List>

				<Heading tag="h6">Activities:</Heading>

				<List tag="ul" class="list-outside ml-4">
					<Li
						>Extremely active in my high school band, and played in both marching and orchestral
						bands year round. I was a very skilled tuba player back in the day.</Li
					>
					<Li
						>I was also very active in my local Boy Scout troop, regularly going camping, and
						participating in many other community activities.</Li
					>
				</List>
			</div>
		</TimelineItem>
	</span>
</Timeline>
