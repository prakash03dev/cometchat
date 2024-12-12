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
	}: Props & Omit<SvelteHTMLElements['button'], 'class'> = $props();

	const label = tv({
		base: [
			'bg-brand_dark_09 rounded-[12px] px-3 py-2 w-max',
			'font-600 text-14 text-grayscale_01 leading-140'
		]
	});
</script>

<button class={label({ class: className })} {...rest}>
	{@render children()}
</button>
