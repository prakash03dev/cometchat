<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import TinyComet from './_comps/TinyComet.svelte';
	import MiniComet from './_comps/MiniComet.svelte';
	import SmallComet from './_comps/SmallComet.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let tinyCommet: HTMLElement;
	let miniCommet: HTMLElement;
	let smallCommet: HTMLElement;

	onMount(() => {
		const tinyCommetTimeline = gsap.timeline({ repeat: -1 });
		tinyCommetTimeline.to(tinyCommet, {
			keyframes: {
				y: ['100%', '0%', '100%'],
				x: ['50%', '100%', '0%', '50%']
			},
			duration: 5,
			yoyo: true
		});

		const miniCommetTimeline = gsap.timeline({ repeat: -1 });
		miniCommetTimeline.to(miniCommet, {
			keyframes: {
				y: ['10%', '0%', '10%'],
				x: ['10%', '0%', '10%']
			},
			duration: 10,
			yoyo: true
		});

		const smallCommetTimeline = gsap.timeline({ repeat: -1 });
		smallCommetTimeline.to(smallCommet, {
			keyframes: {
				y: ['10%', '0%', '10%'],
				x: ['50%', '-80%', '0%', '50%']
			},
			duration: 8,
			yoyo: true
		});
	});
</script>

<div class="flex flex-col" data-name="small-commets">
	<!-- desktop comets -->
	<div
		bind:this={tinyCommet}
		data-name="tiny-comet"
		class={cn(['hidden absolute top-[23%] left-[10%] -z-5'], ['lg:block'])}
	>
		<TinyComet />
	</div>
	<div
		bind:this={miniCommet}
		data-name="mini-comet"
		class={cn(['hidden absolute top-[20%] right-[5%] -z-5'], ['lg:block'])}
	>
		<MiniComet />
	</div>
	<div
		bind:this={smallCommet}
		data-name="small-comet"
		class={cn(['hidden absolute top-[10%] left-[0%] -z-5'], ['lg:block'])}
	>
		<SmallComet />
	</div>
</div>
