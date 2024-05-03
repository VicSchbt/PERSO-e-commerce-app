<script lang="ts">
	export let categories: string[] = [];
</script>

<header>
	<a href="/"> Logo </a>

	<nav>
		<ul>
			{#each categories as category}
				<li>
					<a href={`/categories/${category}`}>{category}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<a href="/cart">Cart</a>
</header>

<style lang="scss">
	header {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
