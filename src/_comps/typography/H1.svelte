<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	interface Props {
		className?: string;
		tagName?: 'h1' | 'h2'; // For SEO purpose ( Heading hierarchy )
		children: Snippet;
	}

	const {
		className = '',
		tagName = 'h1',
		children
	}: Props & Omit<SvelteHTMLElements['h1' | 'h2'], 'class'> = $props();

	const h1 = tv({
		base: ['font-600 text-32 leading-106', 'lg:text-48']
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

<svelte:element this={tagName} class={h1({ class: className })} bind:this={title}>
	{@render children()}
</svelte:element>
