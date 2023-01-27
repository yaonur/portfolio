<script>
	import {link} from "svelte-navigator";
</script>
<ul>
	<li>
		<a href="/" use:link>
			<i class='bx bx-home-alt'></i>
			<span>Home</span>
		</a>
	</li>
	<li>
		<a href="about" use:link>
			<i class='bx bx-user'></i>
			<span>About</span>
		</a>
	</li>
	<li>
		<a href="projects" use:link>
			<i class='bx bx-briefcase'></i>
			<span>Projects</span>
		</a>
	</li>
	<li>
		<a href="contact" use:link>
			<i class='bx bx-user-pin'></i>
			<span>Contact</span>
		</a>
	</li>
</ul>


<style>
	ul {
		/*display: block;*/
		margin: 0;
		padding-left: 0;
	}
	
	li {
		height: 50px;
		margin-top: 10px;
		list-style: None;
	}
	
	a {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		text-decoration: none;
		border-radius: 6px;
		transition: var(--tran);
	}
	
	a:hover {
		background: var(--primary-color);
		
	}
	
	a:hover span, a:hover i {
		color: var(--sidebar-color)
		
		
	}
	
	i {
		margin-left: 8px;
	}
	
	span {
		margin-left: 20px;
	}
	
	
	span, i {
		font-size: 25px;
		font-weight: 700;
		color: var(--text-color);
		transition: var(--tran);
	}

</style>