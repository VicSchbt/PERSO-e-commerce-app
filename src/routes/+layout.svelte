<script>
	import '$styles/global.scss';
	import Header from '$components/global/Header.svelte';

	export let data;

	$: categories = data.categories;
	$: console.log(data);
</script>

<Header {categories} />
