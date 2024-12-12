<script>
	import { cn } from '@/_utils/tailwind.utils';
	import bg_texture_mobile from '../_assets/bg_texture_mobile.png';
	import bg_texture_desktop from '../_assets/bg_texture_desktop.png';
</script>

<picture>
	<source srcset={bg_texture_desktop} media="(min-width: 600px)" />
	<img
		src={bg_texture_mobile}
		alt="background texture"
		class={cn(['absolute inset-0 -z-6', 'w-full h-full object-cover'])}
	/>
</picture>
