<script>
	import { cn } from '@/_utils/tailwind.utils';
	import Input from '@/_comps/form/Input/Input.svelte';
	import InputField from '@/_comps/form/Input/InputField.svelte';
	import Label from '@/_comps/form/Input/Label.svelte';
	import H3 from '@/_comps/typography/H3.svelte';
	import Button from '@/_comps/form/Button.svelte';
</script>

<div class={cn(['min-h-[300px] p-5 relative isolate'])}>
	<div class="flex flex-col gap-6 relative">
		<H3 className="text-grayscale_01">Became a partner</H3>
		<form class="flex flex-col gap-4">
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
			<Button>Submit application</Button>
		</form>
	</div>

	<div
		class={cn([
			'absolute inset-0 w-full h-full rounded-3xl',
			'bg-grayscale_01 bg-opacity-[18%] backdrop-blur-[100]',
			'border-grayscale_01 rounded-3xl border border-opacity-5'
		])}
	></div>
</div>
