<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	interface Props {
		className?: string;
	}
	const { className = '' }: Props = $props();
</script>

<a class={cn(['font-600 text-14 text-grayscale_01'], [className])} href="#"> Login </a>
