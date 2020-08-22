<script>
	import Input from 'DS/Components/Input/Default.svelte';
	import Button from 'DS/Components/Button/Default.svelte';
	import { signUp } from '../api/Auth';
	import { every, go, identity, map } from 'fxjs2';

	let name = '조성륜',
		email = 'ocipap0531@gmail.com',
		password = '~123123123',
		check_password = '~123123123',
		nickname = 'PAPICO',
		telephone = '01028415069';

	const handleSubmit = async () => {
		const validation = go(
			[name, email, password, check_password, nickname, telephone],
			map(s => s.trim()),
			every(identity)
		);

		if (password !== check_password) {
			return alert('비밀번호 확인');
		}

		if (!validation) {
			return alert('입력값 확인');
		}
		// TODO validation

		signUp({ email, password, nickname, telephone, name }).then(console.log).catch(console.log);

	};
</script>

<div class="signup">
	<div class="signup-box">
		<div class="logo">Projeto</div>
		<Input placeholder="이름" label="이름" bind:value={name}/>
		<Input placeholder="이메일" label="이메일" bind:value={email}/>
		<Input type="password" placeholder="비밀번호" label="비밀번호" bind:value={password}/>
		<Input type="password" placeholder="비밀번호 확인" label="비밀번호 확인" bind:value={check_password}/>
		<Input placeholder="닉네임" label="닉네임" bind:value={nickname}/>
		<Input placeholder="휴대전화 번호" label="휴대전화 번호" bind:value={telephone}/>
		<div>
			Projeto를 가입함으써 <a href="/#/policy">개인정보 이용약관</a>에 동의합니다.
		</div>
		<Button handleClick={handleSubmit}>회원가입</Button>
	</div>
</div>

<style type="text/scss">
	.signup {
		background-color: #ffffff;
		padding-top: 204px;

		.signup-box {

		}
	}

</style>