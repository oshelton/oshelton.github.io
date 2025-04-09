<!--
	@component
	Component backing the about/work page.
-->

<script>
	import { browser } from '$app/environment';
	import {
		A,
		Accordion,
		AccordionItem,
		Badge,
		Heading,
		Li,
		P,
		Timeline,
		TimelineItem
	} from 'flowbite-svelte';

	import { page } from '$app/stores';

	import { CountPageVisit } from '$lib/Visitor';
	import { GetItemForUrl } from '$lib/Navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PageToc from '$lib/components/PageToc.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';

	CountPageVisit();

	const url = $page.url.pathname;

	// Break apart the url.
	const expandEnabled = browser && $page.url.searchParams.get('expand') === 'true';
	const doExpanded = browser && expandEnabled;
	const hashPart = browser && $page.url.hash;
	const isAnchoredNav = browser && hashPart;

	// Constants for navigating to the page with a section expanded.
	// Supports links of the format /work?expanded=true#simpson
	const expandAll = doExpanded && !isAnchoredNav;
	const expandSpecific = doExpanded && isAnchoredNav;
	const expandSection = browser && expandEnabled && hashPart;

	const navItem = GetItemForUrl(url);
	const pageDescription = `This page covers my work history and links to some of the projects I have worked on in my career.`;

	// Ids of various sections for use with navigation.
	const renewedVisionId = 'renewed-vision';
	const simpsonLeadId = 'simpson-lead';
	const simpsonId = 'simpson';
	const logosSermonsId = 'logos-sermons';
	const logosId = 'logos';
	const drakeId = 'drake';
	const ltfId = 'ltf';
	const ugaId = 'uga';

	const timelineItemContainerClasses = 'flex flex-col gap-4';
	const badgeContainerClasses = 'flex mt-4 gap-2 flex-wrap';
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="All about my work history and experience."
	markdown={pageDescription}
/>

<PageToc
	item={navItem}
	contents={[
		{ title: 'Title', url: '#title' },
		{ title: 'Renewed Vision', url: `#${renewedVisionId}` },
		{ title: 'Simpson Strong-Tie Lead Engineer', url: `#${simpsonLeadId}` },
		{ title: 'Simpson Strong-Tie Senior Engineer', url: `#${simpsonId}` },
		{ title: 'Logos Sermon Tools', url: `#${logosSermonsId}` },
		{ title: 'Logos Desktop', url: `#${logosId}` },
		{ title: 'Drake Software', url: `#${drakeId}` },
		{ title: 'Lewis Taylor Farms', url: `#${ltfId}` },
		{ title: 'University of Georgia Instructor', url: `#${ugaId}` }
	]}
/>

