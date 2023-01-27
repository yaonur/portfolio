<script>
	import {Router, Link, Route} from "svelte-navigator";
	import {fly} from 'svelte/transition'
	import Header from "./lib/Header.svelte"
	import Sidebar from "./lib/Sidebar.svelte";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import Projects from "./routes/Projects.svelte";
	import Contact from "./routes/Contact.svelte";
	import Success from "./routes/Success.svelte";
	
	let closed = true
	let innerWidth
	
	const toggle = () => {
		console.log("pressed")
		closed = !closed
		
	}
	$:condition = innerWidth > 300;

</script>
<svelte:window bind:innerWidth/>
{#if condition}
	<Router>
		<div class="main-container">
			<nav class="sidebar" class:sidebarClosed={closed}>
				<div class="arrow" class:arrClosed={closed} on:click={toggle} on:keydown={toggle}>
					<i class={closed? 'bx bx-chevrons-right':'bx bx-chevrons-left'}></i>
				</div>
				<Sidebar></Sidebar>
			</nav>
			<div class="page" class:pageClosed={closed}>
				<Route path="/">
					<Home/>
				</Route>
				<Route path="about" component={About}/>
				<Route path="projects" component={Projects}/>
				<Route path="contact" component={Contact}/>
				<Route path="success" component="{Success}"/>
			</div>
		</div>
	</Router>
{:else}
	<h1>Im a Software engineer,Backend developer </h1>
	<h2>with some design knowledge </h2>
	<h2>This site is not intended to be mobile responsive</h2>
{/if}

<style>
	.main-container {
		display: flex;
		flex-direction: row;
		height: 100vh;
		width: 100vw;
	}
	
	.page {
		transition: var(--tran);
		margin-left: 11rem;
		/*top: 0;*/
		width: 100%;
		height: 100%;
	}
	.pageClosed{
		margin-left: 2.6rem;
	}
	
	.sidebar {
		position: fixed;
		overflow: hidden;
		transition: var(--tran);
		/*height: 200vh;*/
		top: 0;
		left: 0;
		padding-top: 3rem;
		height: 100%;
		width: 11rem;
		background: var(--sidebar-color);
		z-index: 1;
	}
	
	
	
	
	.sidebarClosed {
		width: 2.6rem;
		padding-top: 65px;
	}
	
	.arrow {
		top: 17rem;
		transform: translateY(-50%);
		font-size: 22px;
		padding: 4px;
		background: var(--sidebar-color);
		opacity: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: var(--tran);
	}
	
	.arrow:hover {
		background-color: var(--primary-color);
	}
	
	.arrClosed {
		right: 10px;
	}


</style>