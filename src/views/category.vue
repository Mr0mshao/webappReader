<template>    
<div>
  <layout-list :datalist="DONE_CATEGORY_LIST"></layout-list>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import layoutList from '../components/list.vue'
export default {
  name:'category',
  components: { layoutList },
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
