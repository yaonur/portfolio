<script>
	export let section
	import {sections} from "../utils/store.js"
	// $:getActiveSection
	const handleClick=()=>{
		sections.changeActiveSection(section.name)
	}
	
</script>

<div class="container" class:active={section.active}>
	<button on:click={handleClick}>{section.name}</button>
</div>

<style>
	.container {
		/*width: 150px;*/
		width: 100%;
		height: 3rem;
		/*margin: 0 .1rem;*/
		background-color: transparent;
	}
	
	button {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		color: var(--text-color);
		padding: 1rem;
		/*border-radius: .5rem;*/
		background-color: transparent;
		font-weight: 700;
		font-size: 1rem;
		transition: var(--tran);
		
		
	}
	
	button:hover {
		background-color: var(--project-background);
	}
	
	.active {
		background-color: #1a1a1a;
		
	}


</style>