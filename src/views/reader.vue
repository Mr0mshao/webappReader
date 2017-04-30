<template>    
  <div style="font-size: 16px;">
    <div v-html="DONE_READER" :style="contentBox" class="content-box"></div>
    <flexbox style="padding: 20px 0 2rem 0">
      <flexbox-item style="text-align: center">
        <button type="button" class="rbtn white flex-demo" @click="prevPage">上一章</button>
      </flexbox-item>
      <flexbox-item>
        <button type="button" class="rbtn white flex-demo" @click="nextPage">下一章</button>
      </flexbox-item>
    </flexbox>
    <!-- 屏幕中间mask -->
    <div class="reader-mask" @click="menuShow = !menuShow "></div>
    <!-- 底部菜单 -->
    <div class="bottom-nav-bk bottom_nav" v-show="menuShow"></div>
    <div class="bottom-nav bottom_nav" v-show="menuShow">
      <div class="item">
        <div class="item-warp">
          <div class="icon-menu"></div>
          <div class="icon-text">目录</div>
        </div>
      </div>
      <div class="item" @click="fsMenuShow = !fsMenuShow">
        <div class="item-warp">
          <div class="icon-ft"></div>
          <div class="icon-text">设置</div>
        </div>
      </div>
      <div class="item" @click="changeMode">
        <div class="item-warp" v-show="contentBox.readerMode">
          <div class="icon-day"></div>
          <div class="icon-text">日间</div>
        </div>
        <div class="item-warp" v-show="contentBox.readerMode? false: true ">
          <div class="icon-night"></div>
          <div class="icon-text">夜间</div>
        </div>
      </div>
    </div>
    <!-- 设置菜单 -->
    <div class="option-mask" v-show="menuShow && fsMenuShow"></div>
    <div class="menu-option" v-show="menuShow && fsMenuShow">
      <div class="child-mod">
        <span>字号</span>
        <button class="spe-button" type="button" @click="changeFontSize('s')">小</button>
        <button class="spe-button" type="button" style="margin-left: 10px" @click="changeFontSize('b')">大</button>
      </div>
      <div class="child-mod">
        <span>背景</span>
        <div class="bk-container" style="background-color: #f7eee5;" @click="changeBg('#f7eee5')">
          <span style="display:none">米白</span>
        </div>
        <div class="bk-container" style="background-color: #e9dfc7;" @click="changeBg('#e9dfc7')">
          <span style="display:none">纸张</span>
        </div>
        <div class="bk-container" style="background-color: #a4a4a4;" @click="changeBg('#a4a4a4')">
          <span style="display:none">浅灰</span>
        </div>
        <div class="bk-container" style="background-color: #cdefce;" @click="changeBg('#cdefce')">
          <span style="display:none">护眼</span>
        </div>
        <div class="bk-container" style="background-color: #283548;" @click="changeBg('#283548')">
          <span style="display:none">灰蓝</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {Flexbox, FlexboxItem} from 'vux'
  export default {
    name:'reader',
    components: {Flexbox, FlexboxItem},
    data () {
      return {
        page:this.$route.params.id || 1,
        contentBox:{
          backgroundColor: '#c4b395',
          fontSize: '18px',
          color:'#000',
          readerMode:true,
        },
        fSize:18,
        menuShow:false,
        fsMenuShow:false,
      }
    },
    methods: {
      nextPage(){
        this.$store.dispatch('FETCH_READER',{"id":this.$route.params.bid,"p":++this.page});
      },
      prevPage(){
        if(this.page <= 1){
          return false
        }else{
          this.$store.dispatch('FETCH_READER',{"id":this.$route.params.bid,"p":--this.page});
        }
      },
      changeMode(){
        this.contentBox.readerMode = !this.contentBox.readerMode;
        if(this.contentBox.readerMode){
          this.contentBox.backgroundColor = '#c4b395'
          this.contentBox.color ='#000'
        }else{
          this.contentBox.backgroundColor = '#000'
          this.contentBox.color ='rgba(255,255,255,.5)'
        }
        this.storeOptions()
      },
      changeBg(color){
        this.contentBox.backgroundColor = color
        this.contentBox.color = '#000'
        if(color == '#283548'){
          this.contentBox.color = 'rgb(118, 133, 162)'
        }
        this.storeOptions()
      },
      changeFontSize(f){
        if(f == 'b'){
          if(this.fSize > 30){return false}
          this.contentBox.fontSize =  (++this.fSize) +'px'
        }else{
          if(this.fSize < 15){return false}
          this.contentBox.fontSize =  (--this.fSize) +'px'
        }
        this.storeOptions()
      },
      scrollToTop(){
        window.scrollTo(0,0)
      },
      storeOptions(){
        window.localStorage.setItem('readerOptions',JSON.stringify(this.contentBox));
      }
    },
    created(){
      this.$store.dispatch('FETCH_READER',{"id":this.$route.params.bid,"p":this.$route.params.id});
      //获取阅读模式
      this.contentBox = JSON.parse(window.localStorage.getItem('readerOptions')) || this.contentBox;
    },

    mounted(){
      window.scrollTo(0,0)
    },
    computed:{
      ...mapGetters(['DONE_READER'])

    }
  }
