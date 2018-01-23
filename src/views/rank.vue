<template>    
<div>
  <List :data-list="DONE_RANKDATA" />
  <x-button type="default" @click.native="loadMore">加载更多...</x-button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { XButton} from 'vux'
import List from '../components/list'
export default {
  name:'rank',
  components: { XButton, List },
  data () {
    return {
      pageIndex: 0
    }
  },
  methods: {
    loadMore(){
      this.fetchRankData(this.pageIndex)
    },
    fetchRankData (pageIndex = this.pageIndex) {
      if (this.pageIndex >= 2) {
        alert('没有更多了...')
        return false
      }
      this.$store.dispatch('FETCH_RANKDATA', pageIndex)
          .then(() => {
            this.pageIndex += 1
          })
    }
  },
  mounted () {
    this.fetchRankData()
  },
  computed: {
    ...mapGetters(['DONE_RANKDATA'])
  }
}
</script>