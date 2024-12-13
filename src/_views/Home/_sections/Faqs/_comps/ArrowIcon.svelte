<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
	}
	const { className = '', ...rest }: Props & Omit<SvelteHTMLElements['svg'], 'class'> = $props();
</script>

<svg
	class={className}
	width="20"
	height="21"
	viewBox="0 0 20 21"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...rest}
>
	<g opacity="0.74">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.41075 8.24408C4.73618 7.91864 5.26382 7.91864 5.58926 8.24408L10 12.6548L14.4107 8.24408C14.7362 7.91864 15.2638 7.91864 15.5893 8.24408C15.9147 8.56951 15.9147 9.09715 15.5893 9.42259L10.5893 14.4226C10.2638 14.748 9.73618 14.748 9.41075 14.4226L4.41075 9.42259C4.08531 9.09715 4.08531 8.56951 4.41075 8.24408Z"
			fill="#14131D"
		/>
	</g>
</svg>
