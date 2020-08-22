<script>
	export let placeholder, value = '', label = '';

	const handleInput = e => value = e.target.value;
</script>

<label>
	{#if label}
		<div>{label}</div>
	{/if}
	<textarea
		{placeholder}
		on:input={handleInput}
	>{value}</textarea>
</label>

<style>

</style>