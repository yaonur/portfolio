<script>
	export let project;
	const {name, link, description, alt_text} = project

</script>

<div class="container">
	<div class="content">
		<div class="hover-text">
			<p>{alt_text}</p>
			<a href={link}>github link</a>
		</div>
		<div class="text">
			<h3>{name}</h3>
			<p>{description}</p>
			<i>hover for link</i>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		width: 280px;
		height: 400px;
		/*margin: 30px;*/
		box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
		border-radius: 15px;
		background: var(--card-background);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-left: 1px solid rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(5px);
	}
	
	.content {
		padding: 10px;
		height: 450px;
		text-align: center;
		transform: translateY(-200px);
		opacity: 1;
		transition: var(--tran);
	}
	
	.container:hover .content {
		transform: translateY(200px);
		opacity: 0.8;
	}
	
	.hover-text {
		/*width: 9em;*/
		/*height: 150px;*/
		/*height: 120px;*/
	}
	.hover-text a {
		position: absolute;
		top:150px;
		left: -30px;
		
		
	}
	.hover-text p{
		position: absolute;
		top:-140px;
		left:-120px;
		width:16em;
	}
	
	.text {
		position: absolute;
		top: 230px;
		left: -120px;
	}
	
	h3 {
		padding: 0;
		font-size: 1.8em;
		height: 2.5em;
		width: 9em;
		color: var(--text-color);
		z-index: 1;
	}
	
	p {
		font-size: 1em;
		color: var(--text-color);
		font-weight: 300;
	}
	
	a {
		position: relative;
		display: inline-block;
		padding: 8px 20px;
		margin-top: 15px;
		background: #f3f0f0;
		color: #000;
		border-radius: 20px;
		text-decoration: none;
		font-weight: 500;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
	}
	
	.container:hover .text {
		opacity: 0;
		transition: var(--tran);
	}
</style>
