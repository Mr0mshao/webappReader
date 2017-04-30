<template>    
<div>
  <group>
      <cell v-for="item in DONE_CATEGORY_LIST" :title="item.type | formatType" :link="{name:'categoryDetail',params:{id:item.type}}" :key="item.type"></cell>
    </group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import {Group, Cell } from 'vux'
export default {
  name:'category',
  components: { Group, Cell },
  data () {
    return {}
  },
  methods: {},
  created (){
    this.$store.dispatch('FETCH_CATEGORY_LIST')
  },
  mounted(){},
  computed:{
    ...mapGetters(['DONE_CATEGORY_LIST','FETCH_CATEGORY_LIST'])
  }
}
</script>
<style>
</style>
