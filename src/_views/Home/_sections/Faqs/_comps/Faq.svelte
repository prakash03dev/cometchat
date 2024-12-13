<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import H3 from '@/_comps/typography/H3.svelte';
	import ArrowIcon from './ArrowIcon.svelte';
	import { useResizeHeight } from '@/_actions/useResizeHeight';

	interface Props {
		className?: string;
		index: number;
		title: string;
		des: string;
		onToggle: (index: number) => void;
	}

	const {
		className = '',
		index,
		title,
		des,
		onToggle,
		...rest
	}: Props & Omit<SvelteHTMLElements['div'], 'class'> = $props();

	let submenuWrapper: HTMLDivElement | undefined = $state();
	let scrollHeight = $derived(submenuWrapper?.scrollHeight + 'px' || 'auto');
	let transitionDuration = $derived(Math.max(submenuWrapper?.scrollHeight || 1 * 2, 500) + 'ms');
	const handleOnToggle = () => {
		onToggle(index);
	};
</script>

<div
	class={cn(
		['group/faq'],
		[
			'flex flex-col p-4',
			'bg-grayscale_12 bg-opacity-[2%]',
			'border border-grayscale_12 border-opacity-5 rounded-2xl'
		],
		['lg:p-6'],
		[className]
	)}
	{...rest}
>
	<button
		class={cn(['grid grid-cols-[1fr_auto] items-center justify-between w-full'])}
		onclick={handleOnToggle}
	>
		<H3
			className={cn([
				'text-left text-grayscale_dark_01 text-opacity-75',
				'transition-colors duration-300',
				'group-data-[state="active"]/faq:text-opacity-100'
			])}
			tagName="span"
		>
			{title}
		</H3>
		<ArrowIcon
			className={cn([
				'transition-transform duration-[var(--transition-duration)]',
				'group-data-[state="active"]/faq:rotate-180'
			])}
			style={`--transition-duration:${transitionDuration};`}
		/>
	</button>

	<div
		bind:this={submenuWrapper}
		use:useResizeHeight
		class={cn([
			'flex flex-col gap-4',
			'h-0 pr-4 overflow-hidden',
			'transition-[height] duration-[var(--transition-duration)]',
			'group-data-[state="active"]/faq:h-[var(--scroll-height)]'
		])}
		style={`--scroll-height:${scrollHeight}; --transition-duration:${transitionDuration};`}
	>
		<H3 tagName="p" className="font-500 text-grayscale_12 text-opacity-75 pt-4">{des}</H3>
	</div>
</div>
