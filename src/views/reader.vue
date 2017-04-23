<template>    
<div style="font-size: 16px;">
  <div v-html="DONE_READER" :style="contentBox"></div>
  <flexbox style="padding: 20px 0 2rem 0">
    <flexbox-item style="text-align: center">
      <button type="button" class="rbtn white flex-demo" @click="prevPage">上一章</button>
    </flexbox-item>
    <flexbox-item>
      <button type="button" class="rbtn white flex-demo" @click="nextPage">下一章</button>
    </flexbox-item>
  </flexbox>
  <!-- 屏幕中间mask -->
  <div class="reader-mask" @click="showReaderMenu"></div>
  <!-- 底部菜单 -->
  <div class="reader-menu" v-show="menuShow">
    <flexbox>
      <flexbox-item class="flex-demo">
        <div @click="changeMode">
          <span>1</span>
          <div>目录</div>
        </div>
      </flexbox-item>
      <flexbox-item class="flex-demo">
        <div @click="changeMode">
          <span>2</span>
          <div>设置</div>
        </div>
      </flexbox-item>
      <flexbox-item class="flex-demo">
        <div @click="changeMode">
          <span>3</span>
          <div>{{this.readerModelName}}</div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
  <!-- 设置菜单 -->
  <div class="menu-option">
    <div>
      <div class="option-item">
        <span>A-</span>
        <span>{{this.contentBox.fontSize}}</span>
        <span>A+</span>
      </div>
      <div class="option-item">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
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
          overflow:'hidden',
          color:'#333',
          padding:'0 1rem',
          lineHeight:'2.25rem'
        },
        readerModelName:'日间',
        menuShow:false
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
      //改变白天黑夜模式
      changeMode(){
        this.contentBox.backgroundColor == '#c4b395' ? this.contentBox.backgroundColor = '#000' : this.contentBox.backgroundColor = '#c4b395';
        this.contentBox.color=="#333" ? this.contentBox.color = 'rgba(255,255,255,.5)' : this.contentBox.color="#333";
        this.readerModelName == '日间' ? this.readerModelName = '夜间' : this.readerModelName='日间'
      },
      showReaderMenu(){
        this.menuShow = !this.menuShow
      }
    },
    created(){
      this.$store.dispatch('FETCH_READER',{"id":this.$route.params.bid,"p":this.$route.params.id});
      //获取阅读模式
      // this.contentBox = JSON.parse(window.localStorage.getItem('readerModel'))
      window.scrollTo(0,0);

    },
    mounted(){},
    computed:{
      ...mapGetters(['DONE_READER'])

    }
  }
</script>

<style>
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
  width: 300px;
  height: 200px;
  background: rgba(255,255,255,0);
}
.reader-menu{
  position: fixed;
  right: 0;left: 0;bottom: 0;
  background: #000;
  width: 100%;
  height: 4rem;
  color: #fff;
}
.flex-demo div{
  font-size: 14px;
}
.menu-option{
  position: fixed;
  left: 0;right: 0;bottom: 4rem;
  width: 100%;height: 10rem;
  background-color: #f60
}
.option-item{
  padding-top: .5rem;
  border-bottom: 1px solid rgba(255,255,255,.1);
  text-align: center;
}
.option-item > span{
    font-size: 1.2rem;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
    padding: .5rem;
    text-align: center;
}
</style>
