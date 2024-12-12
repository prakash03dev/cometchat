<script>
	import Container from '@/_comps/layouts/Container.svelte';
	import Section from '@/_comps/layouts/Section.svelte';
	import Info from './_comps/Info.svelte';
	import Form from './_comps/Form.svelte';
</script>

<Section className="bg-grayscale_dark_01">
	<Container isHero={true}>
		<Info />
		<Form />
	</Container>
</Section>
