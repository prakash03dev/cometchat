<script>
	import Logo from '@/_comps/common/Logo.svelte';
	import Container from '@/_comps/layouts/Container.svelte';
	import { cn } from '@/_utils/tailwind.utils';
</script>

<footer>
	<Container>
		<Logo />
		<div class={cn([''])}></div>
	</Container>
</footer>
