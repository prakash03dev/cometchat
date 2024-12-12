<script>
	import { cn } from '@/_utils/tailwind.utils';
	import bg_texture_mobile from '../_assets/bg_texture_mobile.png';
	import bg_texture_desktop from '../_assets/bg_texture_desktop.png';
	import { WINDOW_BREEAKPOINTS } from '@/_consts/breakpoints.const';
</script>

<picture data-name="bg-texture">
	<source srcset={bg_texture_desktop} media="(min-width: {WINDOW_BREEAKPOINTS.lg}px)" />
	<img
		src={bg_texture_mobile}
		alt="background texture"
		class={cn(['absolute inset-0 -z-7', 'w-full h-full object-cover'])}
	/>
</picture>
