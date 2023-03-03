export const SITE = {
	title: 'NGU Idle Guide',
	description: 'A guide for NGU Idle, an incremental game by 4G',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '/favicon.jpg',
		alt:
			'NGU Idle logo',
	}
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const COMMUNITY_INVITE_URL = `https://discordapp.com/invite/5revMxD`;

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Navigation': [
			{ text: 'Introduction', link: 'ngu-guide/en/intro' },
			{ text: 'Quick Guide', link: 'ngu-guide/en/quick-guide' },
			{ text: 'Glossary', link: 'ngu-guide/en/glossary' },
		],
		'Chapters': [
			{ text: '1: Start-HSB', link: 'ngu-guide/en/chapters/chapter-1' },
			{ text: '2: T1-Mega', link: 'ngu-guide/en/chapters/chapter-2' },
			{ text: '3: T4-BAE', link: 'ngu-guide/en/chapters/chapter-3' },
			{ text: '4: T6', link: 'ngu-guide/en/chapters/chapter-4' },
			{ text: '5: Evil-IDP', link: 'ngu-guide/en/chapters/chapter-5' },
			{ text: '6: T8-JRPG', link: 'ngu-guide/en/chapters/chapter-6' },
			{ text: '7: T9', link: 'ngu-guide/en/chapters/chapter-7' },
			{ text: '8: Sadistic', link: 'ngu-guide/en/chapters/chapter-8' },
		],
		'Mechanics': [
			{ text: 'General Info', link: 'ngu-guide/en/mechanics/general-info' },
			{ text: 'Basic Training', link: 'ngu-guide/en/mechanics/basic-training' },
			{ text: 'Fight Boss', link: 'ngu-guide/en/mechanics/fight-boss' },
			{ text: 'Money Pit', link: 'ngu-guide/en/mechanics/money-pit' },
			{ text: 'Adventure Mode', link: 'ngu-guide/en/mechanics/adventure' },
			{ text: 'Inventory', link: 'ngu-guide/en/mechanics/inventory' },
			{ text: 'Augmentation', link: 'ngu-guide/en/mechanics/augmentation' },
			{ text: 'Advanced Training', link: 'ngu-guide/en/mechanics/advanced-training' },
			{ text: 'Time Machine', link: 'ngu-guide/en/mechanics/time-machine' },
			{ text: 'Blood Magic', link: 'ngu-guide/en/mechanics/blood-magic' },
			{ text: 'Wandoos', link: 'ngu-guide/en/mechanics/wandoos' },
			{ text: 'Challenges', link: 'ngu-guide/en/mechanics/challenges' },
			{ text: 'NGU', link: 'ngu-guide/en/mechanics/ngu' },
			{ text: 'Yggdrasil', link: 'ngu-guide/en/mechanics/yggdrasil' },
			{ text: 'Gold Diggers', link: 'ngu-guide/en/mechanics/gold-diggers' },
			{ text: 'Beards', link: 'ngu-guide/en/mechanics/beards' },
			{ text: 'MacGuffins', link: 'ngu-guide/en/mechanics/macguffins' },
			{ text: 'Questing', link: 'ngu-guide/en/mechanics/questing' },
			{ text: 'Hacks', link: 'ngu-guide/en/mechanics/hacks' },
			{ text: 'Wishes', link: 'ngu-guide/en/mechanics/wishes' },
			{ text: 'Cards', link: 'ngu-guide/en/mechanics/cards' },
			{ text: 'Cooking', link: 'ngu-guide/en/mechanics/cooking' },
		],
		'Guides': [
			{ text: 'Gear Optimizer (GO)', link: 'ngu-guide/en/guides/go-guide' },
			{ text: 'Hackday Prep', link: 'ngu-guide/en/guides/hackday' },
		],
		'Reference Lists': [
			{ text: 'Boss Fight Unlocks', link: 'ngu-guide/en/lists/boss-list' },
			{ text: 'Adventure Zones', link: 'ngu-guide/en/lists/zone-list' },
			{ text: 'Titans', link: 'ngu-guide/en/lists/titan-list' },
			{ text: 'MacGuffins', link: 'ngu-guide/en/lists/macguffin-list' },
			{ text: 'Known Bugs', link: 'ngu-guide/en/lists/bug-list' },
		],
		'Secrets & Spoilers': [
			{ text: 'Flubber', link: 'ngu-guide/en/spoilers/flubber' },
			{ text: 'T4 Puzzle', link: 'ngu-guide/en/spoilers/t4-puzzle' },
			{ text: 'T5 Fight', link: 'ngu-guide/en/spoilers/t5-fight' },
			{ text: 'T6 Puzzle', link: 'ngu-guide/en/spoilers/t6-puzzle' },
			{ text: 'T7 Puzzle', link: 'ngu-guide/en/spoilers/t7-puzzle' },
			{ text: 'T8 Puzzle', link: 'ngu-guide/en/spoilers/t8-puzzle' },
			{ text: 'T9 Puzzle', link: 'ngu-guide/en/spoilers/t9-puzzle' },
			{ text: 'T10 Puzzle', link: 'ngu-guide/en/spoilers/t10-puzzle' },
			{ text: 'T11 Puzzle', link: 'ngu-guide/en/spoilers/t11-puzzle' },
			{ text: 'T12 Puzzle', link: 'ngu-guide/en/spoilers/t12-puzzle' },
			{ text: 'THE END', link: 'ngu-guide/en/spoilers/the-end' },
		]
	},
};
