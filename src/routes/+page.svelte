<script lang="ts">
	import ProductsList from '$components/product/ProductsList.svelte';

	export let data;
</script>

<main class="home">
	<ProductsList products={data.products} />
</main>

<style lang="scss">
	.home {
		padding: 2rem;
	}
</style>
