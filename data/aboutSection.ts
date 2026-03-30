export interface AboutSectionData {
	eyebrow: string;
	title: string;
	description: string;
	quote: string;
	image: {
		src: string;
		alt: string;
	};
}

export const aboutSectionData: AboutSectionData[] = [
	{
		eyebrow: 'Photographer',
		title: 'ABOUT',
		description:
			`Sandro is a 20 year old photographer from Georgia. He started his career as a photographer full time. It has since left him fascinated with planning and telling stories. Both his photography and videography work have garnered international recognition from renowned brands and tourism boards across the globe.`,
		quote:
			`Naturally, travel is a big part of my job and I love sharing my experiences with a likeminded audience on Instagram. I believe that we often get sucked into daily life business, forgetting that around us is a big and beautiful world full of fascinating and exciting things to discover each and every day. Travel is a reminder that there is always more to our world than what we see.`,
		image: {
			src: '/maisaimg.jpg',
			alt: 'Black and white portrait of Sandro standing outdoors in front of mountains.',
		},
	},
];
