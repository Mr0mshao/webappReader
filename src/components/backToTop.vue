<template>
	<div class="back-to-top">
		<button type="button">Top</button>
	</div>
</template>

<script>
export default {
	name: 'BackToTop'
}
</script>

<style>
.back-to-top button {
	/* ===style format=== */
	border-top-style: none;
	border-right-style: none;
	border-bottom-style: none;
	border-left-style: none;
	outline: none;
	/* ===color=== */
	background-color: #00B4FF;
	color: white;
	font-size: 1rem;
	box-shadow: 0px 0px 20px #dbdada;
	/* ===size and position=== */
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	width:3.5rem;
	height: 3.5rem;
}
</style>
