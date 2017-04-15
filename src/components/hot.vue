<template>    
	<div style="font-size:16px;min-height: 199px;">
		<div class="home_title">
			<h3 class="module-title">最新热门</h3>
		</div>
		<scroller lock-y :scrollbar-x=false ref="scroller">
	      <div class="box1">
	        <div class="box1-item" v-for="item in listData">
	        	<router-link :to="{name:'book',params:{id:item.id}}" class="routerlink">
	        		<img :src="item.url" class="slide-img">
	        		<figcaption class="slide-caption">{{item.name}}</figcaption>
	        		<p class="slide-author"> {{item.author}} </p>
	        	</router-link>
	        </div>
	      </div>
	    </scroller>

	</div>
</template>

<script>
	import {Scroller} from 'vux'
	export default {
	  name:'hot',
	  components: {Scroller},
	  props:['listData'],
	  data () {
	    return {
	    	imglist:[],
	    	imglist2:[
	    	{
	    		"name":'xxx',
	    		"url":'http://qidian.qpic.cn/qdbimg/349573/1005038448/150'
	    	},{
	    		"name":'sss',
	  			"url":'http://qidian.qpic.cn/qdbimg/349573/1003667321/150',
	    	},{
	    		"name":'ttt',
	  			"url":'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
	    	},{
	    		"name":'xxx',
	    		"url":'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff'
	    	},{
	    		"name":'sss',
	  			"url":'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
	    	},{
	    		"name":'ttt',
	  			"url":'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
	    	},{
	    		"name":'ttt',
	  			"url":'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
	    	},
	  		
	  		]
	    }
	  },
	  methods: {
	  	xx(){
	  		setTimeout(()=>{
	  			this.$nextTick(() => {
					  this.$refs.scroller.reset()
					})
	  			this.imglist = this.imglist2;
	  			console.log(111)
	  			// this.$vux.loading.hide()
	  		},1000)
	  	},
	  },
	  mounted(){
	  	this.xx();
	  },
	}
</script>

<style scope>
	.routerlink{
	    display: block;
	    width: 4.125rem;
	    padding: .75rem .5rem .5rem;
	}
	.home_title{
		height: 44px;
		line-height: 44px;
		padding:  0 16px;
	}
	.box1 {
	  position: relative;
	  width: 589px;
	  overflow:hidden;
	}
	.box1-item {
		display: inline-block;
		vertical-align: top;
		white-space: normal;
	}
	.slide-img {
	    display: block;
	    height: 5.5rem;
	    width: 4.125rem; 
	    box-shadow: 0 1px 3px rgba(0,0,0,.3);
	}
	.slide-caption {
	    font-size: .8125rem;
	    line-height: 1.25;
	    overflow: hidden;
	    max-height: 2.125rem;
	    margin: .5rem 0 .125rem;
	}
	.slide-author {
	    font-size: .75rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #969ba3;
	}
	.box1-item:first-child {
	  margin-left: 15px;
	}
</style>
