<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import PlusIcon from './PlusIcon.svelte';
	import Submenu from './Submenu.svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { MenuProps } from '../_datas/footer.data';

	interface Props extends MenuProps {
		className?: string;
		index: number;
		onToggle: (index: number) => void;
	}

	const {
		className = '',
		index,
		title,
		submenu,
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

<div class={cn(['group/menu'], ['flex flex-col'], [className])} {...rest}>
	<button
		class={cn(
			[
				'grid grid-cols-[1fr_auto] items-center justify-between py-4 w-full',
				'border-b border-b-grayscale_01 border-opacity-5'
			],
			['lg:hidden']
		)}
		onclick={handleOnToggle}
	>
		<p class="text-16 font-600 text-brand_09 text-left">{title}</p>
		<PlusIcon
			className={cn([
				'transition-transform duration-[var(--transition-duration)]',
				'group-data-[state="active"]/menu:rotate-[135deg]'
			])}
			style={`--transition-duration:${transitionDuration};`}
		/>
	</button>
	<p class={cn(['hidden text-16 font-600 text-brand_09 py-4'], ['lg:block'])}>{title}</p>

	<div
		bind:this={submenuWrapper}
		class={cn(
			[
				'flex flex-col gap-4',
				'h-0 overflow-hidden',
				'transition-[height] duration-[var(--transition-duration)]',
				'group-data-[state="active"]/menu:h-[var(--scroll-height)]'
			],
			['lg:h-auto']
		)}
		style={`--scroll-height:${scrollHeight}; --transition-duration:${transitionDuration};`}
	>
		{#each submenu as submenuItem}
			<Submenu title={submenuItem.title} items={submenuItem.items} />
		{/each}
	</div>
</div>
