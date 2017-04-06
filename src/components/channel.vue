<template>    
<div style="font-size: 16px;">
	<div class="home_title rank">
		<i>| </i>
		<h3>频道</h3>
		<div class="channel_cate">
			<span class='link selected' @click='index=0' :disabled="index === 0">
				男生
			</span>
			<span class='link' @click='index=1' :disabled="index === 1">
				女生
			</span>
		</div>
		<span class="more">
			<router-link to="/channel">
				更多>
			</router-link>
		</span>
	</div>
	<swiper v-model='index' :show-dots="false" height="363px">
		<swiper-item :key='index'>
			<div class="book-ol book-ol-normal">
				<div class="book-li">
					<router-link to="/rank" class="book-layout">
						<img src="../assets/150.jpg" class="book-cover">
						<div class="book-cell">
							<h4 class="book-title">神级剑魂系统</h4>
							<p class="book-desc">
								森罗万象，皆为灰烬，流刃若火！穿越到海贼世界，大海贼时代十一年的罗亚，得到了一个能够无限强化，抽取各种技能的剑魂系统。流刃若火，镜花水月，月牙天冲，千本樱……“我这一刀下去，你可能会被烧死。”罗亚看着眼前的赤犬，很认真的说道。………………………………风盟2群：580391329
							</p>
							<div class="book-meta">
								<div class="book-meta-l">
									作者：<span>马是好</span>
								</div>
								<div class="book-meta-r">
									<span>
										<em class="book-meta-icon">二次元</em>
										<em class="book-meta-icon red">二次元</em>
										<em class="book-meta-icon info">二次元</em>
									</span>
								</div>
							</div>
						</div>
					</router-link>				
				</div>
				<div class="book-li">
					<router-link to="/rank" class="book-layout">
						<img src="../assets/150.jpg" class="book-cover">
						<div class="book-cell">
							<h4 class="book-title">神级剑魂系统</h4>
							<p class="book-desc">
								森罗万象，皆为灰烬，流刃若火！穿越到海贼世界，大海贼时代十一年的罗亚，得到了一个能够无限强化，抽取各种技能的剑魂系统。流刃若火，镜花水月，月牙天冲，千本樱……“我这一刀下去，你可能会被烧死。”罗亚看着眼前的赤犬，很认真的说道。………………………………风盟2群：580391329
							</p>
							<div class="book-meta">
								<div class="book-meta-l">
									作者：<span>马是好</span>
								</div>
								<div class="book-meta-r">
									<span>
										<em class="book-meta-icon">二次元</em>
										<em class="book-meta-icon red">二次元</em>
										<em class="book-meta-icon info">推荐</em>
									</span>
								</div>
							</div>
						</div>
					</router-link>
				</div><div class="book-li">
					<router-link to="/rank" class="book-layout">
						<img src="../assets/150.jpg" class="book-cover">
						<div class="book-cell">
							<h4 class="book-title">神级剑魂系统</h4>
							<p class="book-desc">
								森罗万象，皆为灰烬，流刃若火！穿越到海贼世界，大海贼时代十一年的罗亚，得到了一个能够无限强化，抽取各种技能的剑魂系统。流刃若火，镜花水月，月牙天冲，千本樱……“我这一刀下去，你可能会被烧死。”罗亚看着眼前的赤犬，很认真的说道。………………………………风盟2群：580391329
							</p>
							<div class="book-meta">
								<div class="book-meta-l">
									作者：<span>马是好</span>
								</div>
								<div class="book-meta-r">
									<span>
										<em class="book-meta-icon">二次元</em>
										<em class="book-meta-icon red">二次元</em>
										<em class="book-meta-icon info">二次元</em>
									</span>
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>		
		</swiper-item>
		<swiper-item :key='index'>
			<ol class="book-ol book-ol-normal">
				<li class="book-li">
					<router-link to="/rank" class="book-layout">
						<img src="../assets/151.jpg" class="book-cover">
						<div class="book-cell">
							<h4 class="book-title">剑魂系统</h4>
							<p class="book-desc">
								森罗万象，皆为灰烬，流刃若火！穿越到海贼世界，大海贼时代十一年的罗亚，得到了一个能够无限强化，抽取各种技能的剑魂系统。流刃若火，镜花水月，月牙天冲，千本樱……“我这一刀下去，你可能会被烧死。”罗亚看着眼前的赤犬，很认真的说道。………………………………风盟2群：580391329
							</p>
							<div class="book-meta">
								<div class="book-meta-l">
									作者：<span>马好</span>
								</div>
								<div class="book-meta-r">
									<span>
										<em class="book-meta-icon">二次元</em>
										<em class="book-meta-icon red">二次元</em>
										<em class="book-meta-icon info">二元</em>
									</span>
								</div>
							</div>
						</div>
					</router-link>
					
				</li>
				<li class="book-li">
					<router-link to="/rank" class="book-layout">
						<img src="../assets/151.jpg" class="book-cover">
						<div class="book-cell">
							<h4 class="book-title">神级剑魂</h4>
							<p class="book-desc">
								森罗万象，皆为灰烬，流刃若火！穿越到海贼世界，大海贼时代十一年的罗亚，得到了一个能够无限强化，抽取各种技能的剑魂系统。流刃若火，镜花水月，月牙天冲，千本樱……“我这一刀下去，你可能会被烧死。”罗亚看着眼前的赤犬，很认真的说道。………………………………风盟2群：580391329
							</p>
							<div class="book-meta">
								<div class="book-meta-l">
									作者：<span>马是好</span>
								</div>
								<div class="book-meta-r">
									<span>
										<em class="book-meta-icon">二次元</em>
										<em class="book-meta-icon red">连载</em>
										<em class="book-meta-icon info">二次元</em>
									</span>
								</div>
							</div>
						</div>
					</router-link>
				</li>
			</ol>		
		</swiper-item>
	</swiper>
</div>
</template>

<script>
import {Swiper, SwiperItem} from 'vux'
export default {
  name:'category',
  components: { Swiper, SwiperItem},
  props:['listData'],
  data () {
    return {
    	index:0,
    }
  },
  methods: {

  },
}

</script>

<style>
ol{
	padding: 0;list-style: none;
}
.channel_cate{
	display: inline;
	font-size: 13px;
}
.channel_cate .link{
	color: #999;
}
.channel_cate .selected{
	color: #f60;
}
.book-layout{
	  position: relative;
    display: block;
    overflow: hidden;
    padding: 16px;
    -webkit-transition: padding-left .15s;
    transition: padding-left .15s;
}
.book-cover{
	  font-size: 0;
    float: left;
    width: 4.125rem;
    height: 5.5rem;
    margin-right: .5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
}
.book-cell{
	overflow: hidden;
}
.book-title {
    line-height: 1.4;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.book-desc{
	  line-height: 1.1875rem;
    display: -webkit-box;
    height: 2.25rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: .875rem;
    line-height: 1.125rem;
    overflow: hidden;
    margin: .375rem 0;
    color: #969ba3;
}
.book-meta {
    font-size: .75rem;
    overflow: hidden;
}
.book-meta-l{
	float: left;
}
.book-meta-r{
	float: right;
}
.book-meta-icon{
	font-style: normal;
	border:1px solid #eee;
	border-top-width: 2px; 
	border-top-bottom: 2px; 
	border-radius: 2px;
	padding: 1px 5px; 
}
.red{
	color:red;

}
.info{
	color:blue;

}
</style>


