<template>    
<div style="font-size: 16px;">
	<div class="home_title">
		<h3 class="module-title">频道</h3>
		<div class="channel_cate">
			<span class='link' @click='index=0' :disabled="index === 0">
				男生
			</span>
			<span class='link' @click='index=1' :disabled="index === 1">
				女生
			</span>
		</div>
	</div>
	<swiper v-model='index' :show-dots="false" height="456px">
		<swiper-item  v-for="(item, index) in listData" :key="index">
			<div class="book-ol book-ol-normal">
				<div class="book-li" v-for="(i, idx) in item" :key="idx">
					<router-link :to="{name:'book',params:{id:i.id}}" class="book-layout">
						<img :src="i.bid | myImage" class="book-cover">
						<div class="book-cell">
							<h4 class="book-title">{{i.bName}}</h4>
							<p class="book-desc">
								{{i.desc}}
							</p>
							<div class="book-meta">
								<div class="book-meta-l">
									作者：<span>{{i.bAuth}}</span>
								</div>
								<div class="book-meta-r">
									<span>
										<em class="book-meta-icon">{{i.cat}}</em>
										<em class="book-meta-icon red">{{i.state}}</em>
										<em class="book-meta-icon info">{{i.cnt}}</em>
									</span>
								</div>
							</div>
						</div>
					</router-link>				
				</div>
			</div>		
		</swiper-item>
	</swiper>
</div>
</template>

<script>
import {Swiper, SwiperItem} from 'vux'
export default {
  name:'category',
  components: { Swiper, SwiperItem},
  props:['listData'],
  data () {
    return {
    	index:0,
    }
  },
  methods: {

  },
}

</script>

<style>
ol{
	padding: 0;list-style: none;
}
.channel_cate{
	display: inline;
	font-size: 13px;
}
.channel_cate .link{
	color: #999;
}
.channel_cate .selected{
	color: #f60;
}
.book-layout{
	position: relative;
    display: block;
    overflow: hidden;
    padding: 16px;
    -webkit-transition: padding-left .15s;
    transition: padding-left .15s;
}
.book-cover{
	font-size: 0;
    float: left;
    width: 4.125rem;
    height: 5.5rem;
    margin-right: .5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
}
.book-cell{
	overflow: hidden;
	color: #969ba3;
}
.book-title {
    line-height: 1.4;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
}
.book-desc{
	line-height: 1.1875rem;
    display: -webkit-box;
    height: 3.25rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: .875rem;
    line-height: 1.125rem;
    overflow: hidden;
    margin: .375rem 0;
    color: #969ba3;
}
.book-meta {
    font-size: .75rem;
    overflow: hidden;
}
.book-meta-l{
	float: left;
}
.book-meta-r{
	float: right;
}
.book-meta-icon{
	font-style: normal;
	border:1px solid #eee;
	border-top-width: 2px; 
	border-top-bottom: 2px; 
	border-radius: 2px;
	padding: 1px 5px; 
}
.red{
	color:#ed424b;

}
.info{
	color:blue;

}
.footer-copy {
	height: 46px;
	line-height: 46px;
	width: 100%;
    font-size: .75rem;
    font-weight: 300;
    padding-top: 4px;
    text-align: center;
    color: #969ba3;
}
</style>


