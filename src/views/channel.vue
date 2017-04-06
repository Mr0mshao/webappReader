<template>    
<div>
	channel
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'channel',
  components: {},
  data () {
    return {}
  },
 	methods: {},
  create (){},
  mounted(){
		this.$store.dispatch('FETCH_CATEGORY_LIST')
  },
  computed:{
    ...mapGetters(['DONE_CHANNEL_LIST','FETCH_CHANNEL_LIST'])
  }
}

</script>

<style>
	
</style>
