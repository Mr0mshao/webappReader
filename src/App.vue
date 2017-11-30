<template>
  <div id="app">
      <layoutHeader :isShowBack='leftOptions'></layoutHeader>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
      <loading v-model="showLoading" />
      <BackToTop v-show="backBtnShow" @click.native='backToTop' />
      <footer class="footer-copy">copyright © 2002-2017 www.mr-mshao.sapce</footer>
  </div>
</template>

<script>
import layoutHeader from './components/layoutHeader'
import BackToTop from './components/backToTop.vue'
import { Loading } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: { layoutHeader, Loading, BackToTop },
  data () {
  	return {
      backBtnShow: false,
      showLoading: false,
      transitionName: 'slide-left'
    }
  },
  methods: {
    backToTop () {
      window.scrollTo(0,0)
      this.backBtnShow = false
    }
  },
  mounted () {
    setInterval(()=>{
      if(window.scrollY > 650){
          this.backBtnShow = true
        }else{
          this.backBtnShow = false
        }
    },500)
  },
  computed: {
    leftOptions () {
      return {
        showBack: this.$route.path !== '/'
      }
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.slide-left-enter-active,.slide-left-leave-active {
    transition: all 0.4s ease-in-out;
}
.slide-left-enter,.slide-left-leave-active {
   opacity: 0;
   transform:translateX(-300px);
}

.slide-right-enter-active,.slide-right-leave-active {
    transition: all 0.4s ease-out;
}
.slide-right-enter,.slide-right-leave-active {
   opacity: 0;
   transform:translateX(300px);
}

</style>
