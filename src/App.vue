<template>
  <div id="app">
  	<layoutHeader :isShowBack='DONE_ISSHOWBACK'></layoutHeader>
    <router-view></router-view>
    <loading v-model="DONE_LOADING"></loading>
    <BackToTop v-show="backBtnShow" @click.native='backToTop'></BackToTop>
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
  created(){
    setInterval(()=>{
      if(window.scrollY > 650){
          this.backBtnShow = true
        }else{
          this.backBtnShow = false
        }
    },500)
  },
  computed:{
    ...mapGetters(['DONE_LOADING','DONE_ISSHOWBACK'])
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
