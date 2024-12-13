<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import BlueCommet from './_comps/BlueComet.svelte';
	import RedCommet from './_comps/RedComet.svelte';
	import OrangeCommet from './_comps/OrangeComet.svelte';
	import BlueMiniComet from './_comps/BlueMiniComet.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let blueCommet: HTMLElement;
	let blueMiniCommet: HTMLElement;
	let redMiniCommet: HTMLElement;
	let orangeMiniCommet: HTMLElement;

	onMount(() => {
		const blueCometTimeline = gsap.timeline({ repeat: -1 });
		blueCometTimeline.to(blueCommet, {
			keyframes: {
				y: ['10%', '0%', '10%']
			},
			duration: 20,
			yoyo: true
		});

		const blueMiniCommetTimeline = gsap.timeline({ repeat: -1, reversed: true });
		blueMiniCommetTimeline.to(blueMiniCommet, {
			keyframes: {
				y: ['10%', '0%', '10%']
			},
			duration: 5,
			yoyo: true
		});

		const redMiniCommetTimeline = gsap.timeline({ repeat: -1 });
		redMiniCommetTimeline.to(redMiniCommet, {
			keyframes: {
				y: ['50%', '40%', '50%']
			},
			duration: 10,
			yoyo: true
		});

		const orangeMiniCommetTimeline = gsap.timeline({ repeat: -1 });
		orangeMiniCommetTimeline.to(orangeMiniCommet, {
			keyframes: {
				scale: [1.2, 1, 1.2]
			},

			duration: 10,
			yoyo: true
		});
	});
</script>

<div class="flex flex-col" data-name="big-commets">
	<div
		bind:this={blueCommet}
		data-name="blue-comet"
		class={cn(
			['absolute left-0 bottom-0 -z-2 -translate-x-1/2', 'will-change-transform'],
			['lg:translate-x-3/4'],
			['xl:-translate-x-1/2']
		)}
	>
		<BlueCommet />
	</div>

	<div
		bind:this={blueMiniCommet}
		data-name="blue-mini-comet"
		class={cn(
			[
				'hidden absolute right-1/2 bottom-0 -z-2 translate-x-[55%] translate-y-[23%]',
				'will-change-transform'
			],
			['lg:block']
		)}
	>
		<BlueMiniComet />
	</div>

	<div
		bind:this={redMiniCommet}
		data-name="red-comet"
		class={cn([
			'absolute right-0 bottom-0 -z-2 translate-x-[40%] translate-y-[40%]',
			'will-change-transform'
		])}
	>
		<RedCommet />
	</div>

	<div
		bind:this={orangeMiniCommet}
		data-name="orange-comet"
		class={cn(
			[
				'hidden absolute left-0 bottom-0 -z-2',
				'-translate-x-[30%] translate-y-[40%]',
				'will-change-transform'
			],
			['lg:block']
		)}
	>
		<OrangeCommet />
	</div>
</div>
