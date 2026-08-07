<script lang="ts">
	import {
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail,
		IconDog,
		IconStar
	} from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
	import AnchorHeader from '$lib/components/AnchorHeader.svelte';

	const handleEmailClick = () => {
		const email = atob('Y29udGFjdEA=') + window.location.hostname;
		window.location.href = `mailto:${email}`;
	};

	type str = string;
	type num = number;
</script>

<svelte:head>
	<title>About Me | Jason Cameron</title>
</svelte:head>

{#snippet ExternalLink(href: str, text: str)}
	<a {href} target="_blank" rel="noopener noreferrer" class="link">
		{text}
	</a>
{/snippet}

{#snippet GithubProject(title: str, href: str, stars: num)}
	<a {href} id={title.toLowerCase()} target="_blank" rel="noopener noreferrer" class="link">
		{title}
	</a>

	<span class="inline-flex items-center space-x-1 text-sm">
		{stars}
		<IconStar class="ml-1" size={14} />
	</span>
{/snippet}

<div class="mx-auto max-w-6xl space-y-8 px-4 py-8 md:px-6">
	<!-- About Me Section -->
	<section class="space-y-6">
		<h1 class="flex items-center gap-3 text-3xl font-bold md:text-4xl">
			<span>About Me</span>
		</h1>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="md:col-span-1">
				<img
					src="/images/avatar.webp"
					alt="Jason Cameron"
					class="h-full w-full rounded-md object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
				/>
			</div>

			<div class="space-y-4 md:col-span-2">
				<p class="text-subtext0 text-base leading-relaxed">
					<b>Hey!</b> I'm Jason Cameron <a class="link" href="/socials">(@JasonLovesDoggo)</a> — a
					Senior Software Engineer at Stan based out of Toronto, Canada. I like to make
					<a href="/projects" class="link">cool projects</a>
					when i'm bored.
				</p>

				<p class="text-subtext0 text-base leading-relaxed">
					Some of my more notable projects include {@render GithubProject(
						'RedditVideoMakerBot',
						'https://github.com/elebumm/RedditVideoMakerBot',
						11923
					)}, where I reverse engineered TikTok's TTS API, and
					{@render GithubProject('Anubis', '/projects/anubis', 19310)}, an anti-scraper tool
					currently protecting infrastructure at The Linux Foundation and the UN. My work focuses on
					backend development and system architecture. I maintain several services including
					{@render ExternalLink('https://maclyonsden.com/', 'metropolis')},
					{@render ExternalLink('https://ctf.mcpt.ca', 'mCTF')},
					{@render ExternalLink('https://mcpt.ca', 'MCPT')}, and {@render ExternalLink(
						'https://jasoncameron.dev/foodle/',
						'Foodle'
					)}.
				</p>

				<p class="text-subtext0 text-base leading-relaxed">
					Outside of software, I enjoy playing Ultimate frisbee, <a href="/pics" class="link"
						>photography</a
					>, organizing/participating at/mentoring hackathons and spending time with my dog, Bella (<a
						href="#bella"
						class="link">see below</a
					>). I also have a passion for exploring the world in general! Feel free to
					<button onclick={handleEmailClick} class="link cursor-pointer">shoot me an email</button> if
					you'd like to chat.
				</p>

				<div class="flex flex-wrap gap-3 pt-2">
					<a
						href={Site.out.github}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
					>
						<IconBrandGithub size={16} />
						GitHub
					</a>

					<span class="text-surface1">*</span>

					<a
						href={Site.out.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
					>
						<IconBrandLinkedin size={16} />
						LinkedIn
					</a>

					<span class="text-surface1">*</span>
					<span
						role="button"
						aria-label="Send an email to contact"
						class="hover:text-accent inline-flex cursor-pointer items-center gap-1.5 text-sm transition-colors"
						tabindex="0"
						onclick={handleEmailClick}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								handleEmailClick();
							}
						}}
					>
						<IconMail size={16} />
						contact[at][thisdomain]
					</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Hobbies Section -->
	<section id="hobbies-section" class="space-y-8">
		<!-- What I Do -->
		<div class="bg-base rounded-lg p-6 transition-all duration-300">
			<AnchorHeader
				level="h3"
				id="what-i-do"
				class="mb-5 flex items-center gap-2 text-xl font-semibold"
			>
				<IconStar size={24} class="text-accent" />
				What I Do
			</AnchorHeader>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<ul class="text-subtext0 list-disc space-y-2 pl-5 text-base leading-relaxed">
					<li>Backend & systems engineering with Go, Python, and Rust</li>
					<li>Building AI-powered products that scale to millions</li>
					<li>Open-source maintainer (Anubis, RedditVideoMakerBot)</li>
					<li>CTF & hackathon organizer and mentor</li>
				</ul>
				<ul class="text-subtext0 list-disc space-y-2 pl-5 text-base leading-relaxed">
					<li>Cloud infrastructure & DevOps on AWS</li>
					<li>Reverse engineering and security research</li>
					<li>Ultimate frisbee, photography, and exploring</li>
					<li>Spending time with my dog, Bella</li>
				</ul>
			</div>
		</div>

		<!-- My Dog -->
		<div class="bg-base rounded-lg p-6 transition-all duration-300">
			<AnchorHeader
				level="h3"
				id="bella"
				class="mb-5 flex items-center gap-2 text-xl font-semibold"
			>
				<IconDog size={24} class="text-accent" />
				My Dog (Bella!)
			</AnchorHeader>

			<div class="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
				<img
					src="/images/bella/bella-autumn-2022.webp"
					alt="A landscape of Bella in the autumn by a pond"
					class="h-40 w-full rounded-md object-cover shadow-sm transition-transform duration-300 hover:scale-[1.03]"
				/>
				<img
					src="/images/bella/bella-portrait-2022.webp"
					alt="Portrait of Bella taken playing with a tennis ball"
					class="h-40 w-full rounded-md object-cover shadow-sm transition-transform duration-300 hover:scale-[1.03]"
				/>
				<img
					src="/images/bella/bella-portrait-2024.webp"
					alt="Landscape of Bella lying next to a stick looking at the sky"
					class="h-40 w-full rounded-md object-cover shadow-sm transition-transform duration-300 hover:scale-[1.03]"
				/>
			</div>
		</div>
	</section>
</div>

<style>
	:global(html) {
		scroll-padding-top: 5rem;
	}
</style>
