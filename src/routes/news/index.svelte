<script context="module">

import { browser, dev } from '$app/env';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
// export const hydrate = dev;

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const router = browser;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;


// import all markdown files from ./posts and turn it into an array
const posts = Object.entries(import.meta.globEager('./*.md'))
	  .map(([, post]) => post.metadata)
	  .sort((a, b) => (a.created < b.created ? 1 : -1))
</script>


<svelte:head>
	<title>News</title>
</svelte:head>

<div class="content">
	<h1>News</h1>
</div>

  
  <div class="container mx-auto flex flex-wrap py-6">

	<!-- Posts Section -->
	<section class="w-full md:w-2/3 flex flex-col items-center px-3">

		{#each posts as post}
		<article class="flex flex-col shadow my-4">
			<!-- Article Image -->
			<a href="/news/{post.slug}" class="hover:opacity-75">
				<img src="https://source.unsplash.com/collection/4781311/1000x500?sig=1">
			</a>
			<div class="bg-white flex flex-col justify-start p-6">
				<a href="/news/{post.slug}" class="text-blue-700 text-sm font-bold uppercase pb-4">{post.tags.slice(0)}</a>
				<a href="/news/{post.slug}" class="text-blue-900 text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>
				<p href="/news/{post.slug}" class="text-blue-900 text-sm pb-3">
					<!-- By 
					<a href="#" class="font-semibold hover:text-gray-800">{post.author}</a>  -->
					Published on {post.date}
				</p>
				<a href="/news/{post.slug}" class="text-blue-900 pb-6">{post.excerpt}</a>
				<a href="/news/{post.slug}" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
			</div>
		</article>
		{/each}

		<!-- Pagination -->
		<!-- <div class="flex items-center py-8">
			<a href="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
			<a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
			<a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
		</div> -->

	</section>

	<!-- Sidebar Section -->
	<aside class="w-full md:w-1/3 flex flex-col items-center px-3">

		<div class="w-full bg-white shadow flex flex-col my-4 p-6">
			<p class="text-xl font-semibold pb-5">About Us</p>
			<p class="pb-2">Petraton is a mining startup focused on the search and discovery of critical minerals important for the modern technology industry</p>
			<a href="/about" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
				Get to know us
			</a>
		</div>

		<!-- <div class="w-full bg-white shadow flex flex-col my-4 p-6">
			<p class="text-xl font-semibold pb-5">Instagram</p>
			<div class="grid grid-cols-3 gap-3">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8">
				<img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9">
			</div>
			<a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
				<i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
			</a>
		</div> -->

	</aside>

</div>

  <!-- pagination -->
  <!-- <div>
	{#if page > 1}
	  <a href={`/blog/post?page=${page - 1}`}>back</a>
	{/if}
	{#if posts.length === PAGE_SIZE}
	  <a href={`/blog/post?page=${page + 1}`}>next</a>
	{/if}
  </div> -->