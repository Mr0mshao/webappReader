<template>    
<div>
  <group>
      <cell v-for="(item,index) in DONE_CATALOGUR" :title="`第 ${index+1} 章：`+item.name" :link="{name:'reader',params:{bid:$route.params.id,id:item.id}}" :key="item.id"></cell>
    </group>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import {Group, Cell } from 'vux'
export default {
  name:'catalogue',
  components: {Group, Cell},
  data () {
    return {}
  },
  methods: {},
  created (){
    // this.$store.dispatch('FETCH_CATALOGUR',{"id":this.$route.params.id})
  },
  mounted(){
    
  },
  computed:{
    // ...mapGetters(['DONE_CATALOGUR','FETCH_CATALOGUR'])
  }
}
</script>

<style>
	
</style>
