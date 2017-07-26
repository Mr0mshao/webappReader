<template>    
<div>
  <layout-list :datalist="DONE_CATEGORY_DETAIL"></layout-list>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import layoutList from '../components/list.vue'
import {Group, Cell } from 'vux'
export default {
  name:'category',
  components: { layoutList,Group, Cell },
  data () {
    return {}
  },
  methods: {},
  created (){
    // this.$store.dispatch('FETCH_CATEGORY_DETAIL',{"id":this.$route.params.id})
  },
  mounted(){},
  computed:{
    // ...mapGetters(['DONE_CATEGORY_DETAIL','FETCH_CATEGORY_LIST'])
  }
}

</script>

<style>
	
</style>
