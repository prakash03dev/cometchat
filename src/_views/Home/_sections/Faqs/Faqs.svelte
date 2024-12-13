<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import Container from '@/_comps/layouts/Container.svelte';
	import Section from '@/_comps/layouts/Section.svelte';
	import H2 from '@/_comps/typography/H2.svelte';
	import H3 from '@/_comps/typography/H3.svelte';
	import { faqData } from './_datas/faq.data';
	import Faq from './_comps/Faq.svelte';

	let activeFaqIndex: number | null = $state(0);
	const handleOnToggle = (index: number) => {
		if (activeFaqIndex === index) {
			activeFaqIndex = null;
		} else {
			activeFaqIndex = index;
		}
	};
</script>

<Section className="bg-grayscale_01">
	<Container className="lg:!max-w-3xl">
		<H3 className={cn(['text-orange_09'], ['sm:text-center'])}>FAQ’s</H3>
		<H2 className={cn(['text-grayscale_dark_01 mt-2'], ['sm:text-center'], ['lg:mt-8'])}>
			We want to help you with all your doubts
		</H2>
		<div class={cn(['flex flex-col gap-4 mt-10'])}>
			{#each faqData as item, i}
				<Faq
					index={i}
					title={item.title}
					des={item.des}
					onToggle={handleOnToggle}
					data-state={activeFaqIndex === i ? 'active' : 'inactive'}
				/>
			{/each}
		</div>
	</Container>
</Section>
