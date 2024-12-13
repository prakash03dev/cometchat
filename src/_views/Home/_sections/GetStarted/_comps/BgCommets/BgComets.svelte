<script>
	import { cn } from '@/_utils/tailwind.utils';
	import PinkComet from './_comps/PinkComet.svelte';
	import OrangeComet from './_comps/OrangeComet.svelte';
</script>

<div class="flex flex-col" data-name="small-commets">
	<div
		data-name="tiny-comet"
		class={cn(['absolute top-0 left-0 -z-5', 'scale-50 -translate-x-[45%] -translate-y-[45%]'])}
	>
		<PinkComet />
	</div>
	<div
		data-name="mini-comet"
		class={cn(
			['absolute bottom-0 right-0 -z-5', 'translate-x-1/2 translate-y-[33%]'],
			['lg:translate-y-[30%]']
		)}
	>
		<OrangeComet />
	</div>
</div>
