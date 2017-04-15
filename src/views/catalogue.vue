<template>    
<div v-html="DONE_CATALOGUR">
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'catalogue',
  components: {},
  data () {
    return {}
  },
  methods: {},
  create (){},
  mounted(){
    this.$store.dispatch('FETCH_CATALOGUR',{"id":this.$route.params.id})
  },
  computed:{
    ...mapGetters(['DONE_CATALOGUR','FETCH_CATALOGUR'])
  }
}
</script>

<style>
	
</style>
