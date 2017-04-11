<template>    
<div>

  <layout-list :datalist="DONE_RANK_LIST"></layout-list>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import layoutList from '../components/list.vue'

export default {
  name:'rank',
  components: {layoutList },
  data () {
    return {}
  },
  methods: {},
  create (){},
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
