<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
	}

	const { className = '', ...rest }: Props & Omit<SvelteHTMLElements['input'], 'class'> = $props();

	const input = tv({
		base: [
			'py-3 px-4 w-full',
			'bg-grayscale_01 bg-opacity-[2%]',
			'border border-grayscale_01 border-opacity-10 rounded-[14px]',
			'font-600 text-16 text-grayscale_01 leading-112 text-opacity-65',
			'placeholder-shown:text-grayscale_01 placeholder-shown:text-opacity-75'
		]
	});
</script>

<input class={input({ class: className })} {...rest} />
