<script>
	import { cn } from '@/_utils/tailwind.utils';
	import Input from '@/_comps/form/Input/Input.svelte';
	import InputField from '@/_comps/form/Input/InputField.svelte';
	import Label from '@/_comps/form/Input/Label.svelte';
	import H3 from '@/_comps/typography/H3.svelte';
	import Button from '@/_comps/form/Button/Button.svelte';
</script>

<div class={cn(['relative isolate', 'p-5 h-max'], ['lg:p-8 lg:max-w-[540px]'])}>
	<div class={cn(['flex flex-col gap-6'], ['lg:gap-8'])}>
		<H3 className="text-grayscale_01">Became a partner</H3>
		<form class="flex flex-col gap-5">
			<InputField>
				<Label for="FULL_NAME">Full name</Label>
				<Input id="FULL_NAME" placeholder="Enter your fullname..." name="FULL_NAME" required />
			</InputField>
			<InputField>
				<Label for="EMAIL_ADDRESS">Email address</Label>
				<Input id="EMAIL_ADDRESS" placeholder="Enter your email..." name="EMAIL_ADDRESS" required />
			</InputField>
			<InputField>
				<Label for="COMPANY_NAME">Company name</Label>
				<Input
					id="COMPANY_NAME"
					placeholder="Enter your company name..."
					name="COMPANY_NAME"
					required
				/>
			</InputField>
			<Button className="mt-1.5">Submit application</Button>
		</form>
	</div>

	<div
		class={cn([
			'absolute inset-0 -z-1 w-full h-full rounded-3xl',
			'bg-grayscale_01 bg-opacity-[8%] backdrop-blur-[100px]',
			'border-grayscale_01 rounded-3xl border border-opacity-5'
		])}
	></div>
</div>
