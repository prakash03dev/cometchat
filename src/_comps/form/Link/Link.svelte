<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import LinkUnderline from './LinkUnderline.svelte';

	interface Props {
		className?: string;
		children: Snippet;
	}

	const {
		className = '',
		children,
		...rest
	}: Props & Omit<SvelteHTMLElements['a'], 'class'> = $props();

	const label = tv({
		base: [
			'group/link',
			'relative isolate pb-0.5',
			'font-600 text-14 text-grayscale_01 leading-140 whitespace-nowrap'
		]
	});
</script>

<a class={label({ class: className })} {...rest}>
	{@render children()}
	<LinkUnderline />
</a>
