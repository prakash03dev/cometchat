<script lang="ts">
	import Logo from '@/_comps/common/Logo.svelte';
	import { cn } from '@/_utils/tailwind.utils';
	interface Props {
		className?: string;
	}
	const { className = '' }: Props = $props();
</script>

<a href="/" class={cn([className])}>
	<Logo />
</a>
