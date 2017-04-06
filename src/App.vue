<template>
  <div id="app">
  	<layoutHeader :isShowBack='DONE_ISSHOWBACK'></layoutHeader>
    <router-view></router-view>
    <loading v-model="DONE_LOADING"></loading>
  </div>
</template>

<script>
import layoutHeader from './components/layoutHeader'
import { Loading } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components:{ layoutHeader,Loading},
  data () {
  	return {}
  },
  methods: {},
  created(){},
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
