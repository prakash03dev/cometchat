<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		className?: string;
	}
	const { className = '', ...rest }: Props & Omit<SvelteHTMLElements['svg'], 'class'> = $props();
</script>

<svg
	width="16"
	height="16"
	viewBox="0 0 16 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...rest}
>
	<g opacity="0.84">
		<path
			d="M14.3222 8.03901C14.3222 4.48279 11.4743 1.5999 7.96112 1.5999C4.44797 1.5999 1.6 4.48279 1.6 8.03901C1.6 11.253 3.92617 13.9168 6.9672 14.3999V9.90032H5.35207V8.03901H6.9672V6.6204C6.9672 5.00659 7.91687 4.11518 9.36989 4.11518C10.0658 4.11518 10.7938 4.24094 10.7938 4.24094V5.82557H9.99169C9.20148 5.82557 8.95505 6.32192 8.95505 6.83114V8.03901H10.7193L10.4372 9.90032H8.95505V14.3999C11.9961 13.9168 14.3222 11.253 14.3222 8.03901Z"
			fill="#FAFAFF"
		/>
	</g>
</svg>
