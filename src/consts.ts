export const SITE = {
	title: 'NGU Idle Guide',
	description: 'A guide for NGU Idle, an incremental game by 4G',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const COMMUNITY_INVITE_URL = `https://discordapp.com/invite/5revMxD`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Introduction', link: 'en/intro' },
			{ text: 'Quick Guide', link: 'en/quick-guide' },
			{ text: 'Glossary', link: 'en/glossary' },
		],
		'Chapters': [
			{ text: '1: start-hsb', link: 'en/chapter-1' },
			{ text: '2: T1-mega', link: 'en/chapter-2' },
			{ text: '3: T4-bae', link: 'en/chapter-3' },
			{ text: '4: T4-bae', link: 'en/chapter-4' },
			{ text: '5: T4-bae', link: 'en/chapter-5' },
			{ text: '6: T4-bae', link: 'en/chapter-3' },
			{ text: '7: T4-bae', link: 'en/chapter-3' },
			{ text: '8: T4-bae', link: 'en/chapter-3' },
		],
		'Mechanics': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
