<script lang="ts">
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
		children: Snippet;
	}

	const { className = '', children, ...rest }: Props & SvelteHTMLElements['section'] = $props();
</script>

<section class={className} {...rest}>
	{@render children()}
</section>
