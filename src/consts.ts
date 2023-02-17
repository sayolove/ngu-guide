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
			{ text: '1: Start-HSB', link: 'en/chapters/chapter-1' },
			{ text: '2: T1-Mega', link: 'en/chapters/chapter-2' },
			{ text: '3: T4-BAE', link: 'en/chapters/chapter-3' },
			{ text: '4: T6', link: 'en/chapters/chapter-4' },
			{ text: '5: Evil-IDP', link: 'en/chapters/chapter-5' },
			{ text: '6: T8-JRPG', link: 'en/chapters/chapter-6' },
			{ text: '7: T9', link: 'en/chapters/chapter-7' },
			{ text: '8: Sadistic', link: 'en/chapters/chapter-8' },
		],
		'Mechanics': [
			{ text: 'General Info', link: 'en/mechanics/general-info' },
			{ text: 'Basic Training', link: 'en/mechanics/basic-training' },
			{ text: 'Fight Boss', link: 'en/mechanics/fight-boss' },
			{ text: 'Money Pit', link: 'en/mechanics/money-pit' },
			{ text: 'Adventure Mode', link: 'en/mechanics/adventure' },
			{ text: 'Inventory', link: 'en/mechanics/inventory' },
			{ text: 'Augmentation', link: 'en/mechanics/augmentation' },
			{ text: 'Advanced Training', link: 'en/mechanics/advanced-training' },
			{ text: 'Time Machine', link: 'en/mechanics/time-machine' },
			{ text: 'Blood Magic', link: 'en/mechanics/blood-magic' },
			{ text: 'Wandoos', link: 'en/mechanics/wandoos' },
			{ text: 'Challenges', link: 'en/mechanics/challenges' },
			{ text: 'NGU', link: 'en/mechanics/ngu' },
			{ text: 'Yggdrasil', link: 'en/mechanics/yggdrasil' },
			{ text: 'Gold Diggers', link: 'en/mechanics/gold-diggers' },
			{ text: 'Beards', link: 'en/mechanics/beards' },
			{ text: 'MacGuffins', link: 'en/mechanics/macguffins' },
			{ text: 'Questing', link: 'en/mechanics/questing' },
			{ text: 'Hacks', link: 'en/mechanics/hacks' },
			{ text: 'Wishes', link: 'en/mechanics/wishes' },
			{ text: 'Cards', link: 'en/mechanics/cards' },
			{ text: 'Cooking', link: 'en/mechanics/cooking' },
		],
		'Guides': [
			{ text: 'Gear Optimizer (GO)', link: 'en/guides/go-guide' },
			{ text: 'Hackday Prep', link: 'en/guides/hackday' },
		],
		'Reference Lists': [
			{ text: 'Boss Fight Unlocks', link: 'en/lists/boss-list' },
			{ text: 'Adventure Zones', link: 'en/lists/zone-list' },
			{ text: 'Titans', link: 'en/lists/titan-list' },
			{ text: 'MacGuffins', link: 'en/lists/macguffin-list' },
			{ text: 'Known Bugs', link: 'en/lists/bug-list' },
		],
		'Secrets & Spoilers': [
			{ text: 'Flubber', link: 'en/spoilers/flubber' },
			{ text: 'T4 Puzzle', link: 'en/spoilers/t4-puzzle' },
			{ text: 'T5 Fight', link: 'en/spoilers/t5-fight' },
			{ text: 'T6 Puzzle', link: 'en/spoilers/t6-puzzle' },
			{ text: 'T7 Puzzle', link: 'en/spoilers/t7-puzzle' },
			{ text: 'T8 Puzzle', link: 'en/spoilers/t8-puzzle' },
			{ text: 'T9 Puzzle', link: 'en/spoilers/t9-puzzle' },
			{ text: 'T10 Puzzle', link: 'en/spoilers/t10-puzzle' },
			{ text: 'T11 Puzzle', link: 'en/spoilers/t11-puzzle' },
			{ text: 'T12 Puzzle', link: 'en/spoilers/t12-puzzle' },
			{ text: 'THE END', link: 'en/spoilers/the-end' },
		]
	},
};
