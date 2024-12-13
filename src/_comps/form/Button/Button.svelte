<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import BtnHoverEffect from './BtnHoverEffect.svelte';

	interface Props {
		className?: string;
		children: Snippet;
		color?: 'primary' | 'secondary';
	}

	const {
		className = '',
		color = 'primary',
		children,
		...rest
	}: Props & Omit<SvelteHTMLElements['button'], 'class'> = $props();

	const label = tv({
		base: [
			'group/btn',
			'relative isolate',
			'rounded-[12px] px-4 py-3 w-max',
			'font-600 text-14 text-grayscale_01 leading-140 whitespace-nowrap'
		],
		variants: {
			color: {
				primary: ['bg-brand_dark_09', 'border border-transparent'],
				secondary: [
					'bg-grayscale_01 bg-opacity-[2%]',
					'border border-grayscale_01 border-opacity-10'
				]
			}
		},
		defaultVariants: {
			color: color
		}
	});

	let gradientPositionX = $state('50%');
	let gradientPositionY = $state('50%');

	const handleOnPointerMove = (event: any) => {
		const rect = event.target.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		gradientPositionX = `${x}px`;
		gradientPositionY = `${y}px`;
	};
</script>

<button class={label({ class: className })} {...rest} onpointermove={handleOnPointerMove}>
	{@render children()}
	<BtnHoverEffect {gradientPositionX} {gradientPositionY} />
</button>
