<script>
	import Page from '@/_comps/layouts/Page.svelte';
	import Banner from './_sections/Banner/Banner.svelte';
	import Partner from './_sections/Partner/Partner.svelte';
	import Clients from './_sections/Clients/Clients.svelte';
	import Faqs from './_sections/Faqs/Faqs.svelte';
	import Programs from './_sections/Programs/Programs.svelte';
</script>

<Page className="bg-grayscale_dark_01">
	<Banner />
	<Clients />
	<Partner />
	<Programs />
	<Faqs />
</Page>
