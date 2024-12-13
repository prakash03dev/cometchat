<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
	}

	const { className = '', ...rest }: Props & Omit<SvelteHTMLElements['div'], 'class'> = $props();

	const linkUnserline = tv({
		base: [
			'absolute bottom-0 inset-x-0 h-0.5',
			'bg-[linear-gradient(90deg,_#6852D6_0%,_#F37B44_100%)]',
			'transition-transform duration-300 ease-in',
			'origin-bottom-right scale-0',
			'group-hover/menuItem:origin-bottom-left group-hover/menuItem:scale-100'
		]
	});
</script>

<div class={linkUnserline({ class: className })} {...rest}></div>
