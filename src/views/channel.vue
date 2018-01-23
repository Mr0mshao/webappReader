<template>    
<div>
  <List :data-list="DONE_FEMALE" />
  <x-button type="default" @click.native="loadMore_man">加载更多...</x-button>
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
  // 删除了加载更多方法
 	// methods: {
  //   loadMore_man(){
  //     this.$store.dispatch('FETCH_CHANNEL_LIST',{"type":this.$route.params.type,"page":this.currPage++})
  //   }
  // },
  created (){
    this.$store.dispatch('FETCH_FEMALE')
    // this.$store.dispatch('FETCH_CHANNEL_LIST',{"type":this.$route.params.type,"page":this.currPage++})
  },
  mounted(){},
  computed:{
    ...mapGetters(['DONE_FEMALE'])
  }
}

</script>
