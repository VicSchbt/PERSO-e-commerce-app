const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';

export async function load() {
	const res = await fetch(CATEGORIES_URL);
	const json = await res.json();
	return {
		categories: json as string[]
	};
}
