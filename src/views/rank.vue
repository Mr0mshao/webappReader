<template>    
<div>
  <layout-list :datalist="DONE_RANK_LIST"></layout-list>
  <x-button type="default" @click.native="loadMore">加载更多...</x-button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import layoutList from '../components/list.vue'
import { XButton} from 'vux'

export default {
  name:'rank',
  components: {layoutList,XButton },
  data () {
    return {
      currPage:1
    }
  },
  methods: {
    loadMore(){
      this.$store.dispatch('FETCH_RANK_LIST_MORE',{"page": ++this.currPage})
    }
  },
  created (){
    this.$store.dispatch('FETCH_RANK_LIST')
  },
  mounted(){
    
  },
  computed:{
    ...mapGetters(['DONE_RANK_LIST','FETCH_RANK_LIST'])
  }
}
</script>

<style>
	
</style>
