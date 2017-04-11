<template>    
	<div style="font-size:16px;min-height: 199px;">
		<div class="home_title">
			<h3 class="module-title">排行榜</h3>
			<span class="more">
				<router-link to="/rank" class="module-header-btn">
					更多 >
				</router-link>
			</span>
		</div>
		<scroller lock-y :scrollbar-x=false>
			<div class="box1">
		        <div class="box1-item" v-for="i in 7">
		        	<router-link to="/rank" class="routerlink">
		        		<img src="../assets/150.jpg" class="slide-img">
		        		<figcaption class="slide-caption">xxxx</figcaption>
		        		<p class="slide-author"> 一梦黄粱 </p>
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
	.module-title {
	    font-family: FZZCYSK;
	    font-weight: 400;
	    display: inline;
	    color: #33373d;
	}
	.module-title::before {
	    display: inline-block;
	    box-sizing: border-box;
	    width: .625rem;
	    height: 1em;
	    content: '';
	    vertical-align: -.22ex;
	    color: transparent;
	    border-left: 2px solid #ed424b;
	}
	.more{
	    position: relative;
	    float: right;
	    min-width: 4rem;
	}
	.module-header-btn {
	    font-size: .875rem;
	    line-height: 1.5rem;
	    position: absolute;
	    right: -.75rem;
	    padding: .5rem .5rem .5rem .75rem;
	    white-space: nowrap;
	    color: #969ba3;
	}
	
</style>
