<template>    
<div>
  <layout-list :datalist="DONE_CHANNEL_LIST_FAMALE"></layout-list>
  <x-button type="default" @click.native="loadMore_famale">加载更多...</x-button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { XButton} from 'vux'
import layoutList from '../components/list.vue'
export default {
  name:'channel',
  components: {layoutList,XButton},
  data(){
    return {
      currPage:1
    }
  },
 	methods: {
    loadMore_famale(){
      this.$store.dispatch('FETCH_CHANNEL_LIST',{"type":this.$route.params.type,"page":this.currPage++})
    }
  },
  created (){
    this.$store.dispatch('FETCH_CHANNEL_CLEARN_FAMALE')
    this.$store.dispatch('FETCH_CHANNEL_LIST',{"type":this.$route.params.type,"page":this.currPage++})
  },
  mounted(){},
  computed:{
    ...mapGetters(['DONE_CHANNEL_LIST_FAMALE'])
  }
}

</script>

<style>
	
</style>
