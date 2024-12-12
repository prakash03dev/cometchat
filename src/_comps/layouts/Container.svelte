<script lang="ts">
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
		children: Snippet;
	}

	const { className = '', children, ...rest }: Props & SvelteHTMLElements['div'] = $props();
</script>

<div class={className} {...rest}>
	{@render children()}
</div>
