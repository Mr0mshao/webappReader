<template>    
<div>
  <List :data-list="DONE_MALE" />
  <x-button type="default" @click.native="loadMore_famale">加载更多...</x-button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { XButton} from 'vux'
import List from '../components/list.vue'
export default {
  name:'channel',
  components: { List, XButton },
  data(){
    return {
      currPage:1
    }
  },
 	// methods: {
  //   loadMore_famale(){
  //     this.$store.dispatch('FETCH_CHANNEL_LIST',{"type":this.$route.params.type,"page":this.currPage++})
  //   }
  // },
  created (){
    this.$store.dispatch('FETCH_MALE')
  },
  computed:{
    ...mapGetters(['DONE_MALE'])
  }
}

</script>

<style>
	
</style>
