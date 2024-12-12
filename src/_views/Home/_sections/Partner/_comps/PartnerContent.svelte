<script lang="ts">
	import { cn, tv } from '@/_utils/tailwind.utils';
	import { partnetContents } from '../_datas/partnet.data';
	import ContentWrap from './_comps/ContentWrap.svelte';

	interface Props {
		className?: string;
	}
	const { className = '' } = $props();

	const partnetContent = tv({
		base: ['flex flex-wrap gap-y-14 justify-between w-full mt-16', 'lg:flex lg:mt24']
	});
</script>

<div class={partnetContent({ class: className })}>
	{#each partnetContents as item}
		<ContentWrap {...item}></ContentWrap>
	{/each}
</div>
