<template>    
<div>
  <List :datalist="DONE_CATEGORY_DETAIL" />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import List from '../components/list.vue'
export default {
  name:'category',
  components: { List },
  created (){
    // this.$store.dispatch('FETCH_CATEGORY_DETAIL',{"id":this.$route.params.id})
  },
  computed:{
    // ...mapGetters(['DONE_CATEGORY_DETAIL'])
  }
}
</script>
