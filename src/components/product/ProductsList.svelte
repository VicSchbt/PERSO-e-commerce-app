<script lang="ts">
	import type { Product } from '$types/Product';
	import ProductCard from './ProductCard.svelte';

	export let products: Product[];
</script>

<ul class="products-list">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</ul>

<style lang="scss">
	.products-list {
		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
</style>
