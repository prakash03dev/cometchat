<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	interface Props {
		className?: string;
		tagName?: 'h3' | 'p' | 'span'; // For SEO purpose ( Heading hierarchy )
		children: Snippet;
	}

	const {
		className = '',
		tagName = 'h3',
		children
	}: Props & Omit<SvelteHTMLElements['h3' | 'p' | 'span'], 'class'> = $props();

	const h3 = tv({
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

<svelte:element this={tagName} class={h3({ class: className })} bind:this={title}>
	{@render children()}
</svelte:element>
