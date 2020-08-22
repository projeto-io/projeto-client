<script>
	import Button from '../../Components/Button/Default.svelte'
	export let opt, title, description, buttons, is_show = false;
	const { dimmed, x_btn } = opt;

	const cancel = () => {
	  is_show = false;

	}
	const confirm = () => {
	  is_show = false
	}

</script>
{#if is_show}
	<div>
		<div class="title">{title}</div>
		<div class="description">{description}</div>
		<div class="buttons">
			{#each buttons as { text }, i}
			{/each}
		</div>
	</div>
{/if}