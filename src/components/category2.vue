<template>    
<div>
	<div>
		<tab :line-width=1 active-color='#f60' v-model="tIndex">
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
				<div  v-for="(i, idx) in item" class="cate-box" :key="idx">
					<router-link :to="{name:'book',params:{id:i.cid}}" class="my-link">
						<img :src="i.bid | myImage" style="width: 66px;height88px;">
		        		<figcaption class="slide-caption">{{i.bName}}</figcaption>
		        		<p class="slide-author">{{i.bAuth}}</p>
					</router-link>
				</div>
			</swiper-item>
		</swiper>
	</div>
</div>
</template>
<script>
import { Tab,TabItem,Swiper, SwiperItem } from 'vux'
export default {
  name:'categorys',
  components: {Tab,TabItem,Swiper, SwiperItem},
  props:['listData'],
  data () {
    return {
    	data1:['历史军事','游戏体育','科幻灵异'],
    	demo:'历史军事',
    	tIndex:0,
    }
  },
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
