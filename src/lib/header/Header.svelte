<script>
	import { page } from '$app/stores';
	import logo from '/img/Petraton.svg';
	// import NAV from './Nav.svelte';
	// import NAVITEM from './NavItem.svelte';
	// import Sidebar from './Sidebar.svelte'

	let open = false


	import { onMount } from "svelte";

// Show mobile icon and display menu
let showMobileMenu = false;

// List of navigation items
const navItems = [

  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
   { label: "The Community", href: "/community" }, 
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" }
];

// Mobile menu click event handler
const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

// Media match query handler
const mediaQueryHandler = e => {
  // Reset mobile state
  if (!e.matches) {
	showMobileMenu = false;
  } else {showMobileMenu = true;}
};

// Attach media query listener on mount hook
onMount(() => {
  const mediaListener = window.matchMedia("(max-width: 767px)");
  mediaListener.addListener(mediaQueryHandler);
//   MediaQueryList.addListener(mediaQueryHandler);
});

</script>

<header>
<nav>
	<div class="inner">
		<div class="corner">
			<a href="/">
				<img src={logo} alt="Petraton" class="w-10 " />
			</a>
		</div>	
	  <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
	
		<div class="middle-line"></div>
		
	  </div>
	  <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
		{#each navItems as item}
		  <li>
			<a href={item.href}>{item.label}</a>
		  </li>
		{/each}
	  </ul>
	</div>
  </nav>
  </header>


  <style>
	nav {
	  background-color: rgba(0, 0, 0, 1);
	  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
	  height: 60px;
	}
  
	.inner {
	  max-width: 980px;
	  padding-left: 30px;


	  margin: auto;
	  box-sizing: border-box;
	  display: flex;
	  align-items: center;
	  height: 100%;
	}
  
	.mobile-icon {
	  width: 25px;
	  height: 14px;
	  position: relative;
	  cursor: pointer;
	}
  
	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
	  content: "";
	  position: absolute;
	  width: 100%;
	  height: 2px;
	  background-color: #fff;
	  transition: all 0.4s;
	  transform-origin: center;
	}
  
	.mobile-icon:before,
	.middle-line {
	  top: 0;
	}
  
	.mobile-icon:after,
	.middle-line {
	  bottom: 0;
	}
  
	.mobile-icon:before {
	  width: 66%;
	}
  
	.mobile-icon:after {
	  width: 33%;
	}
  
	.middle-line {
	  margin: auto;
	}
  
	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
	  width: 100%;
	}
  
	.mobile-icon.active:before,
	.mobile-icon.active:after {
	  top: 50%;
	  transform: rotate(-45deg);
	}
  
	.mobile-icon.active .middle-line {
	  transform: rotate(45deg);
	}
  
	.navbar-list {
	  display: none;
	  width: 100%;
	  height: 100%;
	  justify-content: space-between;
	  margin: 0;
	  padding: 0 40px 0 0;
	  position: relative;
	  z-index: 10000;
	}
  
	.navbar-list.mobile {
	  background-color: rgba(0, 0, 0, 1);
	  position: absolute;
	  display: block;
	  height: calc(100% - 60px);
	  bottom: 0;
	  left: 0;
	}
  
	.navbar-list li {
	  list-style-type: none;
	  position: relative;
	}
  
	.navbar-list li:before {
	  content: "";
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  height: 1px;
	  background-color: #424245;
	}
  
	.navbar-list a {
	  color: #fff;
	  text-decoration: none;
	  display: flex;
	  height: 45px;
	  align-items: center;
	  padding: 0 10px;
	  font-size: 13px;
	}
  
	@media (max-width: 766px) {
		.inner {

		justify-content: space-around;
		padding-left: 85px;
	}
	.mobile-icon {
	  display: flex;
	  padding-right: 10px;
	}
	}

	@media only screen and (min-width: 767px) {
		
	  .mobile-icon {
		display: none;
	  }
  
	  .navbar-list {
		display: flex;
		padding: 0;
	  }
  
	  .navbar-list a {
		font-size:20px;
		display: inline-flex;
	  }
	}
  </style>





<!-- <NAV logo={logo} bind:sidebar={open}>
	
	<NAVITEM  segment={'/'}>Home</NAVITEM>
	<NAVITEM  segment={'about'}>About</NAVITEM>
	<NAVITEM  segment={'projects'}>Projects</NAVITEM>
	<NAVITEM  segment={'team'}>Team</NAVITEM>
	<NAVITEM  segment={'careers'}>Careers</NAVITEM>
	<NAVITEM  segment={'news'}>News</NAVITEM>
	<NAVITEM  segment={'contact'}>Contact</NAVITEM>
 </NAV>
 <Sidebar bind:open/> -->


<!-- <header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Petraton" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/projects'}><a sveltekit:prefetch href="/projects">Projects</a></li>
			<li class:active={$page.path === '/team'}><a sveltekit:prefetch href="/team">Team</a></li>
			<li class:active={$page.path === '/careers'}><a sveltekit:prefetch href="/careers">Careers</a></li>
			<li class:active={$page.path === '/news'}><a sveltekit:prefetch href="/news">News</a></li>
			<li class:active={$page.path === '/contact'}><a sveltekit:prefetch href="/contact">Contact</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
	</div>
</header> -->

<!-- <style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>

 -->
