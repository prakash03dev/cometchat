<script>
	import H1 from '@/_comps/typography/H1.svelte';
	import H3 from '@/_comps/typography/H3.svelte';
	import { cn } from '@/_utils/tailwind.utils';
</script>

<div class={cn(['flex flex-col gap-2 text-left max-w-[528px]'], ['lg:gap-3'])}>
	<H3 className="text-orange_dark_09" tagName="p">The benefits</H3>
	<H1 tagName="h2" className="text-grayscale_01">CometChat partner advantages</H1>
</div>
