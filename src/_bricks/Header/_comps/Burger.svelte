<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	interface Props {
		className?: string;
		onClick: () => void;
	}
	const { className = '', onClick }: Props = $props();
</script>

<button
	aria-label="View menu"
	class={cn(
		[
			'group/burger relative z-30 w-10 h-10',
			'flex flex-col items-center justify-center',
			'bg-grayscale_01 bg-opacity-[2%]',
			'border border-grayscale_01 border-opacity-10 rounded-10'
		],
		['lg:hidden'],
		[className]
	)}
	onclick={onClick}
	data-name="burger"
	data-state="inactive"
>
	<div class={cn(['relative z-30 w-5 h-4 -translate-y-[1px]', 'flex flex-col'], ['lg:hidden'])}>
		<div
			class={cn([
				'w-full h-[1px] rounded bg-grayscale_01',
				'absolute left-0 right-0',
				'top-0 translate-y-1/2',
				'transition-all duration-300',

				"group-data-[state='active']/nav:top-1/2",
				"group-data-[state='active']/nav:-rotate-45"
			])}
		></div>
		<div
			class={cn([
				'w-4/5 h-[1px] ml-auto rounded bg-grayscale_01',
				'absolute left-0 right-0',
				'top-1/2 translate-y-1/2',
				'transition-all duration-300',
				"group-data-[state='active']/nav:w-0"
			])}
		></div>
		<div
			class={cn([
				'w-full h-[1px] rounded bg-grayscale_01',
				'absolute left-0 right-0',
				'top-full translate-y-1/2',
				'transition-all duration-300',
				"group-data-[state='active']/nav:top-1/2",
				"group-data-[state='active']/nav:rotate-45"
			])}
		></div>
	</div>
</button>
