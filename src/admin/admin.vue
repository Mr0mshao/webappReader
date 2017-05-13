<template>
	<div>
		<!-- <group title="小说录入">
			<x-input title="id:" v-model="tt" :readonly="true" :show-clear="false"></x-input>
			<x-input title="URL:" v-model="data.url"></x-input>
			<x-input title="名称:" v-model="data.name"></x-input>
			<x-input title="作者:" v-model="data.author"></x-input>
			<x-textarea title="简介" v-model="data.description"></x-textarea>
			<x-input title="类型:" v-model="data.type"></x-input>
			<x-input title="频道:" v-model="data.channel"></x-input>
			<x-input title="字数:" v-model="data.wordcount"></x-input>
			<x-input title="关键字:" v-model="data.keywords"></x-input>
			<x-button type="primary" action-type="button" @click.native="onSubmit">submit</x-button>
		</group> -->	
<!-- 		{{DONE_ADMIN}}
		{{DONE_BOOKID}} -->
		<table cellpadding="0" cellspacing="0">
			<thead>
				<tr>
					<th>序号</th>
					<th>ID</th>
					<th>名称</th>
					<th>作者</th>
					<th>类型</th>
					<th>频道</th>
					<th>字数</th>
					<th>关键字</th>
					<th>状态</th>
					<th>PV</th>
					<th>创建时间</th>
					<th>更新时间</th>
					<th>操作</th>

				</tr>
			</thead>
			<tbody style="text-align: center">
				<tr v-for="(item,index) in DONE_ADMIN" >
					<td>{{index + 1}}</td>
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.author}}</td>
					<td>{{item.type | formatType}}</td>
					<td :style="{color: item.channel == 1 ? 'green' : '#f90'}">{{item.channel == 1 ? '男生' : '女生'}}</td>
					<td>{{item.wordcount}}万字</td>
					<td>{{item.keywords}}</td>
					<td :style="{color: item.status == 1 ? 'green' : '#f90'}">{{item.status == 1 ? '完本' : '连载'}}</td>
					<td>{{item.hot}}</td>
					<td>{{item.createtime | formatDate}}</td>
					<td>{{item.updatetime | formatDate}}</td>
					<td>
						<a href="JavaScript:void:(0)" @click="showItem(item.id)">查看</a> |
						<a href="JavaScript:void:(0)" @click="delItem(item.id)" style="color:red">删除</a>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="admin-mask" v-if="showBook">
			<div class="books-container">
				<h4 class="books-title">{{DONE_BOOK.name}}</h4>
				<div class="books-top">
					<div class="books"><img :src="DONE_BOOK.url" alt=""></div>
					<div class="books">
						<group gutter="0" FSize="14px" label-margin-right="0">
							<x-input title="名称：" label-width="8em" v-model='DONE_BOOK.name' height="20px"></x-input>
							<x-input title="作者：" label-width="8em" v-model='DONE_BOOK.author'></x-input>
							<x-input title="类型：" label-width="8em" v-model='DONE_BOOK.type'></x-input>
							<x-input title="频道：" label-width="8em" v-model='DONE_BOOK.channel'></x-input>
							<x-input title="字数：" label-width="8em" v-model='DONE_BOOK.wordcount'></x-input>
						</group>
					</div>
					<div class="books">
						<group gutter="0" FSize="14px">
							<x-input title="关键字：" v-model='DONE_BOOK.keywords'></x-input>
							<x-input title="状态：" v-model='DONE_BOOK.status'></x-input>
							<x-input title="P V：" border-intent  v-model='DONE_BOOK.hot' :readonly="true"></x-input>
							<x-input title="创建：" v-model='DONE_BOOK.createtime' :readonly="true"></x-input>
							<x-input title="修改：" v-model='DONE_BOOK.updatetime' :readonly="true"></x-input>
						</group>
					</div>
				</div>
				<div>
					<group gutter="0" FSize="14px">				
						<x-textarea title="简介：" v-model="DONE_BOOK.description"></x-textarea>
					</group>
				</div>
				<div class="btn-group">
					<button class="books-btn-item" type="button"> 确认 </button>
					<button class="books-btn-item" type="button" @click="showBook = false"> 取消 </button>
				</div>
			</div>

		</div>
		
	</div>
	


</template>

<script>
import {XInput,Group,XTextarea,XButton,XDialog } from 'vux'
import { alert } from 'vue-strap'
import { mapGetters } from 'vuex'
export default {
	name:'admin',
	components:{XInput,Group,XTextarea,XButton,XDialog },
	data(){
		return {
			data:{
				url:'',
				name:'',
				author:'',
				description:'',
				type:'',
				channel:'',
				wordcount:'',
				keywords:''
			},
			showBook:false,
		}
	},
	methods:{
		onSubmit(){
			console.log(JSON.stringify(this.data));
			// this.$store.dispatch('FETCH_ADMIN',this.data)
		},
		showItem(id){
			console.log(id);
			this.showBook = true;
			this.$store.dispatch('FETCH_BOOK',{id:id});
		},
		delItem(id){},
		// routerTo(_id){
		// 	this.$router.push({name:'booklist',params:{id:_id}})
		// }
	},
	created(){
		this.$store.dispatch('FETCH_ADMIN')
	},	
	computed:{
	    ...mapGetters(['DONE_ADMIN','DONE_BOOK']),
	    // tt:function(){ return this.data.id = this.DONE_BOOKID.id}
  }

}
	
</script>

<style>
table{
	padding: 0;margin: 0;
	text-align: center;
}
table tr th,
table tr td{
	height: 30px;line-height: 30px;
	font-size: 14px;
	width: 4.5%;
}
tbody tr:nth-child(odd){
	background-color: #eee;
}

.admin-mask{
	position: fixed;
	left: 0;right: 0;top: 0;bottom: 0;
	margin: 0 auto;
	text-align: center;
	vertical-align: middle;
	background:rgba(37,37,37,0.7);
}
.books-container{
	width: 54%;
	margin: 10% auto;
	overflow: hidden;
	background-color: #fff;

}
.books{
	float: left;
	/*display: inline-block;*/
}
.books-info{
	/*width: 600px;*/
}
.books-title{
	font-size: 18px;
	font-style: normal;
	font-weight: normal;
	padding: 8px 0;
}
.books-top:after{
	content: " ";
	display: block;
	width: 0;height: 0;
	overflow: hidden;
	clear: both;


}
.books-btn-item{
	width: 30%;
	height: 35px;
	margin: 8px 10%;
	border: none;
	border-radius: 5px;
	/*background-color: #fff;*/
	color: green;
}
.books-btn-item:last-child{
	color: red;
}
</style>