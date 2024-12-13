<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import MenuItemUnderline from './MenuItemUnderline.svelte';

	interface Props {
		className?: string;
		id: string;
		title: string;
		href: string;
	}
	const { className = '', id, title, href }: Props = $props();
</script>

<li
	class={cn(
		['flex flex-col', 'border-b border-b-grayscale_01 border-opacity-10'],
		['lg:border-opacity-0']
	)}
>
	<a
		{id}
		{href}
		class={cn(
			['group/menuItem'],
			['relative isolate'],
			['font-600 text-16 text-grayscale_01', 'py-4 w-full', 'transition-colors duration-300'],
			['lg:text-14 lg:hover:text-[#F37B44]'],
			[className]
		)}
	>
		{title}
		<MenuItemUnderline />
	</a>
</li>
