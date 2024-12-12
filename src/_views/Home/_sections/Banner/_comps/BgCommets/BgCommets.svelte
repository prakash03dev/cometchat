<script>
	import { cn } from '@/_utils/tailwind.utils';
	import BlueCommet from './_comps/BlueCommet.svelte';
	import RedCommet from './_comps/RedCommet.svelte';
	import OrangeCommet from './_comps/OrangeCommet.svelte';
</script>

<div class="flex flex-col" data-name="commets">
	<div class={cn(['absolute left-0 bottom-5 -z-3 -translate-x-1/2'])}>
		<BlueCommet />
	</div>
	<div class={cn(['absolute right-0 bottom-0 -z-3 translate-x-[40%] translate-y-[40%]'])}>
		<RedCommet />
	</div>

	<div
		class={cn(
			['hidden absolute left-0 bottom-0 -z-3', '-translate-x-[30%] translate-y-[40%]'],
			['lg:block']
		)}
	>
		<OrangeCommet />
	</div>
</div>
