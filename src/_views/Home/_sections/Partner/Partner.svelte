<script lang="ts">
	import Container from '@/_comps/layouts/Container.svelte';
	import Section from '@/_comps/layouts/Section.svelte';
	import H1 from '@/_comps/typography/H1.svelte';
	import H3 from '@/_comps/typography/H3.svelte';
	import ContentWrap from './_comps/ContentWrap.svelte';
	import { cn } from '@/_utils/tailwind.utils';
	import { partnetContents } from './_datas/partnet.data';
</script>

<Section id="partner" className="bg-grayscale_dark_01">
	<Container>
		<div class={cn(['flex flex-col gap-2 text-left max-w-[528px]'], ['lg:gap-3'])}>
			<H3 className="text-orange_dark_09" tagName="p">The benefits</H3>
			<H1 tagName="h2" className="text-grayscale_01">CometChat partner advantages</H1>
		</div>

		<div
			class={cn(
				['grid grid-cols-1 gap-14 justify-between w-full mt-16'],
				['sm:grid-cols-2'],
				['lg:grid-cols-3 lg:gap-16 lg:mt-24']
			)}
		>
			{#each partnetContents as item}
				<ContentWrap {...item}></ContentWrap>
			{/each}
		</div>
	</Container>
</Section>
