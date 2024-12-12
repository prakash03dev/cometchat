<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';

	interface Props {
		className?: string;
		tagName?: 'h1' | 'h2'; // For SEO purpose ( Heading hierarchy )
		children: Snippet;
	}

	const { className = '', tagName = 'h1', children }: Props = $props();

	const h1 = tv({
		base: ['font-600 text-32 leading-106', 'lg:text-48']
	});
</script>

<svelte:element this={tagName} class={h1({ class: className })}>
	{@render children()}
</svelte:element>
