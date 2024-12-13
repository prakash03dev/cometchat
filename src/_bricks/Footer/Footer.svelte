<script lang="ts">
	import { cn } from '@/_utils/tailwind.utils';
	import { footerData, quickLinksData } from './_datas/footer.data';
	import Logo from '@/_comps/common/Logo.svelte';
	import Container from '@/_comps/layouts/Container.svelte';
	import Menu from './_comps/Menu.svelte';

	let activeMenuIndex: null | number = $state(null);
	const onToggleMenu = (index: number) => {
		if (activeMenuIndex === index) {
			activeMenuIndex = null;
		} else {
			activeMenuIndex = index;
		}
	};
</script>

<footer class="bg-grayscale_dark_01">
	<Container className="flex flex-col gap-8">
		<Logo />
		<div class={cn(['grid grid-cols gap-8'], ['lg:grid-cols-[1fr_auto]'])}>
			<div class={cn(['grid grid-cols-1 gap-8'], ['lg:grid-cols-3'])}>
				{#each footerData as menu, i}
					<Menu
						index={i}
						title={menu.title}
						submenu={menu.submenu}
						onToggle={onToggleMenu}
						data-state={activeMenuIndex === i ? 'active' : 'inactive'}
					/>
				{/each}
			</div>
			<div class={cn(['grid grid-cols-1 gap-8 h-max'])}>
				{#each quickLinksData as menu, i}
					<Menu
						index={i + footerData.length - 1}
						title={menu.title}
						submenu={menu.submenu}
						onToggle={onToggleMenu}
						data-state={activeMenuIndex === i + footerData.length - 1 ? 'active' : 'inactive'}
					/>
				{/each}
			</div>
		</div>
	</Container>
</footer>
