<template>    
  <!-- <group>
    <cell v-for="item in DONE_CATEGORY_LIST" :title="item.type | formatType" :link="{name:'categoryDetail',params:{id:item.type}}" :key="item.type"></cell>
  </group> -->
  <div>
    暂无数据...
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Group, Cell } from 'vux'
export default {
  name:'category',
  components: { Group, Cell },
  // created () {
  //   this.$store.dispatch('FETCH_CATEGORY_LIST')
  // },
  // computed: {
  //   ...mapGetters(['DONE_CATEGORY_LIST'])
  // }
}
</script>