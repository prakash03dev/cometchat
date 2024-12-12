<script lang="ts">
	import Medium from '@/_comps/typography/Medium.svelte';
	import { cn, tv } from '@/_utils/tailwind.utils';
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		icon: Snippet;
		title: string;
		des: string;
	}
	const { className = '', icon: Icon, title, des } = $props();

	const contentWrap = tv({
		base: ['text-left max-w-[394px] w-full']
	});
</script>

<div class={contentWrap({ class: className })}>
	<Icon />
	<Medium className={cn(['text-grayscale_01 mt-2'], ['lg:mt-3'])} tagName="p">
		{title}
	</Medium>
	<Medium className={cn(['text-grayscale_01/75 font-500 mt-1 '])} tagName="p">
		{des}
	</Medium>
</div>
