<script>
	import { A, Alert, Li } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';

	import { GetItemForUrl } from '$lib/Navigation';
	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PageToc from '$lib/components/PageToc.svelte';
	import HeadingLink from '$lib/components/HeadingLink.svelte';
	import ContentParagraph from '$lib/components/ContentParagraph.svelte';
	import PopupImage from '$lib/components/PopupImage.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';

	import Ti84Image from '$lib/images/software_projects/high_school/ti84.webp';

	import TankChaser1Image from '$lib/images/software_projects/high_school/tank-chaser-1.webp';
	import TankChaser2Image from '$lib/images/software_projects/high_school/tank-chaser-2.webp';
	import TankChaser3Image from '$lib/images/software_projects/high_school/tank-chaser-3.webp';

	import SpaceShooter1Image from '$lib/images/software_projects/high_school/space-shooter-1.webp';
	import SpaceShooter2Image from '$lib/images/software_projects/high_school/space-shooter-2.webp';
	import SpaceShooter3Image from '$lib/images/software_projects/high_school/space-shooter-3.webp';

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `I began my software engineering journey in High School and had my eyes opened to what would become a very productive and fulfilling career.`;
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="Some of the more interesting and more significant projects I worked on in school."
	markdown={pageDescription}
/>

<PageToc
	item={navItem}
	contents={[
		{ title: 'Title', url: '#title' },
		{ title: 'High School Decisions and First Programs', url: '#beginnings' },
		{ title: 'First "Real" Programs', url: '#real' },
		{ title: 'Tank Chaser', url: '#chaser', level: 2 },
		{ title: 'Space Shooter', url: '#shooter', level: 2 }
	]}
/>

<HeadingLink id="beginnings">High School Decisions and First Programs</HeadingLink>

<ContentParagraph>
	I first began seriously thinking of what I would be doing for a living post high school when I was
	16 (10th grade with two years to spare). Like most young people my initial thoughts were a bit
	ambitious and quite vague. When I was very little my first thoughts were that I wanted to be an
	astronaut, but a rather strong fear of heights put that idea to bed quite early.
</ContentParagraph>

<ContentParagraph>
	And with that change in "plans" I knew I enjoyed computers <strong>a lot</strong>. Growing up in
	the later 90s and early 2000s meant I was able to interact a lot with computers when computing
	wasn't nearly as user friendly and abstract as it is today. I had broken, and fixed, my own
	computers on more than one occasion, and since so many people in my life seemed baffled by them it
	felt like a good opportunity to pursue and fun.
</ContentParagraph>

<div class="gap-4 flex flex-row flex-wrap">
	<div class="md:flex-1">
		<ContentParagraph>
			My junior year in High School I wound up taking calculus and the teacher required us to use
			the rather advanced (for the time) <A
				href="https://education.ti.com/en/products/calculators/graphing-calculators/ti-84-plus"
				>TI-84</A
			> calculator on tests, homework, and in-class assignments. These calculators were primitive compared
			to today's smart phones, but they were fully programmable with their own version of <A
				href="https://en.wikipedia.org/wiki/TI-BASIC">Basic</A
			>.
		</ContentParagraph>

		<ContentParagraph>
			A version of <A href="https://en.wikipedia.org/wiki/TI-BASIC">Basic</A> that my teacher did not
			mind us using to write programs to help us on tests...
		</ContentParagraph>

		<ContentParagraph>
			So I figured out how to write some simple programs that would be helpful on tests and
			distributed them with the rest of the class. This covered things like implementing <A
				href="https://en.wikipedia.org/wiki/Newton's_method">Newton's Method</A
			>. This was a very limited environment in which to program, but it really got me thinking...
		</ContentParagraph>
	</div>

	<PopupImage src={Ti84Image} tooltip="Texas Instruments TI 84 Plus Calculator" />
</div>

<HeadingLink id="real">First "Real" Programs</HeadingLink>

<ContentParagraph>
	My first programs on the Ti 84 were very limited and simple things, but they made me start
	wondering what else may be possible and what else may be possible in a PC based environment (that
	supported undo/redo for example) and with languages that were more advanced and complex.
</ContentParagraph>

<ContentParagraph>
	This led me to <A href="https://bloodshed.net/">Dev C++</A>, C, and the <A
		href="https://liballeg.org/">Allegro game programming library</A
	>. Because what nerdy teenager in the early 2000s wasn't interested in video games and creating
	their own?
</ContentParagraph>

<ContentParagraph>
	The most memorable of these creations (excluding my super simple initial command line apps) were a
	pair of very simple and very incomplete games.
</ContentParagraph>

