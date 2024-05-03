<script lang="ts">
	export let categories: string[] = [];
</script>

<header class="header">
	<a href="/" class="header__logo">E-<span>SHOP</span></a>

	<nav class="header__nav">
		<ul class="header__nav-list">
			{#each categories as category, index}
				<li class="header__nav-item">
					<a href={`/category/${category.replaceAll(' ', '%20')}`} class="header__nav-link"
						>{category}</a
					>
				</li>
				{#if index < categories.length - 1}
					<div class="header__nav-divider"></div>
				{/if}
			{/each}
		</ul>
	</nav>

	<a href="/cart" class="header__cart-link">
		<img src="/src/assets/icons/shopping-cart-icon.svg" alt="See Cart" class="header__cart-icon" />
	</a>
</header>

<style lang="scss">
	@import './Header.scss';
</style>
