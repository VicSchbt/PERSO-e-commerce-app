<script lang="ts">
	import ProductsList from '$components/product/ProductsList.svelte';

	export let data;

	$: ({ category, products } = data);
</script>

<main class="category">
	<h1 class="category__title">{category}</h1>
	<ProductsList {products} />
</main>

<style lang="scss">
	.category {
		padding: 2rem;
	}
</style>
