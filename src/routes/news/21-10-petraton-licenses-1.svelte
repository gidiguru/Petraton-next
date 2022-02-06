<script context="module">

  import { browser, dev } from '$app/env';
  import Aside from '$lib/aside/Aside.svelte';		
  
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
    <!-- header -->
    
    <main class="mt-10">

      <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style="height: 24em;">
        <div class="absolute left-0 bottom-0 w-full h-full z-10"
          style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
        <img img src="https://source.unsplash.com/collection/4781311/1000x500?sig=1" alt="news" class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a href="#"
            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">License RIghts</a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            Petraton Granted Additional Rights in West Africa Frontier Lithium Belt
          </h2>
          <div class="flex mt-3">
            <div>
              <!-- <p class="font-semibold text-gray-200 text-sm"> Ladi Delano </p> -->
              <p class="font-semibold text-gray-400 text-xs"> October 22, 2021 </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
            <!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
            <p class="leading-relaxed">Petraton is pleased to announce that it has awarded two additional mineral exploration licenses in Oyo State by the Federal Republic of Nigeria.</p>
          </div>
    

          <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
            <!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
            <p class="leading-relaxed">Petraton has now has exploration rights to over 1000 sq. km within an area with active artisanal mining of gold, tantalum and industrial minerals. The 8 licences are located 150km away from the Port of Lagos, by road. </p>
          </div>

          <img class="pb-6" src="/img/Licenses-2021.png" alt="Petraton Licenses 2021" >
    
          <div class="flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0">
            <!-- <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Mineral Exploration</h2> -->
            <p class="leading-relaxed">A systematic geological survey tagged "Project Ouriel" has commenced over the area in June 2021 to determine the prospective areas of lithium mineralization within these licenses.</p>
          </div>
          <div class="w-full flex-grow sm:pl-6 mt-6 mb-6 sm:mt-0 items-stretch">
            <Aside />     
          </div>
      </div>
    </main> 
    <!-- main ends here -->

  </div>