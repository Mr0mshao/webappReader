<template>    
<div>
	<swiper 
		:aspect-ratio="300/800"
		dots-position="center"
		auto
		loop
	 >
		<swiper-item class="swiper-demo-img" v-for="(item,index) in list" :key="index"><img :src="item">
		</swiper-item>
	</swiper>
	<search 
		auto-scroll-to-top top="46px" 
		position="absolute"
		cancel-text="取消"
		placeholder="请输入关键词"
	></search>
	<flexbox class='home_nav'>
		<flexbox-item>
			<router-link to="/male" class='routerlink flex-demo'>
				<img src="../assets/male.png" class="icon">
				<p>男生</p>
			</router-link>
		</flexbox-item>
		<flexbox-item>
			<router-link to="/female" class='routerlink flex-demo'>
				<img src="../assets/famale.png" class="icon">
				<p>女生</p>
			</router-link>
		</flexbox-item>
		<flexbox-item>
			<router-link to='/category' class='routerlink flex-demo'>
				<img class="icon" src="../assets/category.png" />
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
	<Hot :listData="DONE_PAGEDATA && DONE_PAGEDATA.hot"></Hot>
	<Rank :listData='DONE_PAGEDATA && DONE_PAGEDATA.rank'></Rank>
	<Category :listData='DONE_PAGEDATA && DONE_PAGEDATA.categoryUpper'></Category>
	<Categorys :listData='DONE_PAGEDATA && DONE_PAGEDATA.categoryBottom'></Categorys>
	<Channel :listData='DONE_PAGEDATA && DONE_PAGEDATA.channel'></Channel>
</div>
</template>
<script>
import { Swiper, SwiperItem, Search, Tab, TabItem, Flexbox, FlexboxItem, Icon } from 'vux'
import Rank from '../components/rank.vue'
import Category from '../components/category.vue'
import Categorys from '../components/category2.vue'
import Channel from '../components/channel.vue'
import Hot  from '../components/hot.vue'

import { mapGetters } from 'vuex'
export default {
  name:'home',
  components: { Swiper ,SwiperItem, Search, Tab, TabItem, Flexbox, FlexboxItem, Rank, Category, Channel, Hot, Icon, Categorys },
  data () {
		const imgList = [
			'http://qidian.qpic.cn/qidian_common/349573/37f39e9a422bdf33676511861a70d947/0',
			'http://qidian.qpic.cn/qidian_common/349573/069ee39f58d1aa4b214c75f01cc4192d/0',
			'http://qidian.qpic.cn/qidian_common/349573/78522f7f537312a67e4d79fd4e475a10/0',
			'http://qidian.qpic.cn/qidian_common/349573/18cf119c9257474ad9f274b5ca984333/0',
			'http://qidian.qpic.cn/qidian_common/349573/674ec876a92fcdb9c2a03c7f96d53c1f/0'
		]
    return {
    	list: imgList,
    	results: [],
    	value: null,
    	isShow:true,
    	sShow:false,
    	keyWords:'', 	
    }
  },
  methods: {
    resultClick (item) {
      this.$router.push({ name: 'book', params: { id: item.id }})
    },
    onSubmit () {
    	this.$store.dispatch('FETCH_SEARCH',{'key':this.keyWords})
    	this.keyWords = ''	
		},
		fetchHomeData () {
			this.$store.dispatch('FETCH_PAGEDATA')
		}
	},
	computed: {
		...mapGetters(['DONE_PAGEDATA'])
	},
	mounted () {
		this.fetchHomeData()
	}
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
