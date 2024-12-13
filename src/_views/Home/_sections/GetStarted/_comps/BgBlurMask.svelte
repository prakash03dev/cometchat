<script>
	import { cn } from '@/_utils/tailwind.utils';
	import { WINDOW_BREEAKPOINTS } from '@/_consts/breakpoints.const';
	import illustration_mobile from '../_assets/illustration_mobile.svg';
	import illustration_desktop from '../_assets/illustration_desktop.svg';
</script>

<picture data-name="bg-blur-mask">
	<source srcset={illustration_desktop} media="(min-width: {WINDOW_BREEAKPOINTS.lg}px)" />
	<img
		src={illustration_mobile}
		alt="background blurred colors"
		class={cn(
			[
				'absolute left-0 top-0 -z-4',
				'min-w-[900px] object-cover',
				'-translate-x-1/2 -translate-y-1/4'
			],
			['lg:min-w-[2500px]']
		)}
	/>
</picture>
