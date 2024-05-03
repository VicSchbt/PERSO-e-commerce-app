<script lang="ts">
	export let categories: string[] = [];
</script>

<header class="header">
	<a href="/" class="header__logo">E-<span>SHOP</span></a>

	<nav class="header__nav">
		<ul class="header__nav-list">
			{#each categories as category, index}
				<li class="header__nav-item">
					<a href={`/categories/${category}`} class="header__nav-link">{category}</a>
				</li>
				{#if index < categories.length - 1}
					<div class="header__nav-divider"></div>
				{/if}
			{/each}
		</ul>
	</nav>

	<a href="/cart" class="header__cart-link">
		<img src="src/assets/icons/shopping-cart-icon.svg" alt="See Cart" class="header__cart-icon" />
	</a>
</header>

<style lang="scss">
	.header {
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&__logo {
			// Logo styles
			font-size: 1.5rem;
			font-family: 'Roboto Condensed', sans-serif;
			font-weight: 300;
			color: black;
			text-transform: uppercase;
			text-decoration: none;

			span {
				font-family: 'IBM Plex Mono';
				font-weight: 700;
			}
			&:visited {
				color: black;
			}
		}

		&__nav {
			// Navigation styles
			&-list {
				// Navigation list styles
				display: flex;
				align-items: center;
			}

			&-item {
				// Navigation item styles
				list-style: none;
				padding: 0 2rem;
			}

			&-link {
				// Navigation link styles
				font-size: 0.75rem;
				font-weight: 500;
				font-family: 'Roboto Condensed', sans-serif;
				color: black;
				text-transform: uppercase;
				text-decoration: none;
				&:visited {
					color: black;
				}
			}
			&-divider {
				height: 0.3rem;
				width: 0.3rem;
				border-radius: 0.15rem;
				background-color: beige;
			}
		}

		&__cart-link {
			// Cart link styles
			height: 2rem;
			.header__cart-icon {
				// Cart icon styles
				height: 2rem;
				background-color: black;
				padding: 0.4rem;
				border-radius: 1rem;
			}
		}
	}
</style>
