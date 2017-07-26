<template>
  <div id="app">
  	<div style="min-height: calc(100% - 50px)">
      <layoutHeader :isShowBack='leftOptions'></layoutHeader>
      <router-view></router-view>
      <loading v-model="done_loading_state"></loading>
      <BackToTop v-show="backBtnShow" @click.native='backToTop'></BackToTop> 
      <footer class="footer-copy">
        copyright © 2002-2017 www.mr-mshao.sapce
      </footer>
    </div>
    
  </div>
</template>

<script>
import layoutHeader from './components/layoutHeader'
import BackToTop from './components/backToTop.vue'
import { Loading } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components:{ layoutHeader,Loading,BackToTop},
  data () {
  	return {backBtnShow : false}
  },
  methods: {
    backToTop() {
      window.scrollTo(0,0)
      this.backBtnShow = false
    }
  },
  mounted(){
    setInterval(()=>{
      if(window.scrollY > 650){
          this.backBtnShow = true
        }else{
          this.backBtnShow = false
        }
    },500)
  },
  computed:{
    ...mapGetters(['done_loading_state']),
    leftOptions () {
      return {
        showBack: this.$route.path !== '/'
      }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
