<script>
	import { cn } from '@/_utils/tailwind.utils';
	import Section from '@/_comps/layouts/Section.svelte';
	import Container from '@/_comps/layouts/Container.svelte';
	import H1 from '@/_comps/typography/H1.svelte';
	import Large from '@/_comps/typography/Large.svelte';
	import Form from './_comps/Form.svelte';
	import BgStars from './_comps/BgStars.svelte';
	import BottomGradient from './_comps/BottomGradient.svelte';
	import BgTexture from './_comps/BgTexture.svelte';
	import BgBlurMask from './_comps/BgBlurMask.svelte';
	import BgSmallComets from './_comps/BgCommets/BgSmallComets.svelte';
	import BgVintage from './_comps/BgVintage.svelte';
	import BgBigComets from './_comps/BgCommets/BgBigComets.svelte';
</script>

<Section className="bg-grayscale_dark_01 relative isolate overflow-hidden">
	<Container
		isHero={true}
		className={cn(['grid grid-cols-1 gap-8'], ['lg:grid-cols-2'], ['xl:gap-10'])}
	>
		<div class={cn(['flex flex-col gap-3'], ['lg:mt-20 lg:max-w-[480px] lg:ml-auto lg:gap-5'])}>
			<H1 className="text-grayscale_01">Join the CometChat partner universe</H1>
			<Large className="text-grayscale_01 text-opacity-75">
				Create value for your clients, leveraging our world-class technology. Partner with us and
				grow your business!
			</Large>
		</div>

		<Form />
	</Container>

	<BgTexture />
	<BgBlurMask />
	<BgSmallComets />
	<BgVintage />
	<BgStars />
	<BgBigComets />
	<BottomGradient />
</Section>
