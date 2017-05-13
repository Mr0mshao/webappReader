<template>
	<div class="content">
		{{$route.params.id}}
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {

		methods:{
			fetch(){
				let _id = this.$route.params.id;
				this.$store.dispatch('FETCH_BOOK_LIST', {"id" : _id})
				// console.log(this.$route.params.id)
			}
		},
		created(){
			this.$store.dispatch('FETCH_BOOK_LIST', {"id" : $route.params.id})
			// console.log(this.$route);
		},
		computed:{
			...mapGetters(['DONE_BOOK_LIST'])
		}
	}
</script>
<style>
	
</style>