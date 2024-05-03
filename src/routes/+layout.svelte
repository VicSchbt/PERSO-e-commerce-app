<script>
	import '$styles/global.scss';
	import Header from '$components/global/Header.svelte';

	export let data;

	$: categories = data.categories;
</script>

<Header {categories} />

<slot />
