<script context="module">
	import { browser, dev } from '$app/env';

	// // we don't need any JS on this page, though we'll load
	// // it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// // ...but if the client-side router is already loaded
	// // (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// // since there's no dynamic data here, we can prerender
	// // it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Careers</title>
</svelte:head>

<div class="content">
	<h1>The Community</h1>

	<div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
		<!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
		<p class="leading-relaxed">Petraton operates within the Ibarapa Kingdom which is covered with lush green vegetation, rolling hills, lakes and rivers which are a marvel of nature. A notable tourist attraction is the Idere Hills which rises 900 m above sea level and was an ancient settlement of the Ibarapa people, who have historically been farmers, fisher-people, hunters, and traders.</p>
	  </div>

	  <img class="pb-6" src="/img/ibarapa-community.jpeg" alt="ibarapa-community">

	  <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
		<!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
		<p class="leading-relaxed">Ibarapa is located within Oyo State SW Nigeria, and is traditionally made up of seven principal towns known as Ibarapa Meje ( The seven Ibarapas, these towns include Eruwa, Lanlate, Igboora, Idere, Aiyete, Tapa and lastly Igangan.  These towns are known for notable economic activity including textile, tie & dye (locally known as adire), woodworking, soap making, pottery, sculpture, and blacksmithing.</p>
	  </div>

	  <img class="pb-6" src="/img/ibarapa-map.png" alt="ibarapa-map">

	  <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
		<!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
		<p class="leading-relaxed">The Ibarapas have the highest rate of twin births in the world, and Igbo-Ora is nick-named “The Twin Capital of the World”. Depicted in numerous works of art are the history, culture and tradition of these ancient people.</p>
	  </div>

	  <img class="pb-6 w-screen" src="/img/ibarapa-twins.jpg" alt="ibarapa-twins">

	  <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
		<!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
		<p class="leading-relaxed mb-3">Petraton pledges to uphold the values of the people and protect the environment in which we live and work.  Our near-term focus covers: </p>
		<ul>
		<li class="ml-6">•	healthcare </li>
		<li class="ml-6">•	potable water </li>
		<li class="ml-6">•	infrastructure </li>
		<li class="ml-6">•	education </li>
		<li class="ml-6">•	cultural preservation </li>
		</ul>
	  </div>
	  
	  <p class="leading-relaxed mb-3">We hope you will follow us on our exciting journey to improve our world and meet the needs of the next generations.</p>

	  <a href="/projects" alt=""><button class="flex mx-auto mt-1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Projects</button></a>
	</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
