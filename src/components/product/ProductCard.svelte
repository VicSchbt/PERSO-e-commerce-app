<script lang="ts">
	import type { Product } from '$types/Product';

	export let product: Product;

	$: ({ title, price, category, image } = product);
</script>

<li class="product-card">
	<img src={image} alt={title} class="product-card__bg" />
	<div class="product-card__infos">
		<p class="infos__category">
			{category}
		</p>
		<h2 class="infos__title">{title}</h2>
	</div>
</li>

<style lang="scss">
	.product-card {
		position: relative;
		list-style: none;
		padding: 2rem;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		&__bg {
			width: 100%;
		}
		&__infos {
			padding: 1rem;
			border-radius: 1rem;
			position: absolute;
			background-color: #00000070;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}
	}

	.infos {
		&__category {
			color: white;
			font-family: 'IBM Plex Mono', monospace;
			font-size: 0.75rem;
			border: 1px solid white;
			padding: 0.5rem;
			border-radius: 2rem;
		}
		&__title {
			color: white;
			font-family: 'IBM Plex Mono', monospace;
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
</style>
