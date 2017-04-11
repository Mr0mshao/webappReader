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
			<tab :line-width=1 active-color='#f60' v-model="index">
				<tab-item 
					class="vux-center" 
					:selected="demo2 === item" 
					v-for="(item, index) in list2" 
					@on-item-click="demo2 = item" 
					:key="index"
				>
				{{item.name}}
				</tab-item>
			</tab>
			<swiper v-model="index" height="168px" :show-dots="false">
				<swiper-item v-for="(item, index) in list2" :key="index">
					<div  v-for="(i, idx) in item.data" class="cate-box">
						<router-link to="/rank">
							<img src="../assets/150.jpg" style="width: 66px;height88px;">
			        		<figcaption class="slide-caption">{{i}}</figcaption>
			        		<p class="slide-author"> 一梦黄粱 </p>
						</router-link>
					</div>
				</swiper-item>
			</swiper>
		</div>
		<div>
			<tab :line-width=1 active-color='#f60' v-model="index2">
				<tab-item 
					class="vux-center" 
					:selected="demo3 === item" 
					v-for="(item, index) in list3" 
					@on-item-click="demo3 = item" 
					:key="index"
				>
				{{item.name}}
				</tab-item>
			</tab>
			<swiper v-model="index2" height="168px" :show-dots="false">
				<swiper-item v-for="(item, index) in list3" :key="index">
					<div  v-for="(i, idx) in item.data" class="cate-box">
						<router-link to="/rank">
							<img src="../assets/150.jpg" style="width: 66px;height88px;">
			        		<figcaption class="slide-caption">{{i}}</figcaption>
			        		<p class="slide-author"> 一梦黄粱 </p>
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
const list = () => [
{'name':'玄幻奇幻','data':['玄幻奇幻', '武侠仙侠', '都市职场']},
{'name':'武侠仙侠','data':['玄幻奇幻', '武侠仙侠', '都市职场']},
{'name':"都市职场",'data':['玄幻奇幻玄幻奇幻', '武侠仙侠', '都市职场']}
]
const list2 = () => [
{'name':'历史军事','data':['玄幻奇幻玄幻奇幻', '武侠仙侠', '都市职场', '都市职场']},
{'name':'游戏体育','data':['玄幻奇幻', '武侠仙侠', '都市职场', '都市职场']},
{'name':"科幻灵异",'data':['玄幻奇幻', '武侠仙侠', '都市职场', '都市职场']},
]
export default {
  name:'channel',
  components: {Tab,TabItem,Swiper, SwiperItem},
  props:['listData'],
  data () {
    return {
    	list2:[],
    	list3:[],
    	demo2:'玄幻奇幻',
    	demo3:'历史军事',
    	index:0,
    	index2:0,
    }
  },
  methods: {
  	fx(){
  		this.list2 = list();
  		this.list3 = list2()
  	},
  },
  computed:{},
  mounted(){
  	setTimeout(()=>{
  		this.fx()
  	},2000)
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