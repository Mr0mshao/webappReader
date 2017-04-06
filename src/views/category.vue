<template>    
<div>
	category
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'category',
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
    ...mapGetters(['DONE_CATEGORY_LIST','FETCH_CATEGORY_LIST'])
  }
}

</script>

<style>
	
</style>
