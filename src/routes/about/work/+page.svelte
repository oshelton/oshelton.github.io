<!--
	@component
	Component backing the about/work page.
-->

<script>
	import { A, Badge, Heading, Li, P, Timeline, TimelineItem } from 'flowbite-svelte';

	import { page } from '$app/stores';

	import { CountPageVisit } from '$lib/Visitor';
	import { GetItemForUrl } from '$lib/Navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PageToc from '$lib/components/PageToc.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';

	CountPageVisit();

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `This page covers my work history and links to some of the projects I have worked on in my career.`;

	const timelineItemContainerClasses = 'flex flex-col gap-4';
	const badgeContainerClasses = 'flex gap-2 flex-wrap';
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="All about my work history and experience."
	markdown={pageDescription}
/>

<PageToc
	item={navItem}
	contents={[
		{ title: 'Simpson Strong-Tie', url: url + '#simpson' },
		{ title: 'Logos Sermon Tools', url: url + '#logos-sermons' },
		{ title: 'Logos Desktop', url: url + '#logos' },
		{ title: 'Drake Software', url: url + '#drake' }
	]}
/>

<Timeline order="vertical">
	<span id="simpson">
		<TimelineItem
			title="Simpson Strong-Tie: Senior Software Engineer/Technical Lead CS Director Team"
			date="December 2022 - Present"
		>
			<div class={timelineItemContainerClasses}>
				<P>
					At <A href="https://www.strongtie.com/">Simpson Strong-Tie</A> I serve as a senior software
					engineer on the <A
						href="https://www.strongtie.com/products/connectors/ics/component-solutions-software"
						>CS Director</A
					> team.
				</P>

				<P>
					Specifically I serve as the technical lead of my team. This means that I lead the
					engineering efforts of my team in the planning, discussion, and implementation of new
					features, improvements, and bug fixes to the products we are responsible for. This often
					involves lots of meetings with stakeholders in both my team, other teams, and at times
					customers to make sure the work we are doing best meets the needs of customers.
				</P>

				<P>
					The other engineers on my team don't report to me, but I consider it my core
					responsibility to make sure they have what they need to acheive the team's goals.
				</P>

				<Heading tag="h6">Responsibilities:</Heading>

				<UnorderedList>
					<Li>Review PRs from teammates and assist them as needed.</Li>
					<Li>Check schedule for any meetings that are upcoming and I need to prepare for.</Li>
					<Li
						>Participate in planning, preparation, and implementation meetings as scheduled and
						needed.</Li
					>
					<Li>Work on sprint work and other items that require my attention.</Li>
				</UnorderedList>

				<Heading tag="h6">Key Takeaways:</Heading>

				<UnorderedList>
					<Li
						>I don't implement as much as an individual contributor as I used to and I have learned
						that there is much greater joy and accomplishment to be found in enabling and equipping
						my team to be more successful.</Li
					>
					<Li
						>A small team that works well together is far more valuable than a single extremely
						strong individual contributor.</Li
					>
					<Li>
						A dedicated note taking application and a daily process of recording what has been and
						needs to be done on that day has been extremely helpful. I've had a lot of luck with <A
							href="https://obsidian.md/">Obsidian</A
						>.
					</Li>
				</UnorderedList>

				<div class={badgeContainerClasses}>
					<Badge color="indigo" rounded>Lead</Badge>
					<Badge rounded>Desktop</Badge>
					<Badge color="yellow" rounded>C#</Badge>
					<Badge
						color="yellow"
						rounded
						href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0"
						>WPF</Badge
					>
					<Badge color="green" rounded href="https://nuke.build/">Nuke Build</Badge>
					<Badge color="green" rounded href="https://www.jenkins.io/">Jenkins</Badge>
				</div>
			</div>
		</TimelineItem>
	</span>

	<span id="logos-sermons">
		<TimelineItem
			title="Logos/Faithlife: Software Engineer II Sermon Tools Team"
			date="~2020 - December 2022"
		>
			<div class={timelineItemContainerClasses}>
				<P>
					I ended my time at <A href="https://www.logos.com/">Logos</A> as a software engineer level
					2 on the Sermon Tools team which is responsible for the Logos <A
						href="https://www.logos.com/features/sermon-builder?ssi=0">Sermon Builder</A
					> and <A href="https://support.logos.com/hc/en-us/articles/360046242132-Sermon-Manager"
						>Sermon Manager</A
					> tools across the Logos desktop, mobile, web applications, and their associated backend services.
				</P>

				<P>
					I (along with my team) was responsible for all aspects of the sermon tools from planning,
					implementation, and ending with deployment across the various applications that used them.
					This includes the backend service and database that housed Sermon data, the shared web
					components that made up the UI, and the points of integration in the web, desktop, and
					mobile applications.
				</P>

				<P>
					This was a real full-stack experience and represented an interesting approach to managing
					a software project. From the surface one would think that a whole team (several devs, a
					lead, and an assigned UI/UX representative) for just these two features was overkill, but
					when taking into account how many different things are involved it made a lot of sense.
				</P>

				<P>
					This role also served as a continuation of my experiences on the Logos Desktop team. I
					continued to lead the development of several new features and improvements, and had even
					more opportunities to grow and acquire more responsibility.
				</P>

				<Heading tag="h6">Responsibilities:</Heading>

				<UnorderedList>
					<Li
						>Create the backend code in SQL and C# for the services that wind up running in azure
						for a new feature or bug fix.</Li
					>
					<Li
						>Add support for new backend features or bugfixes in C# WPF, objective-c, swift, and
						typescript in each of the applications that expose the Sermon Builder or Manager
						(depending on which tool the work is for).</Li
					>
					<Li
						>Add the typescript and react code necessary to the appropriate component for users to
						interact with the new feature or bug fix.</Li
					>
					<Li
						>And lastly, I Test and ship the changes end to end; a process involving Terraform,
						Github Actions, and maybe Jenkins.</Li
					>
				</UnorderedList>

				<Heading tag="h6">Key Takeaways:</Heading>

				<UnorderedList>
					<Li
						>React can be very annoying, and it's not my first choice for a web frontend framework.</Li
					>
					<Li
						>Rich Text Editors are really <em>really</em> complicated. Adding IME and RTL text to the
						mix just makes things even more complicated.</Li
					>
					<Li>
						Sharing UI between desktop, mobile, and web applications is a really neat solution to
						reducing code duplication between applications, but it isn't simple to set up.
					</Li>
					<Li>
						Robust distributed data synchronization between local customer housed data stores and
						cloud hosted databases is <em>very</em> complicated.
					</Li>
					<Li>
						A well established automated build pipeline is incredibly helpful when developing a
						component that is consumed in many consumers and save a lot of time. That same tooling
						can also be used to do anything that can be implemented in code. The limitations are
						only those of your imagination.
					</Li>
				</UnorderedList>

				<div class={badgeContainerClasses}>
					<Badge color="indigo" rounded>Full Stack</Badge>
					<Badge rounded>Desktop</Badge>
					<Badge rounded>Web</Badge>
					<Badge rounded>IOS</Badge>
					<Badge rounded>MacOS</Badge>
					<Badge color="yellow" rounded>C#</Badge>
					<Badge color="yellow" rounded>Typescript</Badge>
					<Badge color="yellow" rounded>Swift</Badge>
					<Badge color="yellow" rounded>Objective-C</Badge>
					<Badge
						color="yellow"
						rounded
						href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0"
						>WPF</Badge
					>
					<Badge color="yellow" rounded href="https://react.dev/">React</Badge>
					<Badge color="yellow" rounded href="https://www.mysql.com/">MySQL</Badge>
					<Badge color="green" rounded href="https://www.jenkins.io/">Jenkins</Badge>
					<Badge color="green" rounded href="https://www.terraform.io/">Terraform</Badge>
					<Badge color="green" rounded href="https://azure.microsoft.com/en-us/">Azure</Badge>
				</div>
			</div>
		</TimelineItem>
	</span>

	<span id="logos">
		<TimelineItem
			title="Logos/Faithlife: Software Engineer II Logos Desktop Team"
			date="~2018 - ~2020"
		>
			<div class={timelineItemContainerClasses}>
				<P>
					I began my time at <A href="https://www.logos.com/">Logos</A> as a software engineer level
					2 on the Logos Desktop team which is responsible for the <A
						href="https://www.logos.com/grow/what-is-logos-bible-study/"
						>Logos Desktop Application</A
					> on Mac and Windows, and occasionally on some backend web services.
				</P>

				<P>
					This was an amazing experience for me. I was able to develop a lot of experience working
					on a robust code base using technologies that I had previously only been able to dabble in
					or only worked on in a sole contributor role. It also gave me the chance to really learn
					what it meant to work on a team closely with other software engineers and to experience
					how coordination with a UI/UX team could work.
				</P>

				<P>
					I was also afforded a lot of opportunities to take ownership of the development of new
					features from planning through implementation, and that gave me a taste of leadership that
					I hadn't had before. I had led the development of features before but never had a chance
					to really lead an effort and have other engineers working with me.
				</P>

				<Heading tag="h6">Responsibilities:</Heading>

				<UnorderedList>
					<Li
						>Work in the Logos Desktop Mac and Windows code bases to fix issues, implement new
						features, and enhance existing features.</Li
					>
					<Li
						>Participate in meetings regarding new upcoming features and improvement work including
						evaluating specifications provided by the UI/UX team.</Li
					>
					<Li>Review code for other teammates.</Li>
					<Li>
						Make improvements to the shared infrastructure that other teams use to interact with
						Logos.
					</Li>
				</UnorderedList>

				<Heading tag="h6">Key Takeaways:</Heading>

				<UnorderedList>
					<Li>A well refined long lived C#/WPF codebase can be a really cool thing to see.</Li>
					<Li
						>Objective-C can take a lot of getting used to, but it is an extremely powerful object
						oriented language and almost certainly underrated and held back by being tied to the
						Apple ecosystem.</Li
					>
					<Li>
						Having UI/UX support readily available on a team is invaluable when creating new UI for
						customers. Software Engineers generally do not make the best UI/UX designers.
					</Li>
					<Li>
						Logos was always willing to let engineers take the lead on new feature development and
						other work, even if they didn't necessarily have the experience for doing so. They gave
						me a lot of opportunities and chances to succeed that forced me to grow, and I really
						appreciate it. Trust your engineers, even junior ones.
					</Li>
				</UnorderedList>

				<div class={badgeContainerClasses}>
					<Badge rounded>Desktop</Badge>
					<Badge rounded>MacOS</Badge>
					<Badge color="yellow" rounded>C#</Badge>
					<Badge color="yellow" rounded>Objective-C</Badge>
					<Badge
						rounded
						href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0"
						>WPF</Badge
					>
					<Badge rounded href="https://www.sqlite.org/index.html">SQLite</Badge>
					<Badge color="green" rounded href="https://www.jenkins.io/">Jenkins</Badge>
				</div>
			</div>
		</TimelineItem>
	</span>

	<span id="drake">
		<TimelineItem
			title="Drake Software: Lead Programmer Data Conversions"
			date="August 2013 - ~May 2018"
		>
			<div class={timelineItemContainerClasses}>
				<P>
					At Drake Software I lead the software development efforts of the <A
						href="https://drakesoftware.com/Site/Browse/10869/FAQs-About-The-Conversion-Programs"
						>Data conversions</A
					> team and assisted in the development of various features and tools for other teams.
				</P>

				<P>
					Drake Software was my first experience working full time in a company where software
					creation was their business. My work on the data conversions team was pretty fun; I had
					many opportunities to reverse engineer complex file formats and create code for parsing
					them and mapping them to Drake's own formats and was exposed to the wild world of code
					generation. There was only one other developer on the team and they were largely
					responsible for data mapping so I had a lot of responsibility and freedom to maintain and
					improve our conversion applications and tooling.
				</P>

				<P>
					I also blew up my first production database, and quickly learned how important it is to
					not just have backups of critical data, but also know absolutely certainly that the
					restore process for said backups actually works...
				</P>

				<P>
					In addition to my responsibilities on the data conversions team I also led a number of
					projects on other teams in wildly different tech bases.
				</P>

				<Heading tag="h6">Responsibilities:</Heading>

				<UnorderedList>
					<Li
						>Improve, update, and maintain the tooling and desktop application that manages the data
						backing all of Drake's conversions.</Li
					>
					<Li>Improve, update, and maintain each of the Drake Software conversion applications.</Li>
					<Li>Map data between other applications and Drake Software's data model.</Li>
					<Li>Work on projects for other teams as time allows and there are needs.</Li>
					<Li>During tax season answer support questions from Drake Software customers.</Li>
				</UnorderedList>

				<Heading tag="h6">Key Takeaways:</Heading>

				<UnorderedList>
					<Li
						>Code can be data, and generating code for data can be a perfectly viable way to ship
						data to customers without needing to worry about the format to deliver it in or any
						runtime issues.</Li
					>
					<Li>Reverse engineering file formats can be very fun.</Li>
				</UnorderedList>

				<div class={badgeContainerClasses}>
					<Badge color="indigo" rounded>Lead</Badge>
					<Badge rounded>Desktop</Badge>
					<Badge rounded>Web</Badge>
					<Badge color="yellow" rounded>C#</Badge>
					<Badge color="yellow" rounded>C++</Badge>
					<Badge color="yellow" rounded>Typescript</Badge>
					<Badge
						rounded
						href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0"
						>WPF</Badge
					>
					<Badge
						rounded
						href="https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/?view=netdesktop-8.0"
						>Winforms</Badge
					>
					<Badge rounded href="https://angular.io/">Angular</Badge>
					<Badge rounded href="https://www.sqlite.org/index.html">MS SQL</Badge>
				</div>
			</div>
		</TimelineItem>
	</span>
</Timeline>
