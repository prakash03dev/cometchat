<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
		children: Snippet;
	}

	const {
		className = '',
		children,
		...rest
	}: Props & Omit<SvelteHTMLElements['label'], 'class'> = $props();

	const label = tv({
		base: ['font-600 text-16 text-grayscale_01 leading-112 text-opacity-75']
	});
</script>

<label class={label({ class: className })} {...rest}>
	{@render children()}
</label>
