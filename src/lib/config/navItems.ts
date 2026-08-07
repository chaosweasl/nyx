import type { Icon } from '@tabler/icons-svelte';

interface NavItem {
	title: string;
	href: string;
	icon?: Icon;
	external?: boolean;
}

export const mainNavItems: NavItem[] = [
	{ title: 'About', href: '/about' },
	{ title: 'Blogs', href: '/blogs' },
	{ title: 'Projects', href: '/projects' },
	{ title: 'Pics', href: '/pics' }
];

export const moreNavItems: NavItem[] = [
	{ title: 'Resume', href: '/resume.pdf', external: true }
];
