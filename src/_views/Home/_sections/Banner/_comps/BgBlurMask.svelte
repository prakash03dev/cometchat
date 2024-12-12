<script>
	import { cn } from '@/_utils/tailwind.utils';
	import { WINDOW_BREEAKPOINTS } from '@/_consts/breakpoints.const';
	import blur_mask_mobile from '../_assets/blur_mask_mobile.png';
	import bg_texture_desktop from '../_assets/blur_mask_desktop.svg';
</script>

<picture data-name="bg-blur-mask">
	<source srcset={bg_texture_desktop} media="(min-width: {WINDOW_BREEAKPOINTS.lg}px)" />
	<img
		src={blur_mask_mobile}
		alt="background blurred colors"
		class={cn(
			['absolute left-0 right-0 -bottom-2 -z-6', 'w-full object-cover object-left'],
			['[mask-image:_linear-gradient(to_top,_rgba(0,_0,_0,_1)_60%,_rgba(10,_9,_20,_0)_100%)]'],
			['lg:[mask-image:unset] lg:bottom-0 lg:top-0 lg:h-full lg:opacity-100']
		)}
	/>
</picture>
