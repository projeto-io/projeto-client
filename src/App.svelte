<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
</script>

<main>
	<Router {routes}/>
</main>

<style type="text/scss">
	body {
		background-color: #000;
	}
</style>