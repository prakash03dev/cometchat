<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';

	interface Props {
		className?: string;
		tagName?: 'p' | 'span'; // For SEO purpose ( Heading hierarchy )
		children: Snippet;
	}

	const { className = '', tagName = 'p', children }: Props = $props();

	const large = tv({
		base: ['font-600 text-18 leading-120', 'lg:text-22']
	});
</script>

<svelte:element this={tagName} class={large({ class: className })}>
	{@render children()}
</svelte:element>
