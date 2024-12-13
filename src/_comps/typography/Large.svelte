<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	interface Props {
		className?: string;
		tagName?: 'p' | 'span'; // For SEO purpose ( Heading hierarchy )
		children: Snippet;
	}

	const {
		className = '',
		tagName = 'p',
		children
	}: Props & Omit<SvelteHTMLElements['p' | 'span'], 'class'> = $props();

	const large = tv({
		base: ['font-600 text-18 leading-120', 'lg:text-22']
	});

	let title: HTMLElement;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(title, {
			y: '50%',
			opacity: 0,
			scrollTrigger: {
				trigger: title,
				start: 'top 80%'
			}
		});
	});
</script>

<svelte:element this={tagName} class={large({ class: className })} bind:this={title}>
	{@render children()}
</svelte:element>
