<script>
	import Header from "./components/Header.svelte";
	import CurrentWeather from "./components/CurrentWeather.svelte";
</script>
<style>
	:global(body){
		background: linear-gradient(to right, #cdffd8, #94b9ff);
	}
</style>
<main>
	<Header/>
	<CurrentWeather/>
</main>
