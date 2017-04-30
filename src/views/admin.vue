<template>
	<div>
		<group>
			<x-input title="ID:" v-model="data.id"></x-input>
			<x-input title="URL:" v-model="data.url"></x-input>
			<x-input title="名称:" v-model="data.name"></x-input>
			<x-input title="作者:" v-model="data.author"></x-input>
			<x-textarea title="简介" v-model="data.description"></x-textarea>
			<x-input title="类型:" v-model="data.type"></x-input>
			<x-input title="频道:" v-model="data.channel"></x-input>
			<x-input title="字数:" v-model="data.wordcount"></x-input>
			<x-input title="关键字:" v-model="data.keywords"></x-input>
			<x-button type="primary" action-type="button" @click.native="onSubmit">submit</x-button>
		</group>	
		{{DONE_ADMIN}}
	</div>



</template>

<script>
import {XInput,Group,XTextarea,XButton } from 'vux'
import { mapGetters } from 'vuex'
export default {
	name:'admin',
	components:{XInput,Group,XTextarea,XButton },
	data(){
		return {
			data:{
				id:'',
				url:'',
				name:'',
				author:'',
				description:'',
				type:'',
				channel:'',
				wordcount:'',
				keywords:''
			}
		}
	},
	methods:{
		onSubmit(){
			console.log(JSON.stringify(this.data));
			this.$store.dispatch('FETCH_ADMIN',this.data)
		}
	},
	computed:{
    ...mapGetters(['DONE_ADMIN'])
  }

}
	
</script>

<style>
	
</style>