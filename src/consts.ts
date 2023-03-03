export const SITE = {
	title: 'NGU Idle Guide',
	description: 'A guide for NGU Idle, an incremental game by 4G',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '/ngu-guide/favicon.jpg',
		alt:
			'NGU Idle logo',
	}
};

export const COMMUNITY_INVITE_URL = `https://discordapp.com/invite/5revMxD`;

export type Sidebar = Record<string, { text: string; link: string }[]>;

export const SIDEBAR: Sidebar = {
	'Navigation': [
		{ text: 'Introduction', link: '/ngu-guide/intro' },
		{ text: 'Quick Guide', link: 'ngu-guide/quick-guide' },
		{ text: 'Glossary', link: 'ngu-guide/glossary' },
	],
	'Chapters': [
		{ text: '1: Start-HSB', link: 'ngu-guide/chapters/chapter-1' },
		{ text: '2: T1-Mega', link: 'ngu-guide/chapters/chapter-2' },
		{ text: '3: T4-BAE', link: 'ngu-guide/chapters/chapter-3' },
		{ text: '4: T6', link: 'ngu-guide/chapters/chapter-4' },
		{ text: '5: Evil-IDP', link: 'ngu-guide/chapters/chapter-5' },
		{ text: '6: T8-JRPG', link: 'ngu-guide/chapters/chapter-6' },
		{ text: '7: T9', link: 'ngu-guide/chapters/chapter-7' },
		{ text: '8: Sadistic', link: 'ngu-guide/chapters/chapter-8' },
	],
	'Mechanics': [
		{ text: 'General Info', link: 'ngu-guide/mechanics/general-info' },
		{ text: 'Basic Training', link: 'ngu-guide/mechanics/basic-training' },
		{ text: 'Fight Boss', link: 'ngu-guide/mechanics/fight-boss' },
		{ text: 'Money Pit', link: 'ngu-guide/mechanics/money-pit' },
		{ text: 'Adventure Mode', link: 'ngu-guide/mechanics/adventure' },
		{ text: 'Inventory', link: 'ngu-guide/mechanics/inventory' },
		{ text: 'Augmentation', link: 'ngu-guide/mechanics/augmentation' },
		{ text: 'Advanced Training', link: 'ngu-guide/mechanics/advanced-training' },
		{ text: 'Time Machine', link: 'ngu-guide/mechanics/time-machine' },
		{ text: 'Blood Magic', link: 'ngu-guide/mechanics/blood-magic' },
		{ text: 'Wandoos', link: 'ngu-guide/mechanics/wandoos' },
		{ text: 'Challenges', link: 'ngu-guide/mechanics/challenges' },
		{ text: 'NGU', link: 'ngu-guide/mechanics/ngu' },
		{ text: 'Yggdrasil', link: 'ngu-guide/mechanics/yggdrasil' },
		{ text: 'Gold Diggers', link: 'ngu-guide/mechanics/gold-diggers' },
		{ text: 'Beards', link: 'ngu-guide/mechanics/beards' },
		{ text: 'MacGuffins', link: 'ngu-guide/mechanics/macguffins' },
		{ text: 'Questing', link: 'ngu-guide/mechanics/questing' },
		{ text: 'Hacks', link: 'ngu-guide/mechanics/hacks' },
		{ text: 'Wishes', link: 'ngu-guide/mechanics/wishes' },
		{ text: 'Cards', link: 'ngu-guide/mechanics/cards' },
		{ text: 'Cooking', link: 'ngu-guide/mechanics/cooking' },
	],
	'Guides': [
		{ text: 'Gear Optimizer (GO)', link: 'ngu-guide/guides/go-guide' },
		{ text: 'Hackday Prep', link: 'ngu-guide/guides/hackday' },
	],
	'Reference Lists': [
		{ text: 'Boss Fight Unlocks', link: 'ngu-guide/lists/boss-list' },
		{ text: 'Adventure Zones', link: 'ngu-guide/lists/zone-list' },
		{ text: 'Titans', link: 'ngu-guide/lists/titan-list' },
		{ text: 'MacGuffins', link: 'ngu-guide/lists/macguffin-list' },
		{ text: 'Known Bugs', link: 'ngu-guide/lists/bug-list' },
	],
	'Secrets & Spoilers': [
		{ text: 'Flubber', link: 'ngu-guide/spoilers/flubber' },
		{ text: 'T4 Puzzle', link: 'ngu-guide/spoilers/t4-puzzle' },
		{ text: 'T5 Fight', link: 'ngu-guide/spoilers/t5-fight' },
		{ text: 'T6 Puzzle', link: 'ngu-guide/spoilers/t6-puzzle' },
		{ text: 'T7 Puzzle', link: 'ngu-guide/spoilers/t7-puzzle' },
		{ text: 'T8 Puzzle', link: 'ngu-guide/spoilers/t8-puzzle' },
		{ text: 'T9 Puzzle', link: 'ngu-guide/spoilers/t9-puzzle' },
		{ text: 'T10 Puzzle', link: 'ngu-guide/spoilers/t10-puzzle' },
		{ text: 'T11 Puzzle', link: 'ngu-guide/spoilers/t11-puzzle' },
		{ text: 'T12 Puzzle', link: 'ngu-guide/spoilers/t12-puzzle' },
		{ text: 'THE END', link: 'ngu-guide/spoilers/the-end' },
	]
};
