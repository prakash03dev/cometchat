<script>
	import { cn } from '@/_utils/tailwind.utils';
	import { menuData } from './_datas/menu.data';
	import Container from '@/_comps/layouts/Container.svelte';
	import BrandLogo from './_comps/BrandLogo.svelte';
	import LoginBtn from './_comps/LoginBtn.svelte';
	import Burger from './_comps/Burger.svelte';
	import MenuItem from './_comps/MenuItem.svelte';
	import bg_blur_mobile from './_assets/bg_blur_mobile.png';
	import Button from '@/_comps/form/Button.svelte';

	let scrollY = $state(0);
	let isHeaderActive = $derived(scrollY > 30);
	let isNavActive = $state(false);

	const onToggleBurger = () => {
		isNavActive = !isNavActive;
		document.body.classList.toggle('no-scroll');
	};
</script>

<svelte:window bind:scrollY />

<header
	class={cn(
		['group/header'],
		[
			'fixed top-0 left-0 right-0 z-40',
			'w-full py-4 bg-grayscale_12 bg-opacity-0',
			'border-b border-grayscale_01 border-opacity-0',
			'transition-[background-color] duration-500',
			'data-[theme="active"]:bg-opacity-95',
			'data-[theme="active"]:border-opacity-5'
		],
		['lg:py-2']
	)}
	data-theme={isHeaderActive ? 'active' : 'inactive'}
>
	<Container pyEnabled={false}>
		<nav
			class={cn(['group/nav', 'flex items-center justify-between gap-4'])}
			data-name="nav"
			data-state={isNavActive ? 'active' : 'inactive'}
		>
			<BrandLogo />
			<LoginBtn className={cn(['ml-auto', 'lg:order-1 lg:ml-0'])} />
			<Button className={cn(['hidden order-1', ['lg:block']])}>Schedule a demo</Button>
			<Burger onClick={onToggleBurger} />

			<ul
				class={cn(
					[
						'absolute inset-0 -z-1 overflow-y-auto -translate-y-full',
						'w-full h-screen pt-32 px-6 flex flex-col gap-5',
						'bg-grayscale_dark_01',
						'transition-transform duration-500 ease-in-out',
						"group-data-[state='active']/nav:translate-y-0"
					],
					[
						'lg:flex-row lg:items-center lg:justify-center lg:gap-12',
						'lg:relative lg:z-0 lg:w-full lg:h-full lg:pt-0 lg:px-0',
						'lg:translate-y-0 lg:bg-none lg:bg-transparent',
						'lg:overflow-visible'
					]
				)}
			>
				{#each menuData as item}
					<MenuItem id={item.id} href={item.href} title={item.title} />
				{/each}

				<Button className={cn(['mt-auto mb-5 w-full lg:hidden'])}>Schedule a demo</Button>
				<img
					class={cn(['absolute inset-0 w-full h-full -z-1'], ['lg:hidden'])}
					src={bg_blur_mobile}
					alt="background blur"
				/>
			</ul>
		</nav>
	</Container>
</header>
