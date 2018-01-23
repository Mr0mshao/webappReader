<template>
  <div id="app">
      <x-header 
        :left-options="{backText: '', showBack: $route.path !== '/'}"
        style="background-color:#333;"
      >
        <span>我的书城</span>
        <router-link to="/register" slot="right">注册</router-link>
        <router-link to="/login" slot="right">登录</router-link>
      </x-header>
      <transition :name="transitionName">
        <router-view />
      </transition>
      <Loading v-show="DONE_ISLOADING" />
      <BackToTop v-show="backBtnShow" @click.native='backToTop' />
  </div>
</template>

<script>
import BackToTop from './components/backToTop.vue'
import { Loading, XHeader } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: { XHeader, Loading, BackToTop },
  data () {
  	return {
      backBtnShow: false,
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
    }, 500)
  },
  computed: {
    ...mapGetters(['DONE_ISLOADING'])
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
.slide-caption {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
