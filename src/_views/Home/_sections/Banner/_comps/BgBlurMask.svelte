<script>
	import { cn } from '@/_utils/tailwind.utils';
	import blur_mask_mobile from '../_assets/blur_mask_mobile.png';
</script>

<picture>
	<source srcset={blur_mask_mobile} media="(min-width: 600px)" />
	<img
		src={blur_mask_mobile}
		alt="background blurred colors"
		class={cn(
			['absolute left-0 right-0 -bottom-2 -z-4', 'w-full object-cover'],
			['[mask-image:_linear-gradient(to_top,_rgba(0,_0,_0,_1)_60%,_rgba(0,_0,_0,_0.2)_100%)]']
		)}
	/>
</picture>
