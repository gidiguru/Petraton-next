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
	<title>Projects</title>
</svelte:head>

<div class="content">
	<div class="h-20 mt-10">		
		<h1 class="h-auto">Our Projects</h1>	
	</div>	
	<div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
		<!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
		<p class="leading-relaxed">Petraton licenses are underlain by Archean rocks which are known to hold gold mineralization in both Nigeria and its conjugate  Borborema trend (Brazil)
		</p>
	  </div>
	  <img src="/img/nigeria-geology.png" alt="nigeria-geology">
	  <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
		<!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
		<p class="leading-relaxed">Gemstones such as beryl, precious metals like gold, and industrial minerals like tantalite, have been artisanally mined in the area.
		</p>
		<p class="leading-relaxed">A geological survey has identifed 10 pegmatite deposits. Grade and size of each deposit is being determined.
		</p>
	  </div>
	  <img src="/img/pegmatites.png" alt="pegmatites">


	  <div class="h-16 mt-10">		
		<h1 class="h-auto">Our Products</h1>	
	</div>	

	  <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
		<p class="leading-relaxed">Petraton licenses host several quartz and feldspar products which are important for the glass, ceramic, electronics, and battery industries.
		</p>
	  </div>

	  <img src="/img/product.png" alt="product">

	<div class="h-16 mt-10">		
		<h1 class="h-auto">Our Timeline</h1>	
	</div>	

	<section class="text-gray-600 body-font">

			<img src="/img/exploration-stages.png" alt="exploration-stages">

		<div class="container px-5 py-2 mx-auto flex flex-wrap">
		  <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
			<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
			  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
			</div>
			<div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">0</div>
			<div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
			  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
				  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
				</svg>
			  </div>
			  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
				<h2 class="font-medium title-font text-gray-900 mb-1 text-xl">License Acquisition</h2>
				<p class="leading-relaxed">We have secured exclusive rights to explore and mine in a prolific pegmatite province that is wholly unexplored.</p>
			  </div>
			</div>
		  </div>
		  <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
			<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
			  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
			</div>
			<div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
			<div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
			  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
				  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
				</svg>
			  </div>
			  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
				<h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2>
				<p class="leading-relaxed">We are using modern mineral exploration techniques to identify areas of mineralization to support the modern technology and construction industries</p>
			  </div>
			</div>
		  </div>
		  <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
			<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
			  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
			</div>
			<div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
			<div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
			  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
				  <circle cx="12" cy="5" r="3"></circle>
				  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
				</svg>
			  </div>
			  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
				<h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mine Planning</h2>
				<p class="leading-relaxed">We will develop mine plans that meet our customers' expectations of grade and quality, while protecting and enhancing the envionment in which we operate.</p>
			  </div>
			</div>
		  </div>
		  <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
			<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
			  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
			</div>
			<div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
			<div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
			  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
				  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
				  <circle cx="12" cy="7" r="4"></circle>
				</svg>
			  </div>
			  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
				<h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Extraction & Remediation</h2>
				<p class="leading-relaxed">We will extract minerals in a responsible manner, and ensure that the next generation has a great place to live in.</p>
			  </div>
			</div>
		  </div>
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
