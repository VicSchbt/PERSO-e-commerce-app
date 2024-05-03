<script lang="ts">
	import ProductsList from '$components/product/ProductsList.svelte';

	export let data;

	$: console.log(data.products);
</script>

<ProductsList products={data.products} />
