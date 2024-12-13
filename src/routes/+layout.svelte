<script lang="ts">
	import '../app.css';
	import '../_theme/reset.css';
	import '../_theme/font.css';
	import '../_theme/global.css';
	import Header from '@/_bricks/Header/Header.svelte';
	import Footer from '@/_bricks/Footer/Footer.svelte';
	const { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
