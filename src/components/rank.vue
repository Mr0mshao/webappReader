<template>    
	<div style="font-size:16px;min-height: 199px;">
		<div class="home_title rank">
			<i>| </i>
			<h3>排行榜</h3>
			<span class="more">
				<router-link to="/rank">
					更多>
				</router-link>
			</span>
		</div>
		<scroller lock-y :scrollbar-x=false>
			<div class="box1">
		        <div class="box1-item" v-for="i in 7">
		        	<router-link to="/rank" class="routerlink">
		        		<img src="../assets/150.jpg" height="200" width="150">
		        		<figcaption>xxxx</figcaption>
		        		<p> 一梦黄粱 </p>
		        	</router-link>
		        </div>
	      	</div>
	    </scroller>
	</div>
</template>

<script>
import {Scroller,Flexbox, FlexboxItem} from 'vux'
export default {
  name:'rank',
  components: {Scroller,Flexbox, FlexboxItem},
  props:['listData'],
  data () {
    return {
    }
  },
  methods: {
  	
  },
  computed:{},
  mounted(){
  	
  },
}

</script>

<style scope>
	.routerlink{
		color:#333;
		display: block;
	}
	.more{
		float: right;
		font-size: 14px;
		color: #969ba3;
	}
	
	.rank i{
		font-style: normal;
		color: red;
		font-weight: bold;
		padding-right: 6px;
	}
	.rank h3{
		display: inline;
		font-size: 16px;
	}
</style>
