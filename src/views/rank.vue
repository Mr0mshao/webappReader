<template>    
<div>
  <panel header="图文组合列表" :list="list" ></panel>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Panel } from 'vux'
export default {
  name:'rank',
  components: { Panel },
  data () {
    return {
      list: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }
      }],
    }
  },
  methods: {
    
  },
  create (){

  },
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
