<script>
	import { A, Heading, P, List, Li } from 'flowbite-svelte';
	import { page } from '$app/stores';

	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PopupImage from '$lib/components/PopupImage.svelte';
	import PageToc from '$lib/components/PageToc.svelte';

	import { CountPageVisit } from '$lib/analytics';
	import { GetItemForUrl } from '$lib/navigation.js';

	import CharlestonBeach1 from '$lib/images/outside_of_work/photography/charleston_beach_1.webp';
	import CharlestonBeach1Small from '$lib/images/outside_of_work/photography/charleston_beach_1_small.webp';
	import SterlingSnow from '$lib/images/outside_of_work/photography/sterling_snow.webp';
	import SterlingSnowSmall from '$lib/images/outside_of_work/photography/sterling_snow_small.webp';
	import SeaOatsSunset from '$lib/images/outside_of_work/photography/sea_oats_sunset.webp';
	import SeaOatsSunsetSmall from '$lib/images/outside_of_work/photography/sea_oats_sunset_small.webp';
	import SunsetSound from '$lib/images/outside_of_work/photography/sunset_sound.webp';
	import SunsetSoundSmall from '$lib/images/outside_of_work/photography/sunset_sound_small.webp';
	import SunriseHatteras from '$lib/images/outside_of_work/photography/sunrise_hatteras.webp';
	import SunriseHatterasSmall from '$lib/images/outside_of_work/photography/sunrise_hatteras_small.webp';
	import BumbleBee from '$lib/images/outside_of_work/photography/bumble_bee_flower.webp';
	import BumbleBeeSmall from '$lib/images/outside_of_work/photography/bumble_bee_flower_small.webp';
	import SnowFlowerClayton from '$lib/images/outside_of_work/photography/snow_flower_clayton.webp';
	import SnowFlowerClaytonSmall from '$lib/images/outside_of_work/photography/snow_flower_clayton_small.webp';
	import SnowWaynesville from '$lib/images/outside_of_work/photography/snow_waynesville.webp';
	import SnowWaynesvilleSmall from '$lib/images/outside_of_work/photography/snow_waynesville_small.webp';

	import ChatoogaRiver from '$lib/images/outside_of_work/hiking/chatooga_river.webp';
	import ChatoogaRiverSmall from '$lib/images/outside_of_work/hiking/chatooga_river_small.webp';
	import Elk from '$lib/images/outside_of_work/hiking/elk.webp';
	import ElkSmall from '$lib/images/outside_of_work/hiking/elk_small.webp';
	import MaxPatchAscent from '$lib/images/outside_of_work/hiking/max_patch_ascent.webp';
	import MaxPatchAscentSmall from '$lib/images/outside_of_work/hiking/max_patch_ascent_small.webp';
	import MaxPatchTop from '$lib/images/outside_of_work/hiking/max_patch_top.webp';
	import MaxPatchTopSmall from '$lib/images/outside_of_work/hiking/max_patch_top_small.webp';

	CountPageVisit();

	const url = $page.url.pathname;
	const navItem = GetItemForUrl(url);
	const pageDescription = `I am a man of many hobbies.  Some are discussed in depth in the menus above and for those that aren't this page covers them.`;
</script>

<PageTitleBlock
	title={navItem.title}
	metaDescription="All about my outside of work hobbies and interests."
	markdown={pageDescription}
/>

<PageToc
	item={navItem}
	contents={[
		{ title: 'Faith', url: url + '#faith' },
		{ title: 'Photography', url: url + '#photography' },
		{ title: 'Hiking', url: url + '#hiking' }
	]}
/>

