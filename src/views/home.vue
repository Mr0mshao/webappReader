<template>    
<div>
	<swiper 
		:aspect-ratio="300/800"
		dots-position="center"
		auto
		loop
	 >
		<swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index"><img :src="item">
		</swiper-item>
	</swiper>
	<search 
		@result-click="resultClick" 
		:results="results" 
		v-model="value" 
		position="absolute"
		auto-scroll-to-top top="46px" 
		@on-submit="onSubmit"
		cancel-text="取消"
		placeholder="请输入关键词"
	></search>
	<flexbox class='home_nav'>
		<flexbox-item>
			<router-link :to="{name:'channel',params:{type:1}}" class='routerlink flex-demo'>
				<!-- <icon type='warn'></icon> -->
				<img src="../assets/male.png"class="icon">
				<p>男生</p>
			</router-link>
		</flexbox-item>
		<flexbox-item>
			<router-link :to="{name:'channel2',params:{type:0}}" class='routerlink flex-demo'>
				<img src="../assets/famale.png"class="icon">
				<p>女生</p>
			</router-link>
		</flexbox-item>
		<flexbox-item>
			<router-link to='/category' class='routerlink flex-demo'>
				<img class="icon" src="../assets/category.png"></img>
				<p>分类</p>
			</router-link>
		</flexbox-item>
		<flexbox-item>
			<router-link to='/rank' class='routerlink flex-demo'>
				<img src="../assets/rank.png" alt="" class="icon">
				<p>排行</p>
			</router-link>
		</flexbox-item>
	</flexbox>

	<Hot :listData="DONE_HOME_LIST.hot"></Hot>
	<Rank :listData='DONE_HOME_LIST.rank'></Rank>
	<Category :listData='DONE_HOME_LIST.category'></Category>
	<Channel :listData='DONE_HOME_LIST.channel'></Channel>
</div>
</template>

<script>
import {Swiper,SwiperItem,Search,Tab,TabItem,Flexbox, FlexboxItem,Icon} from 'vux'
import Rank from '../components/rank.vue'
import Category from '../components/category.vue'
import Channel from '../components/channel.vue'
import Hot  from '../components/hot.vue'

import { mapGetters } from 'vuex'
const imgList = [
  'http://qidian.qpic.cn/qidian_common/349573/37f39e9a422bdf33676511861a70d947/0',
  'http://qidian.qpic.cn/qidian_common/349573/069ee39f58d1aa4b214c75f01cc4192d/0',
  'http://qidian.qpic.cn/qidian_common/349573/78522f7f537312a67e4d79fd4e475a10/0',
  'http://qidian.qpic.cn/qidian_common/349573/18cf119c9257474ad9f274b5ca984333/0'
]
export default {
  name:'home',
  components: { Swiper ,SwiperItem,Search,Tab, TabItem, Flexbox, FlexboxItem,
  	Rank,Category,Channel,Hot,Icon
  },
  data () {
    return {
    	list: imgList,
    	results: [],
    	value: null,
    	isShow:true, 	
    }
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    onSubmit (item) {
    	console.log(item);
    },
    getHomeData(){
    	this.$store.dispatch('FETCH_HOME_LIST')
    },
  },
  created(){
   	this.getHomeData()
  },

computed:{
   ...mapGetters(['DONE_HOME_LIST','DONE_HOME_LOADING'])
},
  
}
</script>

<style>
	.home_nav{
		background: #EFEFF4
	}
	.flex-demo {
		margin: 5px 0 0 0;
	  text-align: center;
	  height: 58px;
	  font-size: 12px;
	}
	.flex-demo p{
		margin: 3px 0 0 0;
		color: #999;
		font-size: 13px;
	}
	.routerlink{
		color:#333;
		display: block;
	}
	.routerlink .icon{
		margin: 0;padding: 0;height: 28px;width: 28px;
	}
	.copyright {
	  font-size: 12px;
	  color: #ccc;
	  text-align: center;
	}
	.text-scroll {
	  border: 1px solid #ddd;
	  border-left: none;
	  border-right: none;
	}
	.text-scroll p{
	  font-size: 12px;
	  text-align: center;
	  line-height: 30px;
	}
	.black {
	  background-color: #000;
	}
	.title{
	  line-height: 100px;
	  text-align: center;
	  color: #fff;
	}
	.animated {
	  animation-duration: 1s;
	  animation-fill-mode: both;
	}
	.vux-indicator.custom-bottom {
	  bottom: 30px;
	}
	@-webkit-keyframes fadeInUp {
	  from {
	    opacity: 0;
	    transform: translate3d(0, 100%, 0);
	  }
	  100% {
	    opacity: 1;
	    transform: none;
	  }
	}
	@keyframes fadeInUp {
	  from {
	    opacity: 0;
	    transform: translate3d(0, 100%, 0);
	  }
	  100% {
	    opacity: 1;
	    transform: none;
	  }
	}
	.fadeInUp {
	  animation-name: fadeInUp;
	}
	.swiper-demo-img img {
	  width: 100%;
	}
</style>
