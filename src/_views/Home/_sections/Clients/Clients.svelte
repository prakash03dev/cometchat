<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import Container from '@/_comps/layouts/Container.svelte';
	import Section from '@/_comps/layouts/Section.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import { clientsData } from './_data/clients.data';

	const options = {
		loop: true,
		watchDrag: false,
		watchFocus: false
	};
	const plugins = [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnFocusIn: false })];
</script>

<Section className="bg-grayscale_dark_01">
	<Container expand="full" pxEnabled={false}>
		<div class={cn(['embla', 'overflow-hidden'])} use:emblaCarouselSvelte={{ options, plugins }}>
			<div class="embla__container flex items-center">
				{#each clientsData as client}
					<div class="embla__slide min-w-0 mx-5 max-w-full flex-[0_0_auto]">
						<img class="object-contain h-full" src={client.img} alt={client.alt} />
					</div>
				{/each}
			</div>
		</div>
	</Container>
</Section>
