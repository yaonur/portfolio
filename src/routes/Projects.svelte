<script>
	import Card from "../lib/Card.svelte"
	import "../tilt.js"
	import {projects} from "../utils/vars.js";
	
	import {afterUpdate} from "svelte"
	
	const loadTilt = () => {
		VanillaTilt.init(document.querySelectorAll(".card"), {max: 25, speed: 300,glare:true,"max-glare":0.3})
		console.log("after update")
		
	}
	afterUpdate(loadTilt)
	

</script>
<body>
<div class="container">
	{#each projects as project   }
		<div class="card">
			<Card project="{project}"></Card>
		</div>
	{/each}
</div>
</body>


<style>
	/*body {*/
	/*	display: flex;*/
	/*	justify-content: center;*/
	/*	align-items: center;*/
	/*	min-height: 100vh;*/
	/*	background: var(--project-background);*/
	/*	z-index: 1;*/
	/*}*/
	
	/*body::before {*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	top: 0;*/
	/*	left: 0;*/
	/*	width: 100%;*/
	/*	height: 100%;*/
	/*	background: linear-gradient(#f00, #f0f);*/
	/*	clip-path: circle(30% at right 70%);*/
	/*}*/
	
	/*body::after {*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	top: 0;*/
	/*	left: 0;*/
	/*	width: 100%;*/
	/*	height: 100%;*/
	/*	background: linear-gradient(#2196f3, #e91e63);*/
	/*	clip-path: circle(20% at 10% 10%);*/
	/*	z-index: 0;*/
	/*}*/
	
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: var(--project-background);
		/*position: relative;*/
		/*display: flex;*/
		/*flex-direction: column;*/
		flex-wrap: wrap;
		z-index: 0;
	}
	.card{
		margin:30px;
		border-radius: 10px;
	}


</style>