<script lang="ts">
	import LinkWithIcon from '$components/LinkWithIcon.svelte';
	import Featured, { type FeaturedProject } from '$components/layout/Featured.svelte';
	import {
		IconArrowRight,
		IconExternalLink,
		IconArticle,
		IconMail,
		IconActivity
	} from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
	import { Home } from '$lib/config/pages';
	import ThemeSelector from '$components/themes/ThemeSelector.svelte';
	import ColorSelector from '$components/themes/ColorSelector.svelte';
	import Experience from '$components/Experience.svelte';
	import LocationMap from '$components/bento/LocationMap.svelte';
	import TimeWaster from '$components/bento/TimeWaster.svelte';
	import { formatDate } from '$utils/date';
	import type { CommitData } from '$lib/api/commits';

	type PageData = {
		featuredProjects: FeaturedProject[];
		commitData: CommitData;
		latestPosts: {
			slug: string;
			metadata: { title: { text: string; config?: string }; published_at: string };
		}[];
	};

	let { data }: { data: PageData } = $props();
	const langTotal = $derived((data.commitData?.languages || []).reduce((a, l) => a + l.size, 0));
</script>

<div class="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
	<!-- Section 1: Hero / Introduction — mxb-inspired -->
	<section class="space-y-5 px-4 md:px-0">
		<p class="text-subtext0 text-base">
			<a href="/about" class="link">Hey, I'm Jason Cameron</a>
		</p>
		<h1 class="text-4xl font-bold md:text-5xl">
			I build software<span class="text-accent">.</span>
		</h1>
		<p class="text-subtext0 max-w-prose text-lg leading-relaxed">
			I'm a Senior Software Engineer at
			<a class="link" target="_blank" rel="noopener" href="https://stan.store">Stan</a>,
			building AI that helps people articulate their ideas. My work has been trusted by
			<a class="link" target="_blank" rel="noopener" href="https://policytoolbox.iiep.unesco.org">The United Nations</a>,
			<a class="link" target="_blank" rel="noopener" href="https://git.kernel.org">The Linux Foundation</a>,
			<a class="link" target="_blank" rel="noopener" href="https://wiki.archlinux.org">Arch Linux</a>,
			<a class="link" target="_blank" rel="noopener" href="https://gitlab.gnome.org">GNOME</a>,
			<a class="link" href="/projects/anubis#valve">Valve</a>,
			<a class="link" target="_blank" rel="noopener" href="https://trac.ffmpeg.org">FFmpeg</a>,
			and many others<a href="/projects/anubis" class="hover:text-accent ml-0.5 align-super text-xs font-semibold">[1]</a>.
		</p>
		<div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
			{#each Home.socialLinks as link (link.href)}
				<LinkWithIcon
					href={link.href}
					text={link.text}
					icon={link.icon}
					external={true}
					class="text-sm"
				/>
				{#if link !== Home.socialLinks[Home.socialLinks.length - 1]}
					<span class="text-surface1 text-xs">|</span>
				{/if}
			{/each}
			<span class="text-surface1 text-xs">|</span>
			<a
				href="/about"
				class="group text-subtext1 hover:text-accent inline-flex items-center gap-1 text-sm transition-colors duration-200"
			>
				<span>More about me</span>
				<IconArrowRight
					size={16}
					class="transition-transform duration-200 group-hover:translate-x-0.5"
				/>
			</a>
		</div>
	</section>

	<!-- Section: Minimal Experience Row -->
	<Experience />

	<!-- Section: Featured Projects -->
	<Featured projects={data.featuredProjects} maxProjects={2} />

	<!-- Section: Bento Grid Container -->
	<section class="px-4 md:px-0">
		<h2 class="sr-only">Dashboard / Highlights</h2>
		<div class="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
			<!-- Box 1: Theme Selector -->
			<div
				class="border-surface0 bg-base rounded-xl border p-4 shadow-lg sm:col-span-2 xl:col-span-1"
			>
				<ThemeSelector />
				<ColorSelector />
			</div>

			<!-- Box 2: Email me -->
			<div class="border-surface0 bg-base rounded-xl border p-4 shadow-lg lg:col-span-1">
				<h3 class="text-text mb-3 flex items-center gap-2 text-sm font-semibold">
					<IconMail size={16} class="text-accent" />
					Get in Touch
				</h3>
				<p class="text-subtext0 mb-4 text-sm">
					Always open to interesting projects and conversations.
				</p>
				<a
					href="mailto:{Site.out.email}"
					class="bg-accent/80 focus:ring-accent/50 focus:ring-offset-base inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base text-sm font-medium shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
				>
					<IconMail size={16} />
					Send an Email
				</a>
			</div>

			<!-- Box 3: Location Map -->
			<LocationMap />

			<!-- Box 4: Time Waster -->
			<TimeWaster />

			<!-- Box 5: Latest Commits -->
			<div class="border-surface0 bg-base rounded-xl border p-4 shadow-lg md:col-span-2">
				<div class="text-text mb-3 flex items-center justify-between gap-2 text-sm">
					<h3 class="flex items-center gap-2 font-semibold">
						<IconActivity size={16} class="text-accent" />
						<span>Recent Commits</span>
					</h3>
					<a
						href="https://katib.jsn.cam"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="See how this is calculated Katib"
						class="text-accent/80 hover:text-accent text-xs font-medium transition-colors"
					>
						[info]
					</a>
				</div>
				{#if data.commitData?.commits?.length > 0}
					<ul class="space-y-1.5 text-sm">
						{#each data.commitData.commits.slice(0, 4) as commit (commit.sha)}
							<li>
								<a
									href={commit.href}
									target="_blank"
									rel="noopener noreferrer"
									class="text-subtext0 hover:text-accent flex min-w-0 items-center gap-2"
									title={`${commit.repo}: ${commit.message}`}
								>
									<span class="text-text flex-shrink-0 font-medium"
										>{commit.repo.split('/')[1]}:</span
									>
									<span class="min-w-0 flex-1 truncate">{commit.message}</span>
									{#if commit.additions !== undefined && commit.deletions !== undefined}
										<span class="flex-shrink-0 text-xs whitespace-nowrap">
											<span class="text-green">+{commit.additions}</span>
											<span class="text-surface1">/</span>
											<span class="text-red">-{commit.deletions}</span>
										</span>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-subtext1 text-sm italic">No recent public commits.</p>
				{/if}
				<div class="mt-3 flex items-center gap-3">
					<a
						href="https://github.com/jasonlovesdoggo"
						target="_blank"
						rel="noopener noreferrer"
						class="group text-accent inline-flex items-center gap-1 text-sm hover:underline"
					>
						<span>View on GitHub</span>
						<IconExternalLink
							size={14}
							class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
					{#if langTotal > 0}
						<div
							class="ml-auto max-w-xs flex-1 sm:max-w-sm md:max-w-md"
							aria-label="Language breakdown"
						>
							<div class="bg-surface2 h-2 w-full rounded-[3px]">
								<div class="flex h-full w-full">
									{#each data.commitData.languages as lang (lang.name)}
										<div
											class="group relative h-full first:rounded-l-[3px] last:rounded-r-[3px]"
											style={`width: clamp(8px, ${(lang.size / langTotal) * 100}%, ${(lang.size / langTotal) * 100}%); background-color: ${lang.color};`}
										>
											<!-- Tooltip -->
											<div
												class="border-surface1 bg-surface1 pointer-events-none absolute -top-7 left-1/2 z-10 -translate-x-1/2 rounded border px-2 py-0.5 text-xs whitespace-nowrap opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"
											>
												<span class="inline-flex items-center gap-2">
													<span
														class="inline-block h-2 w-2 rounded"
														style={`background-color: ${lang.color};`}
													></span>
													<span class="text-subtext0">{lang.name}</span>
													<span class="text-surface1">&bull;</span>
													<span class="text-subtext1"
														>{Math.round((lang.size / langTotal) * 100)}%</span
													>
												</span>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
			<!-- Box 6: Latest Blog Posts -->
			<div
				class="border-surface0 bg-base rounded-xl border p-4 shadow-lg sm:col-span-2 lg:col-span-2"
			>
				<div class="text-text mb-3 flex items-center justify-between gap-2 text-sm">
					<h3 class="flex items-center gap-2 font-semibold">
						<IconArticle size={14} class="text-accent" />
						<span>Latest Blogs</span>
					</h3>
					<a
						href="/blogs"
						aria-label="View all blogs"
						class=" text-accent/80 transition-transform duration-500 ease-in hover:translate-x-0.5 hover:-translate-y-0.5"
					>
						<IconExternalLink size={18} />
					</a>
				</div>

				{#if data.latestPosts.length > 0}
					<ul class="list-none space-y-2">
						{#each data.latestPosts as post (post.slug)}
							{@const words = post.metadata.title.text.split(' ')}
							{@const safePath = post.slug.split('/').pop() || post.slug}
							<li>
								<a
									href={'/blogs/' + post.slug}
									class="text-subtext0 hover:text-accent flex min-w-0 items-center gap-2 text-sm"
								>
									<span class="min-w-0 flex-1 truncate">
										{#each words as word, i (i)}
											{@const normalized = word.toLowerCase().replace(/[^a-z0-9\s-_]/g, '')}
											{@const vtName = `_${safePath}__${normalized}`}
											<span style="view-transition-name: {vtName};">
												{word}{i < words.length - 1 ? ' ' : ''}
											</span>
										{/each}
									</span>

									{#if post.metadata.published_at}
										<span class="text-surface1 mx-2 flex-shrink-0 text-xs">&ndash;</span>
										<span class="text-subtext1 flex-shrink-0 text-xs whitespace-nowrap">
											{formatDate(post.metadata.published_at, { shortMonth: true })}
										</span>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-subtext1 text-xs italic">No posts yet.</p>
				{/if}
			</div>
		</div>
	</section>
</div>
