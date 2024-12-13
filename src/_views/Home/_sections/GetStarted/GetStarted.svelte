<script>
	import Button from '@/_comps/form/Button/Button.svelte';
	import Container from '@/_comps/layouts/Container.svelte';
	import Section from '@/_comps/layouts/Section.svelte';
	import H2 from '@/_comps/typography/H2.svelte';
	import Large from '@/_comps/typography/Large.svelte';
	import BgStars from './_comps/BgStars.svelte';
	import BottomGradient from './_comps/BottomGradient.svelte';
	import BgBlurMask from './_comps/BgBlurMask.svelte';
	import BgComets from './_comps/BgCommets/BgComets.svelte';
	import { cn } from '@/_utils/tailwind.utils';
</script>

<Section className="bg-grayscale_dark_01 relative isolate overflow-hidden">
	<Container isHero={true}>
		<H2 className={cn(['text-grayscale_01'], ['sm:text-center'])}>Get started for free</H2>
		<Large
			className={cn(
				['text-grayscale_01 text-opacity-75 mt-2 max-w-md mx-auto'],
				['sm:text-center sm:mt-4']
			)}
		>
			Build and test for as long as you need. Pick a plan when you’re ready.
		</Large>
		<div class={cn(['flex items-center gap-3 mt-6'], ['sm:justify-center sm:mt-8'])}>
			<Button color="secondary">Start free trial</Button>
			<Button>Schedule a demo</Button>
		</div>
		<div class="h-14"></div>
	</Container>

	<BgStars />
	<BgComets />
	<BgBlurMask />
	<BottomGradient />
</Section>
