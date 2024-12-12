<script>
	import { cn } from '@/_utils/tailwind.utils';
	import BlueCommet from './_comps/BlueComet.svelte';
	import RedCommet from './_comps/RedComet.svelte';
	import OrangeCommet from './_comps/OrangeComet.svelte';
	import BlueMiniComet from './_comps/BlueMiniComet.svelte';
</script>

<div class="flex flex-col" data-name="big-commets">
	<div
		data-name="blue-comet"
		class={cn(
			['absolute left-0 bottom-0 -z-2 -translate-x-1/2'],
			['lg:translate-x-3/4'],
			['xl:-translate-x-1/2']
		)}
	>
		<BlueCommet />
	</div>

	<div
		data-name="blue-mini-comet"
		class={cn(
			['hidden absolute right-1/2 bottom-0 -z-2 translate-x-[55%] translate-y-[23%]'],
			['lg:block']
		)}
	>
		<BlueMiniComet />
	</div>

	<div
		data-name="red-comet"
		class={cn(['absolute right-0 bottom-0 -z-2 translate-x-[40%] translate-y-[40%]'])}
	>
		<RedCommet />
	</div>

	<div
		data-name="orange-comet"
		class={cn(
			['hidden absolute left-0 bottom-0 -z-2', '-translate-x-[30%] translate-y-[40%]'],
			['lg:block']
		)}
	>
		<OrangeCommet />
	</div>
</div>