</script>
<style>
  .content-box{
    padding: 0 1rem;
    line-height: 2.25rem;
    overflow: hidden;
  }
  .rbtn{
    width: 100%;
    height: 2.8rem;
    border-radius: 1.6rem;
    font-size: 14px;
    border:none;
    border-bottom: 1px solid #ed424b;
    background: #ed424b;
  }
  .default{
    background: #eee;
  }
  .night{
    background-color: #000;
  }
  .read-article h3 {
      font-size: 1.5em;
      font-weight: 400;
      line-height: 1.2;
      margin: 1em 0;
  }
  .read-article p {
      font-size: 1em;
      margin: .1em 0;
      word-break: break-all;
  }
  .reader-mask{
    position: fixed;
    top: 0;right: 0;left: 0;bottom: 0;
    margin: auto;
    width: 100%;
    height: 40%;
    background: rgba(255,255,255,0);
  }
  .bottom-nav-bk {
      position: fixed;
      bottom: 0px;
      height: 70px;
      background: #000;
      width: 100%;
      opacity: .9;
      z-index: 10004;
  }
  .bottom-nav {
      position: fixed;
      bottom: 0px;
      height: 70px;
      background: none;
      width: 100%;
      opacity: 1;
      z-index: 10004;
      margin: 0 auto;
      text-align: center;
  }
  .bottom-nav .item {
      display: inline-block;
      width: 32%;
      color: #fff;
      text-align: center;
      margin: 0 auto;
  }
  .item-warp {
      position: relative;
      width: 26px;
      margin: 0 auto;
  }
  .icon-menu,
  .icon-ft,
  .icon-night,
  .icon-day {
      position: absolute;
      top: 3px;
      left: 2px;
      width: 18px;
      height: 13px;
      background: url('../assets/cate.png');
      background-size: contain;
  }
  .icon-night, .icon-day, .icon-ft {
    left: 3px;
  }
  .icon-ft {
    width: 13px;
    height: 13px;
    background: url('../assets/font.png');
    background-size: contain;
  }
  .icon-day {
    width: 19px;
    height: 18px;
    background: url('../assets/daily.png');
    background-size: contain;
  }
  .icon-night {
    left: 4px;
    width: 16px;
    height: 16px;
    background: url('../assets/night.png');
    background-size: contain;
  }
  .icon-text {
    position: absolute;
    top: 25px;
    font-size: 10px;
  }
  .option-mask{
    position: fixed;
    bottom: 4rem;
    height: 135px;
    background: #000;
    width: 100%;
    color: #fff;
    opacity: 0.9;
    z-index: 10003;
  }
  .menu-option{
    position: fixed;
    bottom: 4rem;
    height: 135px;
    background: none;
    width: 100%;
    color: #fff;
    z-index: 10004;
  }
  .child-mod {
    padding: 5px 10px;
    margin-top: 15px;
  }
  .child-mod span {
    display: inline-block;
    padding-right: 20px;
    padding-left: 10px;
  }
  .spe-button{
    background: none;
    border: 1px #8c8c8c solid;
    padding: 5px 40px;
    color: #fff;
    display: inline-block;
    border-radius: 16px;
  }
  .bk-container {
    position: relative;
    height: 30px;
    width: 30px;
    background: #fff;
    border-radius: 15px;
    display: inline-block;
    vertical-align: -14px;
    margin-left: 10px;
  }
  .bk-container-current {
    position: absolute;
    height: 32px;
    width: 32px;
    border-radius: 16px;
    display: inline-block;
    vertical-align: -14px;
    margin-left: 10px;
    border: 1px #ff7800 solid;
    top: -2px;
    left: -12px;
  }
</style>
