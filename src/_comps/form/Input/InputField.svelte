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
	}: Props & Omit<SvelteHTMLElements['div'], 'class'> = $props();

	const inputField = tv({
		base: ['group/inputField relative isolate', 'flex flex-col gap-1.5']
	});
</script>

<div class={inputField({ class: className })} {...rest}>
	{@render children()}
</div>
