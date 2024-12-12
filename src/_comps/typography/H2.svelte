<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
		tagName?: 'h2' | 'p' | 'span'; // For SEO purpose ( Heading hierarchy )
		children: Snippet;
	}

	const {
		className = '',
		tagName = 'h2',
		children
	}: Props & Omit<SvelteHTMLElements['h2' | 'p' | 'span'], 'class'> = $props();

	const h2 = tv({
		base: ['font-600 text-22 leading-106', 'lg:text-32']
	});
</script>

<svelte:element this={tagName} class={h2({ class: className })}>
	{@render children()}
</svelte:element>
