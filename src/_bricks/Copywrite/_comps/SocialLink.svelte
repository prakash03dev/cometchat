<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';

	interface Props {
		className?: string;
		icon: any;
		title: string;
		href: string;
	}
	const { className = '', href, icon: Icon, title }: Props = $props();
</script>

<a
	{href}
	class={cn(
		[
			'group',
			'font-600 text-14 text-grayscale_01',
			'flex items-center gap-2',
			'hover:text-orange_09',
			'transition-colors duration-300'
		],
		[className]
	)}
>
	<Icon
		className={cn([
			'group-hover:[&_path]:fill-orange_09',
			'[&_path]:transition-colors [&_path]:duration-300'
		])}
	/>
	<span>{title}</span>
</a>
