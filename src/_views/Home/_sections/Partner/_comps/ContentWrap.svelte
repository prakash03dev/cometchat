<script lang="ts">
	import Medium from '@/_comps/typography/Medium.svelte';
	import { cn, tv } from '@/_utils/tailwind.utils';
	import type { Snippet } from 'svelte';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	interface Props {
		className?: string;
		icon: Snippet;
		title: string;
		des: string;
	}
	const { className = '', icon: Icon, title, des }: Props = $props();

	const contentWrap = tv({
		base: ['text-left max-w-[394px] w-full']
	});

	let element: HTMLElement;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(element, {
			rotateZ: '10%',
			scrollTrigger: {
				trigger: element,
				start: 'top 60%'
			}
		});
	});
</script>

<div class={contentWrap({ class: className })} bind:this={element}>
	<Icon />
	<Medium className={cn(['text-grayscale_01 mt-2'], ['lg:mt-3'])}>
		{title}
	</Medium>
	<Medium className={cn(['text-grayscale_01/75 font-500 mt-1.5 '])}>
		{des}
	</Medium>
</div>
