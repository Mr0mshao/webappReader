<template>    
<div>
	<div class="home_title">
		<h3 class="module-title">分类</h3>
		<span class="more">
			<router-link to="/category" class="module-header-btn">
				更多 >
			</router-link>
		</span>
	</div>

	<div>
		<div>
			<tab :line-width='1' active-color='#f60' v-model="tIndex">
				<tab-item class="vux-center" 
					v-for="(item,index) in data1" 
					:selected="demo == item" 
					@on-item-click="demo = item" 
					:key="index"
				>
				{{item}}
				</tab-item>
			</tab>
			<swiper height="145px" :show-dots="false" v-model="tIndex">
				<swiper-item v-for="(item, index) in listData" :key="index">
					<div v-for="(i, idx) in item" :key="idx" class="cate-box">
						<!-- 写死路由 -->
						<router-link :to="{name:'book',params:{id:i.cid}}" class="my-link">
							<img :src="i.bid | myImage" class="b-img"/>
							<figcaption class="slide-caption">{{i.bName}}</figcaption>
							<p class="slide-author">{{i.bAuth}}</p>
						</router-link>
					</div>
				</swiper-item>
			</swiper>
		</div>
	</div>
</div>
</template>

<script>
import { Tab,TabItem,Swiper, SwiperItem } from 'vux'
export default {
  name:'category',
  components: {Tab,TabItem,Swiper, SwiperItem},
  props:['listData'],
  data () {
    return {
    	data1:['玄幻奇幻','武侠仙侠','都市职场'],
    	demo:'玄幻奇幻',
    	demo3:'历史军事',
    	tIndex:0,
    }
  }
}

</script>

<style>
.tab-swiper {
  background-color: #fff;
  height: 199px;
}	
.cate-box{
	margin: 5px 5px;
	height: 155px;
	width: 82px;
	display:inline-block;
	float: left;
	text-align: right;
	overflow: hidden;
}
.my-link .slide-caption{
	color: #333;
}
.my-link {
	display: block;
	overflow: hidden;
	text-align: center;
}
.my-link .b-img {
	display: block;
	margin: 0 auto;
	width: 66px;
	height:88px;
}
.my-link .slide-author {
	text-align: center;
}
</style>
