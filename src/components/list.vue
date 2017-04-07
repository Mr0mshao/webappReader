<template>    
	<div>
		<ol class="book-ol book-ol-normal">
			<li class="book-li">
				<router-link to='/rank' class="book-layout">
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
		{{datalist}}
	</div>
</template>

<script>


export default {
  name:'list',
  components: {},
  props:['datalist'],
  data () {
    return {}
  },
  methods: {},
  computed:{},
  mounted(){},
}

</script>

<style>

</style>