<!--
	@component
	Component backing the about/work page.
-->

<script>
	import { A, Badge, Heading, List, Li, P, Timeline, TimelineItem } from 'flowbite-svelte';

	import { page } from '$app/stores';

	import { GetItemForUrl } from '$lib/navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PageToc from '$lib/components/PageToc.svelte';
	import UnderConstructionSign from '$lib/components/UnderConstructionSign.svelte';

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `This page covers my work history and links to some of the projects I have worked on in my career.`;
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="All about my work history and experience."
	markdown={pageDescription}
/>

<UnderConstructionSign />

<PageToc
	item={navItem}
	contents={[
		{ title: 'Simpson Strong-Tie', url: url + '#simpson' },
		{ title: 'Simpson Strong-Tie', url: url + '#simpson' }
	]}
/>

<Timeline order="vertical">
	<span id="simpson">
		<TimelineItem title="Simpson Strong-Tie: Senior Software Engineer CS Director Team" date="December 2022 - Present">
			<div class="flex flex-col gap-4">
				<P>
					At <A href="https://www.strongtie.com/">Simpson Strong-Tie</A> I serve as a senior software engineer on the <A href="https://www.strongtie.com/products/connectors/ics/component-solutions-software">CS Director</A> team.
				</P>

				<P>
					Specifically I serve as the developer lead of my team.  This means that I lead the engineering efforts of my team in the planning, discussion, and implementation of new features, improvements, and bug fixes to the products we are responsible for. This often involves lots of meetings with stakeholders in both my team, other teams, and at times customers to make sure the work we are doing best meets the needs of customers.
				</P>

				<P>
					The other engineers on my team don't report to me, but I consider it my core responsibility to make sure they have what they need to acheive the team's goals.
				</P>

				<div class="flex gap-2">
					<Badge color="indigo" rounded>Leadership</Badge>
					<Badge rounded>Desktop</Badge>
					<Badge rounded href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0">WPF</Badge>
					<Badge rounded href="https://nuke.build/">Nuke Build</Badge>
					<Badge color="green" rounded href="https://www.jenkins.io/">Jenkins</Badge>
				</div>
			</div>
		</TimelineItem>
	</span>

	<span id="logos-sermons">
		<TimelineItem title="Logos/Faithlife: Software Engineer II Sermon Tools Team" date="~2020 - December 2022">
			<div class="flex flex-col gap-4">
				<P>
					I ended my time at <A href="https://www.logos.com/">Logos</A> as a software engineer level 2 on the Sermon Tools team which is responsible for the Logos <A href="https://www.logos.com/features/sermon-builder?ssi=0">Sermon Builder</A> and <A href="https://support.logos.com/hc/en-us/articles/360046242132-Sermon-Manager">Sermon Manager</A> tools across the Logos desktop, mobile, web applications, and their associated backend services.
				</P>

				<P>
					As was customary with all Logos teams at the time, my team was responsible for all aspects of the sermon tools from planning, implementation, and ending with deployment in the affected applications. 
				</P>

				<P>
					This means that on any given day I could find myself doing the following:
					<List tag="ul" class="list-outside ml-4">
						<Li>I start the day out writing backend code in SQL and C# for the services that wind up running in azure for a new feature.</Li>
						<Li>I add support for the new backend feature in C# WPF, objective-c, swift, and typescript in each of the applications that expose the Sermon Builder or Manager (depending on which tool the wor is for).</Li>
						<Li>Add the typescript and react code necessary to the appropriate component for users to interact with the new feature.</Li>
						<Li>Test and ship the new feature end to end; a process involving terraform, Github Actions, and maybe Jenkins.</Li>
					</List>
				</P>

				<P>
					In addition to my individual contributor responsibilities I led the planning and specification gathering efforts for a number of projects as a feature lead.
				</P>

				<div class="flex gap-2">
					<Badge color="indigo" rounded>Leadership</Badge>
					<Badge rounded>Desktop</Badge>
					<Badge rounded href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0">WPF</Badge>
					<Badge rounded href="https://nuke.build/">Nuke Build</Badge>
					<Badge color="green" rounded href="https://www.jenkins.io/">Jenkins</Badge>
				</div>
			</div>
		</TimelineItem>
	</span>
</Timeline>