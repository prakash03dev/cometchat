<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

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
</script>

<svelte:element this={tagName} class={h3({ class: className })}>
	{@render children()}
</svelte:element>
