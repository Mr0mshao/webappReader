<template>    
<div>
  <!-- <layout-list :datalist="DONE_RANK_LIST"></layout-list> -->
  <ol class="book-ol book-ol-normal">
    <li v-if="DONE_RANKDATA" class="book-li" v-for="(item, i) in DONE_RANKDATA" :key="i">
      <router-link :to="{name:'book',params:{id:item.cid}}" class="book-layout">
        <img :src="item.bid | myImage" class="book-cover" style="width:78px;height:100px;">
          <div class="book-cell">
            <h4 class="book-title">
              <span class="bt-l">{{item.bName}}</span>
              <span class="bt-r">{{item.rankCnt}}</span>
            </h4>
            <p class="book-desc">{{item.desc}}</p>
            <div class="book-meta">
              <div class="book-meta-l">
                作者：<span>{{item.bAuth}}</span>
              </div>
              <div class="book-meta-r">
                <span>
                  <em class="book-meta-icon">{{item.cat}}</em>
                  <em class="book-meta-icon red">{{item.state}}</em>
                  <em class="book-meta-icon info">{{item.cnt}}</em>
                </span>
              </div>
            </div>
          </div>

      </router-link>
    </li>
    <template v-else>暂无数据...</template>
		</ol>
  <x-button type="default" @click.native="loadMore">加载更多...</x-button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { XButton} from 'vux'

export default {
  name:'rank',
  components: { XButton },
  data () {
    return {
      pageIndex: 0
    }
  },
  methods: {
    loadMore(){
      this.fetchRankData(this.pageIndex)
    },
    fetchRankData (pageIndex = this.pageIndex) {
      if (this.pageIndex >= 2) {
        alert('没有更多了...')
        return false
      }
      this.$store.dispatch('FETCH_RANKDATA', pageIndex)
          .then(() => {
            this.pageIndex += 1
          })
    }
  },
  mounted () {
    this.fetchRankData()
  },
  computed:{
    ...mapGetters(['DONE_RANKDATA'])
  }
}
</script>
<style>
.book-title {
  display: flex;
  align-items: center;
}
.book-title .bt-l {
  flex: 1
}
.book-title .bt-r {
  font-weight: normal;
  color:#ed424b;
  font-size:12px
}
</style>
