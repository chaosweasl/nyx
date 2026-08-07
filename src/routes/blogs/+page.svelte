<script lang="ts">
	import { IconArticle } from '@tabler/icons-svelte';
	import type { PostEntry } from '$lib/content/posts';
	import { formatDate } from '$utils/date';
	import PostTags from '$components/posts/PostTags.svelte';

	let { data }: { data: { blogs: PostEntry[] } } = $props();
</script>

<svelte:head>
	<meta name="description" content="Blog posts by Jason Cameron." />
</svelte:head>

<div class="space-y-8">
	<h1 class="mb-8 flex items-center gap-3 text-3xl font-bold">
		<IconArticle size={30} class="text-accent" />
		<span>Blogs</span>
	</h1>

	{#if data.blogs.length > 0}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each data.blogs as post (post.slug)}
				<a
					href={`/blogs/${post.slug}`}
					class="border-surface0 bg-base hover:border-accent group block space-y-3 rounded-xl border p-5 shadow-lg transition-colors duration-200"
				>
					{#if post.metadata.image}
						<div class="overflow-hidden rounded-md">
							<img
								src={post.metadata.image.url}
								alt={post.metadata.image.alt}
								class="aspect-video w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
								style:view-transition-name="blog-img-{post.slug}"
							/>
						</div>
					{:else}
						<div
							class="bg-surface2 flex aspect-video w-full items-center justify-center rounded-md"
						>
							<IconArticle size={32} class="text-overlay1" />
						</div>
					{/if}
					<div class="flex items-center justify-between gap-3 pe-3">
						<h2
							class="text-text group-hover:text-accent min-w-0 flex-1 truncate text-xl font-semibold"
							style:view-transition-name="blog-title-{post.slug}"
						>
							{post.metadata.title.text}
						</h2>
						{#if post.metadata.published_at}
							<p class="text-overlay1 flex-shrink-0 text-xs whitespace-nowrap">
								{formatDate(post.metadata.published_at)}
							</p>
						{/if}
					</div>
					<p class="text-subtext0 line-clamp-3 text-sm">{post.metadata.description}</p>

					<PostTags {post} />
				</a>
			{/each}
		</div>
	{:else}
		<p class="text-subtext1">No blog posts published yet.</p>
	{/if}
</div>
