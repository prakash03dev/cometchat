<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import { faqData } from './_datas/faq.data';
	import Container from '@/_comps/layouts/Container.svelte';
	import Section from '@/_comps/layouts/Section.svelte';
	import H3 from '@/_comps/typography/H3.svelte';
	import Faq from './_comps/Faq.svelte';
	import left_blur from './_assets/left_blur.svg';
	import right_blur from './_assets/right_blur.svg';
	import H1 from '@/_comps/typography/H1.svelte';

	let activeFaqIndex: number | null = $state(0);
	const handleOnToggle = (index: number) => {
		if (activeFaqIndex === index) {
			activeFaqIndex = null;
		} else {
			activeFaqIndex = index;
		}
	};
</script>

<Section className="bg-grayscale_01 relative isolate">
	<Container className="lg:!max-w-3xl">
		<H3 className={cn(['text-orange_09'], ['sm:text-center'])}>FAQ’s</H3>
		<H1
			tagName="h2"
			className={cn(['text-grayscale_dark_01 mt-2'], ['sm:text-center'], ['lg:mt-4'])}
		>
			We want to help you with all your doubts
		</H1>
		<div class={cn(['flex flex-col gap-4 mt-10'], ['lg:mt-16'])}>
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
	<img
		class={cn(['absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none'])}
		src={left_blur}
		alt="left side blur"
	/>
	<img
		class={cn(['absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none'])}
		src={right_blur}
		alt="right side blur"
	/>
</Section>
