import type { Product } from '$types/Product';
import type { ServerLoadEvent } from '@sveltejs/kit';

const CATEGORY_PRODUCTS_URL = 'https://fakestoreapi.com/products/category/';

export async function load({ params }: ServerLoadEvent) {
	const category = params.slug;

	const res = await fetch(CATEGORY_PRODUCTS_URL + category);
	const json = await res.json();

	return {
		category: category,
		products: json as Product[]
	};
}
