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
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About Us</h1>

	<section class="text-gray-600 body-font">
		<div class="container px-5 py-5 mx-auto">
		  <div class="flex flex-col text-center w-full mb-10">

			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">Petraton is a mining startup focused on the search and discovery of critical minerals important to the modern technology industry. We hold exclusive rights to explore and mine all minerals within 1000 square kilometers of an emerging lithium pegmatite province in western Nigeria.</p>
		  </div>
		  
		  <img src="/img/Petraton-licenses.png" alt="Petraton-licenses">

		  <div class="flex flex-wrap">
			<div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
			  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Integrated Exploration</h2>
			  <p class="leading-relaxed text-base mb-4">We are using satellite, aerial, and ground data to map surface geology and minerals associated with economic minerals of interest.</p>
			  <!-- <a class="text-indigo-500 inline-flex items-center">Learn More
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
				  <path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			  </a> -->
			</div>
			<div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
			  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Data Driven</h2>
			  <p class="leading-relaxed text-base mb-4">We are building a private geoscience database that will inform strategic decisions and reduce exploration and mining risk.</p>
			  <!-- <a class="text-indigo-500 inline-flex items-center">Learn More
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
				  <path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			  </a> -->
			</div>
			<div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
			  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Economic Potential</h2>
			  <p class="leading-relaxed text-base mb-4">We will predict the economic occurrences of these minerals and feed the domestic reserves, production, processing, and recycling supply chains.</p>
			  <!-- <a class="text-indigo-500 inline-flex items-center">Learn More
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
				  <path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			  </a> -->
			</div>
			<div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
			  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Partnerships</h2>
			  <p class="leading-relaxed text-base mb-4">We partner with the industry, government, and communities to support management of these critical resources and protect the environment.</p>
			  <!-- <a class="text-indigo-500 inline-flex items-center">Learn More
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
				  <path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			  </a> -->
			</div>
		  </div>
		  <a href="/projects" alt=""><button class="flex mx-auto mt-1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Projects</button></a>
		</div>
	  </section>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
