
export interface HeroSectionData {
	title: string;
	description: string;
	link: {
		href: string;
		label: string;
	};
}

export const heroSectionData: HeroSectionData[] = [
	{
		title: 'Sandro Maisuradze Content Creation',
		description: 'Photo •  Video  •  Creative Direction',
		link: {
			href: '/about',
			label: 'Portfolio',
		},
	},
];
