<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
		children: Snippet;
	}

	const {
		className = '',
		children,
		...rest
	}: Props & Omit<SvelteHTMLElements['section'], 'class'> = $props();

	const section = tv({
		base: ['']
	});
</script>

<section class={section({ class: className })} {...rest}>
	{@render children()}
</section>
