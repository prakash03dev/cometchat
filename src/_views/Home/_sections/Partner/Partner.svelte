<script>
	import Container from '@/_comps/layouts/Container.svelte';
	import Section from '@/_comps/layouts/Section.svelte';
	import PartnerInfo from './_comps/PartnerInfo.svelte';
	import PartnerContent from './_comps/PartnerContent.svelte';
</script>

<Section id="partner" className="bg-grayscale_dark_01">
	<Container>
		<PartnerInfo />
		<PartnerContent />
	</Container>
</Section>
