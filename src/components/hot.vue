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
	        		<img :src="i.url">
	        		<figcaption>{{i.name}}</figcaption>
	        		<p> 一梦黄粱 </p>
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
		color:#333;
		display: block;
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
		height: 155px;
		width: 82px;
	  display:inline-block;
	  float: left;
	  text-align: center;
	  overflow: hidden;
	}
	.box1-item img{
      display: block;
      margin: 0 auto;
	    width: inherit;
	    height: 88px;
	    box-shadow: 0 1px 3px rgba(0,0,0,.3);
	}
	.box1-item figcaption{
		font-size: 13px;
	    line-height: 1.25;
	    overflow: hidden;
	    max-height: 34px;
	    margin: 8px 0 2px;
    /*text-align: left;*/
	}
	.box1-item p{
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #969ba3;
	}
	.box1-item:first-child {
	  margin-left: 15px;
	}
</style>
