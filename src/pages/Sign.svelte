<script>
	import Button from 'DS/Components/Button/Default.svelte';
	import Input from 'DS/Components/Input/Default.svelte';
	import { checkEmail } from '../api/Auth';
	let email;

	const handleCheckEmail = () => {
		checkEmail(email)
			.then(console.log)
			.catch(console.log);
	};
</script>

<div class="sign">
	<div class="sign-box">
		<div class="logo">Projeto</div>
		<div>소셜 로그인</div>
		<div>
			<Button>Facebook</Button>
		</div>
		<div>
			<Button>Google</Button>
		</div>
		<div>
			<Button>Github</Button>
		</div>
		<Input label="이메일" placeholder="이메일" bind:value={email}/>
		<Button handleClick={handleCheckEmail}>로그인 혹은 회원가입</Button>
	</div>
</div>

<style></style>