import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */


const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
        // By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter({
			// default options are shown
            target: '#svelte',
			fallback: null
		})
	},

    preprocess: [mdsvex(mdsvexConfig), preprocess({
        postcss: true
    })]
};

export default config;
