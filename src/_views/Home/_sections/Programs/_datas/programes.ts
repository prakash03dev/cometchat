import AfflicatedIcon from '../_icons/AfflicatedIcon.svelte';
import StartupIcon from '../_icons/StartupIcon.svelte';
import TecnologyIcon from '../_icons/TecnologyIcon.svelte';

interface ContentProps {
	icon: __sveltets_2_IsomorphicComponent;
	title: string;
	des: string;
}

export const programeInfis: ContentProps[] = [
	{
		icon: AfflicatedIcon,
		title: 'Affiliate partner program',
		des: 'Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.'
	},
	{
		icon: TecnologyIcon,
		title: 'Technology partner program',
		des: 'Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!'
	},
	{
		icon: StartupIcon,
		title: 'Start up growth program',
		des: 'We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.'
	}
];
