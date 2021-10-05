<script context="module">

import { browser, dev } from '$app/env';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const hydrate = dev;

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


  <!-- render each post -->
  <div>
	<div class="p-10">
		<div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mr-5 mb-5">	  
	{#each posts as post}
			<!-- card -->
			<div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
				<a href={`/news/${post.slug}`}>>
					<!-- <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/> -->
					<div class="bg-white w-full p-4">
						<p class="text-indigo-500 text-2xl font-medium">
							{post.title}
						</p>
						<!-- <p class="text-gray-800 text-sm font-medium mb-2">
							A comprehensive guide about online education.
						</p> -->
						<p class="text-gray-600 font-light text-md">
						{post.excerpt}
							<a class="inline-flex text-indigo-500" href={`/news/${post.slug}`}>>Read More</a>
						</p>
						<div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
							<span class="m-1 px-2 py-1 rounded bg-indigo-500">
								{post.tags.slice(0)}
							<!-- </span>
							<span class="m-1 px-2 py-1 rounded bg-indigo-500">
								{post.tags.slice(1)}
							</span> -->

						</div>
						<div class="flex items-center mt-2">
							<img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'>
				
							<div class="pl-3">
								<div class="font-medium">
									Ladi Delano
								</div>
								<div class="text-gray-600 text-sm">
									Petraton
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
	{/each}
	</div>
</div>	
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