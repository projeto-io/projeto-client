<script>
	export let type = 'input', placeholder, value = '', label = '';

	const handleInput = e => value = e.target.value
</script>

<label>
	{#if label}
		<div>{label}</div>
	{/if}
	<input {type} {placeholder} {value}
		on:input={handleInput}
	/>
</label>