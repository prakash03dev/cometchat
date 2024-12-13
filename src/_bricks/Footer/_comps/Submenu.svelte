<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import type { SubmenuProps } from '../_datas/footer.data';
	import Link from '@/_comps/form/Link/Link.svelte';

	interface Props extends SubmenuProps {
		className?: string;
	}

	const { className = '', title, items }: Props = $props();
</script>

<div class={cn(['flex flex-col gap-4 pt-4 pl-4'], ['lg:pl-0 lg:pt-0'], [className])}>
	{#if title}
		<p class="text-14 font-600 text-grayscale_01 leading-140 text-opacity-55">{title}</p>
	{/if}
	<div class="flex flex-col gap-4">
		{#each items as item}
			<Link className="w-max" href={item.href}>
				{item.title}
			</Link>
		{/each}
	</div>
</div>
