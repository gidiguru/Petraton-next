<script context="module">
	import { browser, dev } from '$app/env';

	// // we don't need any JS on this page, though we'll load
	// // it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// // ...but if the client-side router is already loaded
	// // (i.e. we came here from elsewhere in the app), use it
	// export const router = browser;

	// // since there's no dynamic data here, we can prerender
	// // it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About Us</h1>

	<p>
		Petraton is a mining startup focused on the search and discovery of critical minerals important for the modern technology industry. The company integrates geoscience and geospatial datasets with modern exploration techniques to inform the exploration lifecycle and make faster, better-informed decisions. We:
	</p>
	<ul>

	</ul>
	<ul>
		•	Use satellite, aerial, and ground data to map surface geology and minerals associated with economic minerals of interest.
	</ul>
	<ul>
		•	Capture geospatial, geological, geophysical, and geochemical information to train exploration models that are calibrated to known mineral occurrences and scale results over entire regions. 
	</ul>
	<ul>
		•	Build a private geoscience database that will inform strategic decisions and reduce exploration and mining risk.
	</ul>
	<ul>
		•	Predict the economic occurrences of these minerals and feed the domestic reserves, production, processing, and recycling supply chains.
	</ul>
	<ul>
		•	Provide vital information to the industry, government, and communities to support management of these critical resources and protect the environment.
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
