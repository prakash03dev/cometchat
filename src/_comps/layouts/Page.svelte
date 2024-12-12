<script lang="ts">
	import { tv } from '@/_utils/tailwind.utils';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
		children: Snippet;
	}

	const { className = '', children, ...rest }: Props & SvelteHTMLElements['main'] = $props();

	const page = tv({
		base: ['']
	});
</script>

<main class={page({ class: className })} {...rest}>
	{@render children()}
</main>
