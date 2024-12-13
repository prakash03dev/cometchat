<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';

	interface Props {
		gradientPositionX: string;
		gradientPositionY: string;
	}

	const { gradientPositionX, gradientPositionY }: Props = $props();
</script>

<div
	class={cn([
		'absolute -inset-px pointer-events-none rounded-inherit',
		'opacity-0 group-hover/btn:opacity-100',
		'transition-[opacity,transform] duration-300'
	])}
	style={`background: radial-gradient(100px at ${gradientPositionX} ${gradientPositionY}, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0));`}
></div>
