<script>
	import Input from 'DS/Components/input/Default.svelte';
	import Button from 'DS/Components/button/Default.svelte';
	import { signIn } from '../api/Auth';

	let email = 'ocipap0531@gmail.com', password = '~123123123', name = 'PAPICO';

	const handleSubmit = () => {
		return signIn({ email, password })
			.then(console.log)
			.catch(console.log);
	};

</script>

<div class="signin">
	<div class="signin-box">
		<div class="logo">Projeto</div>
		<div>{name} 님 돌아오셨군요.</div>
		<Input label="이메일" placeholder="이메일" bind:value={email}/>
		<Input type="password" label="비밀번호" placeholder="비밀번호" bind:value={password}/>
		<Button handleClick={handleSubmit}>로그인</Button>

	</div>

</div>