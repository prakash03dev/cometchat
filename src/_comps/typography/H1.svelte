<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		className?: string;
		children: Snippet;
	}

	const { className = '', children }: Props = $props();
</script>

<h1 class={'text-2xl text-purple-500' + className}>
	{@render children()}
</h1>
