<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';

	interface Props {
		className?: string;
		icon: any;
		title: string;
		href: string;
	}
	const { className = '', href, icon: Icon, title } = $props();
</script>

<a
	{href}
	class={cn(['font-600 text-14 text-grayscale_01', 'flex items-center gap-2'], [className])}
>
	<Icon />
	<span>{title}</span>
</a>
