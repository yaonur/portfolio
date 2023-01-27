<script>
	import FilterButton from "./FilterButton.svelte";
	import {onMount, onDestroy} from 'svelte';
	import {sections} from "../utils/store.js"
	import Experience from "./Experience.svelte";
	import Skills from "./Skills.svelte";
	
	
	let activeSection;
	onMount(() => {
		sections.subscribe(val => {
			activeSection = sections.getActiveSection();
		});
	});
	onDestroy(() => {
		activeSection.unsubscribe();
	});

</script>

<section class="filters-container">
	<ul class="filters-content">
		{#each $sections as section}
			<FilterButton {section}></FilterButton>
		{/each}
	</ul>
	<div class="filters-section">
		{#if activeSection === "Experience" }
			<Experience/>
		{:else}
			<Skills/>
		
		{/if}
	</div>
</section>
<style>
	.filters-content {
		display: flex;
		justify-content: space-between;
		max-width: 330px;
		padding: 0;
		border-radius: 1.6rem;
		background-color: var(--sidebar-color);
		overflow: hidden;
	}

</style>