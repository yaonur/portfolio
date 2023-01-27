<script>
	import FilterButton from "./FilterButton.svelte";
	
	let button_names = ['Skills', 'Experience']

</script>

<section class="filters-container">
	<ul class="filters-content">
		{#each button_names as name }
			<div class="button">
				<FilterButton {name}></FilterButton>
			</div>
		{/each}
	</ul>
	<div class="filters-section">
	</div>
</section>

<style>
	.filters-content {
		display: flex;
		
	}
	/*.button{*/
	/*	margin-left:5px ;*/
	/*	width: 80px;*/
	/*}*/
</style>