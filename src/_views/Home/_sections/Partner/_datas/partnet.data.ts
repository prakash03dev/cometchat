import type { Snippet } from 'svelte';
import {
	CreaditIcon,
	DeveloperIcon,
	IncomeIcon,
	KnowledgeIcon,
	ShareIcon,
	SupportIcon,
	TimeIcon,
	TrainingIcon,
	ValueIcon
} from '../_icons';

interface ContentProps {
	icon: Snippet;
	title: string;
	des: string;
}

export const partnetContents: ContentProps[] = [
	{
		icon: CreaditIcon,
		title: 'Free credits',
		des: 'Empowering partners to scale.'
	},
	{
		icon: ShareIcon,
		title: 'Revenue share',
		des: 'Get monthly recurring revenues when you refer clients.'
	},
	{
		icon: TrainingIcon,
		title: 'Training and mentoring sessions',
		des: 'Enabling partners to deliver the best experience.'
	},
	{
		icon: DeveloperIcon,
		title: 'Special developer access',
		des: 'Get an all-access account to build unlimited PoCs for your clients.'
	},
	{
		icon: TimeIcon,
		title: 'Reduced time',
		des: 'Deliver your products much faster with our partners’ programs.'
	},
	{
		icon: ValueIcon,
		title: 'Value addition to your users',
		des: 'We need a 2 line text here '
	},
	{
		icon: KnowledgeIcon,
		title: 'Knowledge sessions',
		des: 'Access to product and market sessions.'
	},
	{
		icon: SupportIcon,
		title: 'On-demand support',
		des: 'Technical assistance for implementation.'
	},
	{
		icon: IncomeIcon,
		title: 'Significant passive income',
		des: 'We need a 2 line text here '
	}
];
