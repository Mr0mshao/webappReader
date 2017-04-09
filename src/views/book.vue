<template>    
<div>
	book
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'book',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted: function() {
		window.scrollTo(0, 0)
	},
	created: function() {
		this.$store.dispatch('FETCH_BOOK_DETAIL', this.$route.params.id)
	},
	computed:{
		...mapGetters(['DONE_BOOK_DETAIL'])
	},
}

</script>

<style>
	
</style>
