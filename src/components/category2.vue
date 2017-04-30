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
