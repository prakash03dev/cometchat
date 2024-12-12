<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

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

	const small = tv({
		base: ['font-600 text-14 leading-140']
	});
</script>

<svelte:element this={tagName} class={small({ class: className })}>
	{@render children()}
</svelte:element>
