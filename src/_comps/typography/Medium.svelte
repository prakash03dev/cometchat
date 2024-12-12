<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';

	interface Props {
		className?: string;
		tagName?: 'p' | 'span'; // For SEO purpose ( Heading hierarchy )
		children: Snippet;
	}

	const { className = '', tagName = 'p', children }: Props = $props();

	const medium = tv({
		base: ['font-600 text-16 leading-112', 'lg:text-18']
	});
</script>

<svelte:element this={tagName} class={medium({ class: className })}>
	{@render children()}
</svelte:element>
