<script>
	import { cn } from '@/_utils/tailwind.utils';
	import stars_bg from '../_assets/stars_bg.png';
</script>

<picture data-name="stars">
	<img
		class={cn(
			['absolute inset-0 -z-6', 'w-full h-full object-cover object-right'],
			['lg:object-center']
		)}
		src={stars_bg}
		alt="starts background"
	/>
</picture>