<div class="gap-4 flex flex-row flex-wrap">
	<div class="md:flex-1">
		<HeadingLink tag="h5" id="chaser">Tank Chaser</HeadingLink>

		<ContentParagraph>
			<A href="/files/software_projects/high_school/tank-chaser.zip">Windows Binary</A> - <A
				href="/files/software_projects/high_school/tank-chaser-source.zip">Source Code</A
			>
		</ContentParagraph>

		<ContentParagraph>
			This application was my first real foray into Graphics programming, C, and graphics creation
			in <A href="https://www.gimp.org/">Gimp</A>. The code is <em>very</em>
			primitive as you might imagine, with all of it in one 650ish line file. I definitely
			<em>would not</em> write it the same way now.
		</ContentParagraph>

		<ContentParagraph>
			The binary still runs even on a modern Windows 11 machine and the Readme.txt file in the
			binaries zip contains a bit of a time capsule into what I was thinking and where I was taking
			the project. Even back then I was planning out my projects.
		</ContentParagraph>

		<ContentParagraph>
			I don't recognize it all; it may as well as have been written by someone else, but to be fair
			it has been a long time since I touched it and I barely understood what a pointer was at the
			time.
		</ContentParagraph>

		<ContentParagraph>
			This does have some neat little tidbits in it though that even today I find very amusing:
		</ContentParagraph>

		<UnorderedList>
			<Li>Sound effects</Li>
			<Li>An actual game loop for one of the game modes</Li>
		</UnorderedList>

		<ContentParagraph>
			I remember being very pleased with myself showing this off to my classmates, and I also
			remember them being equal parts baffled, confused, and not very impressed.
		</ContentParagraph>
	</div>

	<div class="md:flex md:flex-col gap-4 mb-4 sm:columns-2">
		<PopupImage src={TankChaser1Image} tooltip="Title Screen" />

		<PopupImage src={TankChaser2Image} tooltip="Stage Select" />

		<PopupImage src={TankChaser3Image} tooltip="Gameplay" />
	</div>
</div>

<div class="gap-4 flex flex-row flex-wrap">
	<div class="md:flex-1">
		<HeadingLink tag="h5" id="shooter">Space Shooter</HeadingLink>

		<ContentParagraph>
			Basic Allegro Version - <A
				href="/files/software_projects/high_school/space-shooter-binary.zip">Windows Binary</A
			> - <A href="/files/software_projects/high_school/space-shooter-source-standard.zip"
				>Source Code</A
			><br />
			Allegro Open Layer Version - <A
				href="/files/software_projects/high_school/space-shooter-advanced-binary.zip"
				>Windows Binary</A
			> - <A href="/files/software_projects/high_school/space-shooter-source-open-layer.zip"
				>Source Code</A
			>
		</ContentParagraph>

		<Alert border color="yellow" class="mb-4">
			<InfoCircleSolid slot="icon" class="w-4 h-4" />

			<ContentParagraph>
				The Basic Allegro Version was built with its logic tied to the its framerate, and it doesn't
				use VSync so I <strong>don't</strong> recommend going past the menus.
			</ContentParagraph>

			<ContentParagraph class="mb-0">
				The Open Layer version runs better on modern hardware but has some audio glitches that
				result in unpleasant sound behavior.
			</ContentParagraph>
		</Alert>

		<ContentParagraph>
			I grew up in the age of the <A href="https://en.wikipedia.org/wiki/Shoot_'em_up">SHMUP</A>;
			from various versions of <A href="https://en.wikipedia.org/wiki/Raiden_(series)">Raiden</A> in
			the arcades to many gaming sessions with friends playing <A
				href="https://en.wikipedia.org/wiki/Captain_Skyhawk">Captain Skyhawk</A
			> on the NES and eventually the SNES port of <A
				href="https://en.wikipedia.org/wiki/Strike_Gunner_S.T.G.">Strike Gunner</A
			>. So I decided I wanted to make my own SHMUP.
		</ContentParagraph>

		<ContentParagraph>
			I created two versions of this application; one using standard <A href="https://liballeg.org/"
				>Allegro</A
			> which is software rendered (which I knew wouldn't scale well at all) and one using <A
				href="https://sourceforge.net/projects/openlayer/">Open Layer</A
			> which provides 2d hardware accelerated rendering capabilities on top of normal Allegro (the advanced
			version). A significant portion of the graphics in this version are procedurally generated resulting
			in smooth explosions and other nicer effects.
		</ContentParagraph>

		<ContentParagraph>
			These applications were also my first foray into 3d graphics creation with <A
				href="https://www.blender.org/">Blender</A
			>. The spaceship on the title screen and the player spaceship sprite were both created in
			Blender.
		</ContentParagraph>

		<ContentParagraph>A few more high points:</ContentParagraph>

		<UnorderedList>
			<Li>Some actual architecture; code is divided amongst features across multiple files.</Li>
			<Li>Both versions load attacker wave information from file.</Li>
		</UnorderedList>
	</div>

	<div class="md:flex md:flex-col gap-4 mb-4 sm:columns-2">
		<PopupImage src={SpaceShooter1Image} tooltip="Title Screen" />

		<PopupImage src={SpaceShooter2Image} tooltip="Options Menu" />

		<PopupImage src={SpaceShooter3Image} tooltip="Gameplay" />
	</div>
</div>

<div class="gap-4 flex flex-row flex-wrap" />
