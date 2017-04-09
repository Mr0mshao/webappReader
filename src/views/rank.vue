<template>    
<div>

  <layout-list :datalist="list"></layout-list>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import layoutList from '../components/list.vue'

export default {
  name:'rank',
  components: {layoutList },
  data () {
    return {
      list:[
        {
          "id":10001,
          "img_url":'http://www.mr-mshao.space/resource/aid8/841914d3930b205618aac7de05e07ec6.jpg',
          "title":'神级剑魂系统',
          "author":'蝴蝶兰',
          "desc":`森罗万象，皆为灰烬，流刃若火！穿越到海贼世界，大海贼时代十一年的罗亚，得到了一个能够无限强化，抽取各种技能的剑魂系统。流刃若火，镜花水月，月牙天冲，千本樱……“我这一刀下去，你可能会被烧死。”罗亚看着眼前的赤犬，很认真的说道。………………………………风盟2群：580391329`,
          "type":'二次元',
          "status":'连载',
          "total":20.12
        },{
          "id":10002,
          "img_url":'http://www.mr-mshao.space/resource/aid8/841914d3930b205618aac7de05e07ec6.jpg',
          "title":'神级剑魂',
          "author":'蝴蝶兰',
          "desc":`森罗万象，皆为灰烬，流刃若火！穿越到海贼世界，大海贼时代十一年的罗亚，得到了一个能够无限强化，抽取各种技能的剑魂系统。流刃若火，镜花水月，月牙天冲，千本樱……“我这一刀下去，你可能会被烧死。”罗亚看着眼前的赤犬，很认真的说道。………………………………风盟2群：580391329`,
          "type":'玄幻奇幻',
          "status":'连载',
          "total":20.12
        },
      ]
    }
  },
  methods: {
    
  },
  create (){

  },
  mounted(){
    this.$store.dispatch('FETCH_RANK_LIST')


  },
  computed:{
    ...mapGetters(['DONE_RANK_LIST','FETCH_RANK_LIST'])
  }
}
</script>

<style>
	
</style>
