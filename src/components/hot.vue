<template>    
	<div style="font-size:16px;min-height: 199px;">
		<div class="home_title hot">
			<i>| </i>
			<h3>热门推荐</h3>
		</div>
		<scroller lock-y :scrollbar-x=false ref="scroller">
	      <div class="box1">
	        <div class="box1-item" v-for="i in imglist">
	        	<router-link to="/rank" class="routerlink">
	        		<img :src="i.url" class="slide-img">
	        		<figcaption class="slide-caption">{{i.name}}</figcaption>
	        		<p class="slide-author"> 一梦黄粱 </p>
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
	    		"url":'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff'
	    	},{
	    		"name":'sss',
	  			"url":'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
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
	.hot i{
		font-style: normal;
		color: red;
		font-weight: bold;
		padding-right: 6px;
	}
	.hot h3{
		display: inline;
		font-size: 16px;
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
