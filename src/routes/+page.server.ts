import type { Product } from '$types/Product';

const ALL_PRODUCTS_URL = 'https://fakestoreapi.com/products';

export async function load() {
	const res = await fetch(ALL_PRODUCTS_URL);
	const json = await res.json();
	return {
		products: json as Product[]
	};
}