<span class=" flex flex-col gap-4 pb-4">
	<Heading id="faith" tag="h4">Faith</Heading>

	<P>
		A critically important of mine and my family's life is our faith. My wife and I are members of <A
			href="https://www.woodlandbaptist.org/">Woodland Baptist church</A
		> in Waynesville North Carolina.
	</P>

	<P>
		She serves on a rotation in the church nursery during Sunday morning services on occasion and I
		help lead the youth group on Wednesday nights including mentoring, serving, and occasionally
		teaching from the Bible.
	</P>

	<P>
		I also meet weekly with a group of older men and we share what's going on in our lives and have
		a brief devotion that is on a rotation.
	</P>

	<P>
		We both also contribute both financially and with service to a number of causes in our local
		community and elsewhere.
	</P>

	<Heading id="photography" tag="h4">Photography</Heading>

	<P>
		Photography has been an important part of my life for a very long time. My dad had been a
		serious nature photographer prior to my birth and it felt a bit like I was continuing that
		tradition.
	</P>

	<P>
		I am still very much an amateur and have up to this point (December 2023) only been paid for a
		single photo shoot. I have a personal preference towards nature and landscape photography but if
		my wife is willing to help me organize people I do photo shoots for families and friends.
	</P>

	<div class="gap-4 flex flex-row flex-wrap">
		<PopupImage
			src={CharlestonBeach1Small}
			fullSrc={CharlestonBeach1}
			tooltip="A foggy morning on Folly Island beach in South Carolina"
		/>
		<PopupImage
			src={SterlingSnowSmall}
			fullSrc={SterlingSnow}
			tooltip="Our dog Sterling hanging out on a snowy day in Clayton Georgia"
		/>
		<PopupImage
			src={SeaOatsSunsetSmall}
			fullSrc={SeaOatsSunset}
			tooltip="Sea Oats on Hatteras island at sunset"
		/>
		<PopupImage
			src={SunsetSoundSmall}
			fullSrc={SunsetSound}
			imgSize="h-32"
			tooltip="The sun setting over the sound on Hatteras island"
		/>
		<PopupImage
			src={SunriseHatterasSmall}
			fullSrc={SunriseHatteras}
			tooltip="Sunrise from a beach on Hatteras island"
		/>
		<PopupImage
			src={BumbleBeeSmall}
			fullSrc={BumbleBee}
			tooltip="A bumble bee enjoying a spring flower in Clayton Georgia"
		/>
		<PopupImage
			src={SnowFlowerClaytonSmall}
			fullSrc={SnowFlowerClayton}
			tooltip="A spring snow covers a spring flower in Clayton Georgia"
		/>
		<PopupImage
			src={SnowWaynesvilleSmall}
			fullSrc={SnowWaynesville}
			tooltip="A snowy Christmas morning in Waynesville North Carolina"
		/>
	</div>

	<P>
		The worst part of being the dedicated family photographer? There's a lot fewer pictures of me
		than everyone else...
	</P>

	<P>
		As this question seems to come up pretty regularly, here's the equipment I've been using for the
		last few years.
	</P>

	<List tag="ul">
		<Li
			><A href="https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d7500.html"
				>Nikon D7500</A
			></Li
		>
		<Li
			><A
				href="https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/normal/af-s_dx_35mmf_18g/"
				>Nikon AF-S DX Nikkor 35mm f/1.8G</A
			></Li
		>
		<Li
			><A href="https://www.tamron.com/global/consumer/lenses/b016/"
				>Tamron AF 16-300mm f/3.5-6.3 Di II VC PZD</A
			></Li
		>
		<Li
			><A href="https://www.tamron-usa.com/product/lenses/a035.html">Tamron 100-400mm f/4.5-6.3</A
			></Li
		>
	</List>

	<Heading id="hiking" tag="h4">Hiking</Heading>

	<P>
		I live in the mountains of western North Carolina, definitely one of the most beautiful places
		in the country for hiking. I'm not able to take advantage of it nearly as much as I would like,
		but when I can, I do my best to get out into the woods.
	</P>

	<P>
		I even proposed to my wife Megan on the trails at <A
			href="https://ashevilletrails.com/blue-ridge-parkway/graveyard-fields-trail-waterfalls/"
			>Graveyard fields</A
		> off of the <A href="https://www.blueridgeparkway.org/">Blue Ridge Parkway</A>.
	</P>

	<P>Some of my favorite photos from hiking trips:</P>

	<div class="gap-4 flex flex-row flex-wrap">
		<PopupImage
			src={ChatoogaRiverSmall}
			fullSrc={ChatoogaRiver}
			tooltip="A foggy day on the Chatooga River near Clayton Georgia"
		/>
		<PopupImage
			src={ElkSmall}
			fullSrc={Elk}
			imgSize="h-32"
			tooltip="A bull elk we spotted while hiking through the Cataloochee valley"
		/>
		<PopupImage
			src={MaxPatchAscentSmall}
			fullSrc={MaxPatchAscent}
			tooltip="The ascent up to the peak of Max Patch in western NC"
		/>
		<PopupImage
			src={MaxPatchTopSmall}
			fullSrc={MaxPatchTop}
			tooltip="The view from the top of Max Patch in western NC"
		/>
	</div>

	<P>
		When spring rolls around I hope to rejoin a group of retired men who go hiking every Tuesday.
		Not every Tuesday but definitely some Tuesdays.
	</P>
</span>
