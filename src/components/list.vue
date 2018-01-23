<template>    
	<ol class="book-ol book-ol-normal">
    <li class="book-li" v-for="(item, i) in dataList" :key="i">
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
	</ol>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'list',
  props: ['dataList']
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
