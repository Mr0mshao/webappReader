/*
 * @Author: mr.mshao 
 * @Date: 2017-11-30 09:14:04 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-01-23 16:45:43
 */

<template>
  <div>
    {{DONE_USERINFO}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['DONE_USERINFO'])
  }
}
</script>

<style>

</style>
