<!-- metadata
title: Back in my Day
id: 11DE95A1-7BE0-4EEC-A75B-70C3FE911A4F
posted: 4/15/2024
lastModified: 4/15/2024
summary: Some of my earliest programming projects.
tags: [C, C++, "High School", School]
-->

<!--
	@component
	component for the "Back in my Day" blog post.
-->

<script>
	import { A, Blockquote, Li } from 'flowbite-svelte';

	import ContentParagraph from '$lib/components/ContentParagraph.svelte';
</script>

<ContentParagraph>
	I've been programming for a while now; going back all the way to 2005. I've spent some time
	looking back and writing up some details about my <A href="/software_projects/school/high_school"
		>earliest programming projects</A
	>.
</ContentParagraph>

<ContentParagraph>Amazingly I have binaries for some of them that still run.</ContentParagraph>

<ContentParagraph>
	It was quite an experience looking over some of my old code and giving the old applications a run.
	Very nostalgic, but also a bit frustrating. It brings to mind a particular running joke in
	software development:
</ContentParagraph>

<Blockquote border bg class="p-4 mb-4">
	there is an ongoing joke that the worst code you ever wrote is the code you wrote six months ago.<br
	/>
	<A
		href="https://www.bennadel.com/blog/3013-the-worst-code-i-ever-wrote-was-the-code-i-wrote-six-months-ago.htm"
		>Ben Nadel's blog</A
	>
</Blockquote>

<ContentParagraph>
	And I wrote this code many, <em>many</em> months ago. So many that it honestly may as well have been
	written by someone else. But it's got my name on it, and in spite of everything I do recognize some
	of myself in it.
</ContentParagraph>

<ContentParagraph>
	Less so in the code itself and more in the readme for one of my earliest applications (from the <A
		href="http://localhost:5173/software_projects/school/high_school#chaser"
		>Tank Chaser windows binary zip</A
	> on the <A href="/software_projects/school/high_school">high school projects page</A>):
</ContentParagraph>

<Blockquote border bg class="whitespace-break-spaces p-4 mb-4">
Tank Chaser Release 1 Readme

Your country's enemies are preparing to launch a nuclear attack on your homeland! you must stop them!  The enemy's silos are buried in the ground and even your tank's mighty cannon can not harm them.  You must drive over the silos and deploy your troops to stop them from launching.  Beware, though, the enemy has many silos and you must keep on your toes in order to stop them.

Controls-
	Arrow keys - control tank movement and menu selections.
	Enter - make menu selections.
	Space - restarts the program after you have won.
	Escape - Returns to the main menu, no matter where you are.

Game Info-
	There are 2 game types, TO 10 and Time attack.
	In To 10, you are required to stop 10 missles from launching as quickly as possible.
	In Time Attack, you are required to stop as many missles from launching as possible within 45 seconds.

Log- Sept. 29, 2005

-Implemented Time Attack
-Fixed main game loop, all keys are game now.
-Added boxes for the timer in time attack and victory boxes.

Log- Sept. 28, 2005

- Added collision detection to prevent you from driving off the screen.
- Nothing but a single datafile for the graphics, which is much easier to handle.
- Lots of little things, ESC now works.

Log- Sept. 27, 2005

-This program and its source is yours to do what you wish with it. Just give credit where its due.

To Do-
	-only the desert and rusty backgrounds work.
	-time attack needs to be implemented.
	-datafiles need to be looked into further.
	-some kind of high score system.

Owen Shelton, September 2005 
</Blockquote>

<ContentParagraph>
	What do I see here but some of the earliest beginnings of documentation and Project Planning and
	management, and I appreciate that even back then I was starting to think of that kind fo stuff.
</ContentParagraph>

<ContentParagraph>
	This was an amazing trip down memory lane, and finding that some of my oldest projects still <em
		>run</em
	> (for certain definitions of the word) was a lot of fun.
</ContentParagraph>
