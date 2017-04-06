<template>    
<div>
	rank


</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'rank',
  components: {},
  data () {
    return {}
  },
  methods: {
    
  },
  create (){

  },
  mounted(){

      this.$store.dispatch('FETCH_RANK_LIST')

  },
  computed:{
    ...mapGetters(['DONE_RANK_LIST','FETCH_RANK_LIST'])
  }
}
</script>

<style>
	
</style>
