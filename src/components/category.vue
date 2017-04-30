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
			<swiper height="168px" :show-dots="false" v-model="tIndex">
				<swiper-item v-for="(item, index) in listData" :key="index">
					<div  v-for="(i, idx) in item" class="cate-box">
						<router-link :to="{name:'book',params:{id:i.id}}">
							<img :src="i.url" style="width: 66px;height88px;">
			        		<figcaption class="slide-caption">{{i.name}}</figcaption>
			        		<p class="slide-author">{{i.author}}</p>
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
  },
  methods: {
  },
  computed:{
  },
  mounted(){
  	// setInterval(()=> {
  	// 	console.log(this.tIndex)
  	// },1000)
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
	text-align: center;
	overflow: hidden;
}
figcaption.slide-caption{
	color: #333;
}

</style>