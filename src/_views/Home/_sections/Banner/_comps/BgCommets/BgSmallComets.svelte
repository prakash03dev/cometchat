<script>
	import { cn } from '@/_utils/tailwind.utils';
	import TinyComet from './_comps/TinyComet.svelte';
	import MiniComet from './_comps/MiniComet.svelte';
	import SmallComet from './_comps/SmallComet.svelte';
</script>

<div class="flex flex-col" data-name="small-commets">
	<!-- desktop comets -->
	<div
		data-name="tiny-comet"
		class={cn(['hidden absolute top-[23%] left-[10%] -z-5'], ['lg:block'])}
	>
		<TinyComet />
	</div>
	<div
		data-name="mini-comet"
		class={cn(['hidden absolute top-[24%] right-[10%] -z-5'], ['lg:block'])}
	>
		<MiniComet />
	</div>
	<div
		data-name="small-comet"
		class={cn(['hidden absolute top-[10%] left-[0%] -z-5'], ['lg:block'])}
	>
		<SmallComet />
	</div>
</div>
