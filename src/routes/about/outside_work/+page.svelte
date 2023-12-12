<script>
	import { A, Alert, Heading, P, List, Li } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';

	import PageTitleBlock from '$lib/components/PageTitleBlock.svelte';
	import PopupImage from '$lib/components/PopupImage.svelte';

	import CharlestonBeach1 from '$lib/images/outside_of_work/photography/charleston_beach_1.webp';
	import SterlingSnow from '$lib/images/outside_of_work/photography/sterling_snow.webp';
	import SeaOatsSunset from '$lib/images/outside_of_work/photography/sea_oats_sunset.webp';
	import SunsetSound from '$lib/images/outside_of_work/photography/sunset_sound.webp';
	import SunriseHatteras from '$lib/images/outside_of_work/photography/sunrise_hatteras.webp';
	import BumbleBee from '$lib/images/outside_of_work/photography/bumble_bee_flower.webp';
	import SnowFlowerClayton from '$lib/images/outside_of_work/photography/snow_flower_clayton.webp';
	import SnowWaynesville from '$lib/images/outside_of_work/photography/snow_waynesville.webp';

	import ChatoogaRiver from '$lib/images/outside_of_work/hiking/chatooga_river.webp';
	import Elk from '$lib/images/outside_of_work/hiking/elk.webp';
	import MaxPatchAscent from '$lib/images/outside_of_work/hiking/max_patch_ascent.webp';
	import MaxPatchTop from '$lib/images/outside_of_work/hiking/max_patch_top.webp';
</script>

<PageTitleBlock url={$page.url.pathname} />

<span class=" flex flex-col gap-4 pb-4">
	<Heading tag="h4">Photography</Heading>

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
			src={CharlestonBeach1}
			tooltip="A foggy morning on Folly Island beach in South Carolina"
		/>
		<PopupImage
			src={SterlingSnow}
			tooltip="Our dog Sterling hanging out on a snowy day in Clayton Georgia"
		/>
		<PopupImage src={SeaOatsSunset} tooltip="Sea Oats on Hatteras island at sunset" />
		<PopupImage
			src={SunsetSound}
			imgSize="h-32"
			tooltip="The sun setting over the sound on Hatteras island"
		/>
		<PopupImage src={SunriseHatteras} tooltip="Sunrise from a beach on Hatteras island" />
		<PopupImage
			src={BumbleBee}
			tooltip="A bumble bee enjoying a spring flower in Clayton Georgia"
		/>
		<PopupImage
			src={SnowFlowerClayton}
			tooltip="A spring snow covers a spring flower in Clayton Georgia"
		/>
		<PopupImage
			src={SnowWaynesville}
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

	<Heading tag="h4">Hiking</Heading>

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
			src={ChatoogaRiver}
			tooltip="A foggy day on the Chatooga River near Clayton Georgia"
		/>
		<PopupImage
			src={Elk}
			imgSize="h-32"
			tooltip="A bull elk we spotted while hiking through the Cataloochee valley"
		/>
		<PopupImage
			src={MaxPatchAscent}
			tooltip="The ascent up to the peak of Max Patch in western NC"
		/>
		<PopupImage src={MaxPatchTop} tooltip="The view from the top of Max Patch in western NC" />
	</div>

	<P>
		When spring rolls around I hope to rejoin a group of retired men who go hiking every Tuesday.
		Not every Tuesday but definitely some Tuesdays.
	</P>
</span>
