<script lang="ts">
	import '../app.css';
	import '../_theme/reset.css';
	import '../_theme/font.css';
	import '../_theme/global.css';
	import Header from '@/_bricks/Header/Header.svelte';
	let { children } = $props();
</script>

<Header />
{@render children()}
