<template> 
<div style="font-size: 16px;">
  <div class="module-merge module-detail-x module-detail-x-bg">
    <div class="book-detail-info">
      <div class="book-layout">
        <img class="book-cover" :src="DONE_BOOKINFO.cover" />
        <div class="book-cell">
          <h2 class="book-title">{{DONE_BOOKINFO.name}}</h2>
          <div class="book-rand-a">作者：{{DONE_BOOKINFO.author}}</div>
          <div class="book-score">类型：{{DONE_BOOKINFO.type}}</div>
          <p class="book-meta">关键字：{{DONE_BOOKINFO.keywords}}</p>
          <p class="book-meta">
              <span>状态：<span class="red">{{DONE_BOOKINFO.status}}</span></span>
              <span class="char-pipe">|</span>
              <span class="red">{{DONE_BOOKINFO.wordcount}}</span>
          </p>
          <p class="book-meta">上架时间：{{DONE_BOOKINFO.createtime}}</p>
        </div>
      </div>
      <div class="book-detail-btn">
        <ul class="btn-group">
          <li class="btn-group-cell">
            <router-link
              class="btn-normal white"
              :to="{name: 'reader', params: {bid: DONE_BOOKINFO.id, id: 1}}"
            >开始阅读</router-link>
          </li>
          <li class="btn-group-cell">
            <router-link
              :to="record"
              class="btn-normal red" 
              style="background-color:#fff"
            >{{myLink}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div> 
  <div class="module module-merge">
    <section class="book-summary" v-on:click="console" :style="{maxHeight:maxHeight+'rem'}">
      <div v-html="DONE_BOOKINFO.description"></div>
    </section>
    <router-link :to="{name:'catalogue',params:{id:DONE_BOOKINFO.id}}" class="book-meta book-status">
      <div class="option">
        <div class="book-meta-l">
          <strong class="book-spt" style="color: #444">目录</strong>
        </div>
        <div class="book-meta-r">
          <p class="gray ell"></p>
        </div>
      </div>
    </router-link>
  </div>
</div>   
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'book',
  data () {
    return {
      maxHeight: 5.92,
      record: '',
    }
  },
  methods: {
    console () {
      this.maxHeight == 15 ? this.maxHeight=5.92 : this.maxHeight = 15;
    },
    // record () {
    //   if (this.DONE_ISLOGIN) {
    //     let arr = this.DONE_USERINFO.recently.split('#');
    //     if(arr[0] == this.$route.params.id){
    //       this.$router.push({
    //         name:'reader',
    //         params:{bid:arr[0],id:arr[1]}
    //       })
    //     } else {}
    //   }
    // }
    fetchBookInfo (bookId) {
      this.$store.dispatch('FETCH_BOOKINFO', bookId)
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.fetchBookInfo(this.$route.params.id)
	},
	computed:{
    ...mapGetters(['DONE_BOOKINFO', 'DONE_USERINFO']),
    myLink: function () {
      if (this.DONE_USERINFO.isLogin) {
        //   let arr = this.DONE_USERINFO.recently.split('#');
        //   if (arr[0] == this.$route.params.id) {
        //     this.record = {
        //       name:'reader',
        //       params:{bid:arr[0],id:arr[1]}
        //     }
        //     return '继续阅读'
        //   }else{
        //     this.record = '';
        //     return '暂无记录'
        //   }
        this.record = {
          name:'reader',
          params:{ bid: arr[0], id: arr[1] }
        }
        return '继续阅读'

      } else {
        this.record = '';
        return '请先登录'
      }
    }
	}
}

</script>

<style scoped>

.book-detail-info {
    position: relative;
    background: #fff;
    background: linear-gradient(to top,#fff,rgba(255,255,255,0) 8rem) no-repeat center bottom;
}	
.book-layout {
    position: relative;
    display: block;
    overflow: hidden;
    padding: 1rem;
    transition: padding-left .15s;
}
.book-cover{
    font-size: 0;
    float: left;
    width: 4.125rem;
    height: 5.5rem;
    margin-right: .5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    width: 5.85rem;
    height: 7.5rem;
    border-radius: 2px;
    box-shadow: none;
}
.book-cell{
    overflow: hidden;
    line-height: 1.4rem;
    color:#33373d;
}
.book-title {
    line-height: 1.4;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
}
.book-rand-a {
    font-size: .8125rem;
}
.book-score {
    font-size: .75rem;
}
.book-meta {
    font-size: .75rem;
    overflow: hidden;
    word-break: break-all;
}
.char-pipe {
    padding: 0 .5ch;
}
.book-detail-btn {
    padding: 0 1rem 1rem;
}
.btn-group {
    display: table;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    table-layout: fixed;
}
.btn-group-cell {
    font-size: 100%;
    font-weight: 400;
    display: table-cell;
    text-align: center;
}
.btn-group-cell:first-child>.btn-normal {margin-left: 0;}
.btn-group-cell>.btn-normal {
    display: block;
    width: calc(100% - .6667rem);
    margin-left: .3333rem;
    padding: 0;
}
.btn-normal {
    font-size: .8125rem;
    line-height: 1.875rem;
    display: inline-block;
    padding: 0 1rem;
    text-align: center;
    border-radius: .125rem;
    background-color: #ed424b;
}
.module-merge {
    margin: 0;
}
.book-detail-x {
    position: relative;
    overflow: hidden;
    margin-top: -2.75rem;
}
.module {
    margin: .75rem 0;
    background-color: #fff;
}
.book-cover-blur {
    position: absolute;
    top: -13.2rem;
    width: 100%;
    height: 175vw;
    opacity: .02;
}
.book-summary .enabled {
    height: 5.92rem;
    max-height: none;
}
.book-summary {
    font-size: .875rem;
    line-height: 1.5rem;
    position: relative;
    overflow: hidden;
    max-height: 5.92rem;
    margin-left: 1rem;
    padding-right: 1rem;
    text-align: justify;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
}
.book-summary-more {
    position: absolute;
    right: 1rem;
    bottom: 0;
    visibility: hidden;
    width: 2rem;
    height: 1.5rem;
    text-align: right;
    background: linear-gradient(to right,rgba(255,255,255,0),#fff 1rem);
}
.book-status {
    line-height: 2.75rem;
    display: block;
    padding: 0 1rem;
}
.book-meta {
    font-size: .75rem;
    overflow: hidden;
}
.book-status .book-meta-r {
    position: relative;
    max-width: 60%;
    max-width: calc(100% - (120rem / 16));
    padding-right: .75rem;
}
.book-meta-l {float: left;}
.book-meta-r {position: relative;float: right;}
.book-spt {
    font-size: 1rem;
    vertical-align: top;
}
.ell {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.gray {color: #969ba3;}
.white{color: #fff;}
.module-detail-x-bg{
    background: rgba(0,0,0,0.3) url('../assets/546e3556cce4ad7673e512cf0b4672c0.jpg') center center no-repeat no-repeat
}
</style>
