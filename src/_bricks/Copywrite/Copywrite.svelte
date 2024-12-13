<script>
	import { cn } from '@/_utils/tailwind.utils';
	import Container from '@/_comps/layouts/Container.svelte';
	import Facebook from './_icons/Facebook.svelte';
	import LinkedIn from './_icons/LinkedIn.svelte';
	import Instagram from './_icons/Instagram.svelte';
	import Twitter from './_icons/Twitter.svelte';
	import Github from './_icons/Github.svelte';
	import SocialLink from './_comps/SocialLink.svelte';

	const links = ['2023 © CometChat', 'Terms of Use', 'Privacy Policy'];
	const socialLinks = [
		{
			title: 'Facebook',
			icon: Facebook,
			href: '#'
		},
		{
			title: 'LinkedIn',
			icon: LinkedIn,
			href: '#'
		},
		{
			title: 'Instagram',
			icon: Instagram,
			href: '#'
		},
		{
			title: 'Twitter',
			icon: Twitter,
			href: '#'
		},
		{
			title: 'GitHub',
			icon: Github,
			href: '#'
		}
	];
</script>

<div class={cn(['bg-grayscale_dark_01 flex flex-col'])}>
	<div
		class={cn([
			'bg-[linear-gradient(90deg,_rgba(39,_39,_48,_0)_0%,_#272730_47.92%,_rgba(39,_39,_48,_0)_100%)]',
			'w-4/5 h-[1px] mx-auto'
		])}
	></div>
	<Container
		pyEnabled={false}
		className={cn(
			['flex flex-col gap-6 py-6'],
			['sm:gap-8 sm:py-8'],
			['lg:py-10 lg:flex-row lg:justify-between']
		)}
	>
		<div class={cn(['flex items-center justify-between gap-4 order-1'], ['lg:-order-1'])}>
			{#each links as link}
				<a href="#" class={cn(['font-600 text-14 text-grayscale_01'])}>{link}</a>
			{/each}
		</div>

		<div class={cn(['flex flex-wrap items-center gap-6'])}>
			{#each socialLinks as socialLink}
				<SocialLink href={socialLink.href} icon={socialLink.icon} title={socialLink.title} />
			{/each}
		</div>
	</Container>
</div>
