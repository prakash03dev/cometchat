<script>
	import { cn } from '@/_utils/tailwind.utils';
	import Section from '@/_comps/layouts/Section.svelte';
	import Container from '@/_comps/layouts/Container.svelte';
	import Info from './_comps/Info.svelte';
	import Form from './_comps/Form.svelte';
	import BgStars from './_comps/BgStars.svelte';
	import BottomGradient from './_comps/BottomGradient.svelte';
	import BgTexture from './_comps/BgTexture.svelte';
	import BgBlurMask from './_comps/BgBlurMask.svelte';
	import BgCommets from './_comps/BgCommets/BgCommets.svelte';
	import BgVintage from './_comps/BgVintage.svelte';
</script>

<Section className="bg-grayscale_dark_01 relative isolate overflow-hidden">
	<Container
		isHero={true}
		className={cn(['grid grid-cols-1 gap-8 min-h-screen'], ['lg:grid-cols-2 lg:gap-10'])}
	>
		<!-- <Info />
		<Form /> -->
		<div></div>
	</Container>

	<BgTexture />
	<BgBlurMask />

	<!--	<BgStars />

	<BgCommets />
	<BottomGradient />

	<BgVintage /> -->
</Section>
