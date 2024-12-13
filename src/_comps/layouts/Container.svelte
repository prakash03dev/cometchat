<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
		expand?: 'full' | 'boxed';
		pyEnabled?: boolean;
		pxEnabled?: boolean;
		isHero?: boolean;
		children: Snippet;
	}
	const {
		className = '',
		children,
		expand = 'boxed',
		isHero = false,
		pyEnabled = !isHero,
		pxEnabled = true,
		...rest
	}: Props & Omit<SvelteHTMLElements['div'], 'class'> = $props();

	const container = tv({
		base: ['mx-auto'],
		variants: {
			expand: {
				full: '',
				boxed: ['container']
			},
			pyEnabled: {
				true: 'py-10 md:py-14 lg:py-20'
			},
			pxEnabled: {
				true: 'px-5 md:px-8 lg:px-10 xl:px-20'
			},
			isHero: {
				true: ['px-5 md:px-8 lg:px-10 xl:px-20', 'pt-32 pb-10 md:pb-14 lg:pt-40 lg:pb-20']
			}
		},
		defaultVariants: {
			expand: expand,
			pyEnabled: pyEnabled,
			pxEnabled: pxEnabled,
			isHero: isHero
		}
	});
</script>

<div class={container({ class: className })} {...rest}>
	{@render children()}
</div>