<Timeline order="vertical">
	<span id={renewedVisionId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${ugaId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6"
							><A href="https://www.renewedvision.com/">Renewed Vision</A>: Senior Software Engineer
							ProPresenter Windows Team</Heading
						>
						<P>Full Time: September 2024 - Present</P>
					</span>

					<div class={timelineItemContainerClasses}>
						<P>
							As a senior software engineer on the Windows ProPresenter team I am responsible for a
							host of tasks on our core product.
						</P>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li>Fix bugs, create features, and lead projects from my team's perspective.</Li>
							<Li>Coordinate with other teams on cross-platform and cross-product projects.</Li>
							<Li
								>Review teammate work, mentor, and advocate for improvements to our internal
								processes.</Li
							>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

			<div class={badgeContainerClasses}>
				<Badge color="indigo" rounded>Management and Planning</Badge>
				<Badge rounded>Desktop</Badge>
				<Badge color="yellow" rounded>C#</Badge>
				<Badge color="yellow" rounded>Rust</Badge>
				<Badge color="yellow" rounded>C++</Badge>
				<Badge
					color="yellow"
					rounded
					href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0"
					>WPF</Badge
				>
			</div>
		</TimelineItem>
	</span>

	<span id={simpsonLeadId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${simpsonLeadId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6"
							><A href="https://www.strongtie.com/">Simpson Strong-Tie</A>: Lead Software Engineer <A
								href="https://www.strongtie.com/products/connectors/ics">CS Director</A
							> Team</Heading
						>
						<P>Full Time: May 2024 - August 2024</P>
					</span>

					<div class={timelineItemContainerClasses}>
						<P>
							In May of 2024 I was promoted to the role of Lead Software Engineer of the <A
								href="https://www.strongtie.com/">Simpson Strong-Tie</A
							>
							<A
								href="https://www.strongtie.com/products/connectors/ics/component-solutions-software"
								>CS Director</A
							> team.
						</P>

						<P>
							I lead the the Simpson Strong-Tie CS Director team from a development perspective;
							including planning out and prioritizing work with Product Management and other
							stakeholders, organizing work in our Project Management tools, partnering with
							Engineers who own specific features and projects to ensure their success, and
							continuing to participate in the team's work as an individual code contributor.
						</P>

						<P>
							I also mentor the engineers on my team, partner with them on their goals and where
							they are wanting to take their career in the future, and make sure they have what they
							need to do the work they are being asked to do.
						</P>

						<P>
							The CS Director application is a large <strong>WPF</strong> based on-prem distributed desktop
							application that forms the core of our customers truss manufacturing businesses and organizes
							their production, billing, and design operations under one "roof".
						</P>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li
								>Organize, plan, and when ready delegate projects to the engineers on the team as
								project leads.</Li
							>
							<Li
								>Support and partner with project leads on the team to see projects through to
								completion.</Li
							>
							<Li>Create Proof of Concepts and initial architecture work for upcoming projects.</Li>
							<Li>Mentor and train engineers on the team.</Li>
							<Li>Advocate for and implement changes and improvements to the team's processes.</Li>
							<Li>Serve as the technical point of contact for stakeholders outside the team.</Li>
							<Li
								>Coordinate with the Product and UX teams to ensure upcoming work is adequately
								documented and ready for work.</Li
							>
							<Li
								>Participate in higher level cross-team architecture, planning, and software
								direction discussions.</Li
							>
						</UnorderedList>

						<Heading tag="h6">Key Takeaways:</Heading>

						<UnorderedList>
							<Li
								>I won't be taking complete project ownership as much as I have in the past; I can't
								commit to the time it requires amongst my other responsibilities.</Li
							>
							<Li
								>This marks a shift away from what I can do as an individual and towards what I can
								do for the team.</Li
							>
							<Li
								>I'm <em>really</em> excited about this shift and am looking forward to serving my team
								in this capacity.</Li
							>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

			<div class={badgeContainerClasses}>
				<Badge color="indigo" rounded>Lead</Badge>
				<Badge color="indigo" rounded>Management and Planning</Badge>
				<Badge rounded>Desktop</Badge>
				<Badge color="yellow" rounded>C#</Badge>
				<Badge
					color="yellow"
					rounded
					href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0"
					>WPF</Badge
				>
				<Badge color="yellow" rounded>MS SQL Server</Badge>
				<Badge color="green" rounded href="https://nuke.build/">Nuke Build</Badge>
				<Badge
					color="green"
					rounded
					href="https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"
					>App Insights</Badge
				>
				<Badge color="green" rounded href="https://azure.microsoft.com/en-us/">Azure</Badge>
			</div>
		</TimelineItem>
	</span>

	<span id={simpsonId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${simpsonId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6">
							<A href="https://www.strongtie.com/">Simpson Strong-Tie</A>: Senior Software
							Engineer/Tech Lead <A href="https://www.strongtie.com/products/connectors/ics"
								>CS Director</A
							> Team
						</Heading>
						<P>Full Time: December 2022 - May 2024</P>
					</span>

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
							features, improvements, and bug fixes to the products we are responsible for. This
							often involves lots of meetings with stakeholders in both my team, other teams, and at
							times customers to make sure the work we are doing best meets the needs of customers.
						</P>

						<P>
							The other engineers on my team don't report to me, but I consider it my core
							responsibility to make sure they have what they need to achieve the team's goals.
						</P>

						<P>
							The CS Director application is a large <strong>WPF</strong> based on-prem distributed desktop
							application that forms the core of our customers truss manufacturing businesses and organizes
							their production, billing, and design operations under one "roof".
						</P>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li>Review PRs from teammates and assist them as needed.</Li>
							<Li>Participate in planning, preparation, and implementation meetings as needed.</Li>
							<Li
								>Work on sprint work and other items in an individual contributor and project lead
								capacity; taking ownership of projects where needed.</Li
							>
						</UnorderedList>

						<Heading tag="h6">Key Takeaways:</Heading>

						<UnorderedList>
							<Li
								>I don't implement as much as an individual contributor as I used to and I have
								learned that there is much greater joy and accomplishment to be found in enabling
								and equipping my team to be more successful.</Li
							>
							<Li
								>A small team that works well together is far more valuable than a single extremely
								strong individual contributor.</Li
							>
							<Li>
								A dedicated note taking application and a daily process of recording what has been
								and needs to be done on that day has been extremely helpful. I've had a lot of luck
								with <A href="https://obsidian.md/">Obsidian</A>.
							</Li>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

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
				<Badge color="yellow" rounded>MS SQL Server</Badge>
				<Badge color="green" rounded href="https://nuke.build/">Nuke Build</Badge>
				<Badge color="green" rounded href="https://www.jenkins.io/">Jenkins</Badge>
			</div>
		</TimelineItem>
	</span>

	<span id={logosSermonsId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${logosSermonsId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6"
							><A href="https://www.logos.com/">Logos/Faithlife</A>: Software Engineer II <A
								href="https://www.logos.com/features/sermon-builder">Sermon Tools</A
							> Team</Heading
						>
						<P>Full Time: ~2020 - December 2022</P>
					</span>

					<div class={timelineItemContainerClasses}>
						<P>
							I ended my time at <A href="https://www.logos.com/">Logos</A> as a software engineer level
							2 on the Sermon Tools team which is responsible for the Logos <A
								href="https://www.logos.com/features/sermon-builder?ssi=0">Sermon Builder</A
							> and <A
								href="https://support.logos.com/hc/en-us/articles/360046242132-Sermon-Manager"
								>Sermon Manager</A
							> tools across the Logos desktop, mobile, web applications, and their associated backend
							services.
						</P>

						<P>
							I (along with my team) was responsible for all aspects of the sermon tools from
							planning, implementation, and ending with deployment across the various applications
							that used them. This includes the <strong>backend service</strong> and database that
							housed Sermon data, the shared <strong>React web components</strong> that made up the
							UI, and the points of integration in the <strong>web</strong>,
							<strong>desktop</strong>, and <strong>mobile</strong> applications.
						</P>

						<P>
							This was a real <strong>full-stack</strong> experience and represented an interesting approach
							to managing a software project. From the surface one would think that a whole team (several
							devs, a lead, and an assigned UI/UX representative) for just these two features was overkill,
							but when taking into account how many different things are involved it made a lot of sense.
						</P>

						<P>
							This role also served as a continuation of my experiences on the Logos Desktop team. I
							continued to lead the development of several new features and improvements, and had
							even more opportunities to grow and acquire more responsibility.
						</P>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li
								>Create the backend code in <strong>SQL</strong> and <strong>C#</strong> for the services
								that wind up running in azure for a new feature or bug fix.</Li
							>
							<Li
								>Add support for new backend features or bugfixes in <strong>C# WPF</strong>,
								<strong>objective-c</strong>, <strong>swift</strong>, and
								<strong>typescript</strong> in each of the applications that expose the Sermon Builder
								or Manager (depending on which tool the work is for).</Li
							>
							<Li
								>Add the <strong>typescript</strong> and <strong>react</strong> code necessary to the
								appropriate component for users to interact with the new feature or bug fix.</Li
							>
							<Li
								>And lastly, I Test and ship the changes end to end; a process involving <strong
									>Terraform</strong
								>,
								<strong>Github Actions</strong>, and maybe <strong>Jenkins</strong>.</Li
							>
						</UnorderedList>

						<Heading tag="h6">Key Takeaways:</Heading>

						<UnorderedList>
							<Li
								><strong>React</strong> can be very annoying, and it's not my first choice for a web
								frontend framework.</Li
							>
							<Li
								>Rich Text Editors are really <em>really</em> complicated. Adding IME and RTL text to
								the mix just makes things even more complicated.</Li
							>
							<Li>
								Sharing UI between <strong>desktop</strong>, <strong>mobile</strong>, and
								<strong>web</strong> applications is a really neat solution to reducing code duplication
								between applications, but it isn't simple to set up.
							</Li>
							<Li>
								Robust distributed data synchronization between local customer housed data stores
								and cloud hosted databases is <em>very</em> complicated.
							</Li>
							<Li>
								A well established automated build pipeline is incredibly helpful when developing a
								component that is consumed in many consumers and save a lot of time. That same
								tooling can also be used to do anything that can be implemented in code. The
								limitations are only those of your imagination.
							</Li>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

			<div class={badgeContainerClasses}>
				<Badge color="indigo" rounded>Full Stack</Badge>
				<Badge color="indigo" rounded>Management and Planning</Badge>
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
		</TimelineItem>
	</span>

	<span id={logosId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${logosId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6"
							><A href="https://www.logos.com/">Logos/Faithlife</A>: Software Engineer II <A
								href="https://www.logos.com/grow/what-is-logos-bible-study/">Logos Desktop</A
							> Team</Heading
						>
						<P>Full Time: May 2018 - ~2020</P>
					</span>

					<div class={timelineItemContainerClasses}>
						<P>
							I began my time at <A href="https://www.logos.com/">Logos</A> as a software engineer level
							2 on the Logos Desktop team which is responsible for the <A
								href="https://www.logos.com/grow/what-is-logos-bible-study/"
								>Logos Desktop Application</A
							> on Mac and Windows, and occasionally on some backend web services.
						</P>

						<P>
							This was an amazing experience for me. I was able to develop a lot of experience
							working on a robust code base using technologies that I had previously only been able
							to dabble in or only worked on in a sole contributor role. It also gave me the chance
							to really learn what it meant to work on a team closely with other software engineers
							and to experience how coordination with a UI/UX team could work.
						</P>

						<P>
							I was also afforded a lot of opportunities to take ownership of the development of new
							features from planning through implementation, and that gave me a taste of leadership
							that I hadn't had before. I had led the development of features before but never had a
							chance to really lead an effort and have other engineers working with me.
						</P>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li
								>Work in the Logos Desktop <strong>Mac</strong> and <strong>Windows</strong> code bases
								to fix issues, implement new features, and enhance existing features.</Li
							>
							<Li
								>Participate in meetings regarding new upcoming features and improvement work
								including evaluating specifications provided by the UI/UX team.</Li
							>
							<Li>Review code for other teammates.</Li>
							<Li>
								Make improvements to the shared infrastructure that other teams use to interact with
								Logos.
							</Li>
						</UnorderedList>

						<Heading tag="h6">Key Takeaways:</Heading>

						<UnorderedList>
							<Li
								>A well refined long lived <strong>C#/WPF</strong> codebase can be a really cool thing
								to see.</Li
							>
							<Li
								><strong>Objective-C</strong> can take a lot of getting used to, but it is an extremely
								powerful object oriented language and almost certainly underrated and held back by being
								tied to the Apple ecosystem.</Li
							>
							<Li>
								Having UI/UX support readily available on a team is invaluable when creating new UI
								for customers. Software Engineers generally do not make the best UI/UX designers.
							</Li>
							<Li>
								Logos was always willing to let engineers take the lead on new feature development
								and other work, even if they didn't necessarily have the experience for doing so.
								They gave me a lot of opportunities and chances to succeed that forced me to grow,
								and I really appreciate it. Trust your engineers, even junior ones.
							</Li>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

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
		</TimelineItem>
	</span>

	<span id={drakeId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${drakeId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6"
							><A href="https://www.drakesoftware.com/">Drake Software</A>: Lead Programmer <A
								href="https://www.drakesoftware.com/products/conversions/">Data Conversions</A
							></Heading
						>
						<P>Full Time: August 2013 - May 2018</P>
					</span>

					<div class={timelineItemContainerClasses}>
						<P>
							At Drake Software I lead the software development efforts of the <A
								href="https://drakesoftware.com/Site/Browse/10869/FAQs-About-The-Conversion-Programs"
								>Data conversions</A
							> team and assisted in the development of various features and tools for other teams.
						</P>

						<P>
							Drake Software was my first experience working full time in a company where software
							creation was their business. My work on the data conversions team was pretty fun; I
							had many opportunities to reverse engineer complex file formats and create code for
							parsing them and mapping them to Drake's own formats and was exposed to the wild world
							of code generation. There was only one other developer on the team and they were
							largely responsible for data mapping so I had a lot of responsibility and freedom to
							maintain and improve our conversion applications and tooling.
						</P>

						<P>
							I also blew up my first production database, and quickly learned how important it is
							to not just have backups of critical data, but also know absolutely certainly that the
							restore process for said backups actually works...
						</P>

						<P>
							In addition to my responsibilities on the data conversions team I also led a number of
							projects on other teams in wildly different tech bases.
						</P>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li
								>Improve, update, and maintain the <strong>WPF</strong> tooling and desktop application
								that manages the data backing all of Drake's conversions.</Li
							>
							<Li
								>Improve, update, and maintain each of the <strong>C++</strong> Drake Software conversion
								applications.</Li
							>
							<Li>Map data between other applications and Drake Software's data model.</Li>
							<Li
								>Assist other teams with their projects as needed and available (<strong
									>Winforms</strong
								>
								and <strong>Angular</strong>)</Li
							>
							<Li>During tax season answer support questions from Drake Software customers.</Li>
						</UnorderedList>

						<Heading tag="h6">Key Takeaways:</Heading>

						<UnorderedList>
							<Li
								>Code can be data, and generating code for data can be a perfectly viable way to
								ship data to customers without needing to worry about the format to deliver it in or
								any runtime issues.</Li
							>
							<Li>Reverse engineering undocumented file formats can be very fun.</Li>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

			<div class={badgeContainerClasses}>
				<Badge color="indigo" rounded>Lead</Badge>
				<Badge color="indigo" rounded>Management and Planning</Badge>
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
		</TimelineItem>
	</span>

	<span id={ltfId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${ltfId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6"
							><A href="https://www.lewistaylorfarms.com/">Lewis Taylor Farms</A>: Software Engineer
							and System Maintainer (part time)</Heading
						>
						<P>Part Time: May 2011 - August 2015</P>
					</span>

					<div class={timelineItemContainerClasses}>
						<P>
							My first experience as a professional software engineer was at <A
								href="http://www.lewistaylorfarms.com/">Lewis Taylor Farms (LTF)</A
							>
						</P>

						<P>
							A couple of years before I came along a University of Georgia graduate student created
							a <strong>.NET/WPF</strong> based inventory and greenhouse management application for LTF
							to use to manage their growing business. This student moved on and I was hired to continue
							working on and maintaining the application.
						</P>

						<P>
							This included coordinating with LTF employees to determine requirements around new
							features, fix bugs, and maintain the infrastructure that the application relied on.
						</P>

						<P>
							The application used a <strong>WPF</strong> client on individual user machines backed
							by an on-premises
							<strong>MySQL</strong> database for storing data.
						</P>

						<P>
							All LTF orders go through this application, and all seed inventory, customer, and much
							employee information is managed in it as well.
						</P>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li
								>Improve, update, and maintain the LTF Greenshouses desktop application and
								infrastructure.</Li
							>
							<Li
								>Coordinate with LTF employees for the adding of new features and addressing bugs.</Li
							>
							<Li>Design and implement new tools and processes around the application.</Li>
						</UnorderedList>

						<Heading tag="h6">Key Takeaways:</Heading>

						<UnorderedList>
							<Li
								>DB indexes are very important; the DB had none when I inherited it and adding them
								dramatically improved application performance overnight.</Li
							>
							<Li
								>After some not so great application updates I created a development and testing
								environment that lived alongside the production one and it proved invaluable when
								evaluating new features and using LTF employees as QA.</Li
							>
						</UnorderedList>

						<Heading tag="h6">Projects:</Heading>

						<UnorderedList>
							<Li
								>Created an automated backup application to take snapshots of their production DB
								and move them to a long term storage device.</Li
							>
							<Li
								>Implemented an automatic update feature using <A href="https://winsparkle.org/"
									>WinSparkle</A
								> that was very successful.</Li
							>
							<Li
								>Made many dramatic improvements to their DB schema and made further improvements to
								application performance by improving how the application interacted with the DB.</Li
							>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

			<div class={badgeContainerClasses}>
				<Badge color="indigo" rounded>Management and Planning</Badge>
				<Badge rounded>Desktop</Badge>
				<Badge color="yellow" rounded>C#</Badge>
				<Badge
					color="yellow"
					rounded
					href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-8.0"
					>WPF</Badge
				>
				<Badge color="yellow" rounded href="https://www.mysql.com/">MySQL</Badge>
			</div>
		</TimelineItem>
	</span>

	<span id={ugaId}>
		<TimelineItem>
			<svelte:fragment slot="icon">
				<span />
			</svelte:fragment>

			<Accordion flush>
				<AccordionItem
					paddingFlush="0"
					open={expandAll || (expandSpecific && expandSection === `#${ugaId}`)}
				>
					<span slot="header" class="mb-4">
						<Heading tag="h6"
							><A href="https://www.uga.edu/">University of Georgia</A>: Instructor</Heading
						>
						<P>Part Time: August 2011 - May 2013</P>
					</span>

					<div class={timelineItemContainerClasses}>
						<P>
							At the <A href="https://www.uga.edu/">University of Georgia (UGA)</A> part of the Graduate
							Assistants I was offered included serving as a graduate teaching assistant which quickly
							grew into taking on full instructor responsibilities for a couple of years.
						</P>

						<P>
							In my role I served as an instructor for a couple of introductory Computer Science
							classes:
						</P>

						<UnorderedList>
							<Li><strong>CSCI-1301:</strong> Introduction to Computing and Programming</Li>
							<Li class="ml-5">Intro programming course. Used Java while I was there.</Li>
							<Li><strong>CSCI-1730:</strong> Systems Programming</Li>
							<Li class="ml-5">Introduction to Linux/Unix and C++.</Li>
						</UnorderedList>

						<Heading tag="h6">Responsibilities:</Heading>

						<UnorderedList>
							<Li
								>Create course work, prepare lesson plans, and lecture in class for a variety
								introductory computer science classes at UGA.</Li
							>
							<Li>Coordinate course work grading with other teaching assistants.</Li>
							<Li>Hold office hours to help and support my students as necessary.</Li>
						</UnorderedList>

						<Heading tag="h6">Key Takeaways:</Heading>

						<UnorderedList>
							<Li>Teaching is <em>really</em> hard, but I also <em>really</em> enjoy it.</Li>
							<Li
								>Graduate students were ill prepared and equipped when they begin their role as
								instructors.</Li
							>
						</UnorderedList>
					</div>
				</AccordionItem>
			</Accordion>

			<div class={badgeContainerClasses}>
				<Badge color="indigo" rounded>Teaching</Badge>
				<Badge color="indigo" rounded>Mentoring</Badge>
			</div>
		</TimelineItem>
	</span>
</Timeline>
