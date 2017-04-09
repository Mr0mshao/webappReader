<template>    
	<div>
		<ol class="book-ol book-ol-normal">
			<li class="book-li" v-for="item in datalist">
				<router-link :to="{name:'book',params:{id:item.id}}" class="book-layout">
					<img :src="item.img_url" class="book-cover">
						<div class="book-cell">
							<h4 class="book-title">{{item.name}}</h4>
							<p class="book-desc">
								{{item.description}}
							</p>
							<div class="book-meta">
								<div class="book-meta-l">
									作者：<span>{{item.author}}</span>
								</div>
								<div class="book-meta-r">
									<span>
										<em class="book-meta-icon">{{item.type}}</em>
										<em class="book-meta-icon red">{{item.status === '0' ? '连载' : '完本'}}</em>
										<em class="book-meta-icon info">{{item.wordcount}}万字</em>
									</span>
								</div>
							</div>
						</div>

				</router-link>
			</li>
		</ol>

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