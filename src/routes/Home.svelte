<script>
	import dance from "../assets/pic/dance.png"
	import FiltersBox from "../lib/FiltersBox.svelte";
	// import "../tilt.js"
	
	// VanillaTilt.init(document.querySelector(".welcome-text"), {max: 25, speed: 400})
</script>
<div class="main-container">
	<div class="head-container">
		<div class="img">
			<img src="{dance}" alt="">
		</div>
		<div class="welcome-text">
			<h1>Welcome</h1>
			<h2>Im a Software Engineer Web App Developer focused on </h2>
			<h2>B2B and B2C solutions</h2>
		</div>
	</div>
	<div class="body-container">
		<FiltersBox></FiltersBox>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: var(--text-color);
	}
	
	img {
		height: auto;
		width: 300px;
		/*filter: blur(.1px);*/
		border-radius: 50%;
		
	}
	
	
	.main-container {
		margin: 0;
		padding: 10px;
		width: 100%;
		height: 100%;
		background-color: var(--primary-color);
		/*background-image: url("../assets/pic/background-home.jpg");*/
		/*background-repeat: no-repeat;*/
		/*background-size: cover;*/
	}
	
	.head-container {
		display: flex;
		/*justify-content: space-between;*/
		margin: 2%;
		
	}
	
	.welcome-text {
		display: flex;
		padding: 2rem;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		
	}

</style>
