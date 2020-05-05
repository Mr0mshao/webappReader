/*
 * @Author: mr.mshao 
 * @Date: 2017-11-30 09:03:26 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-01-23 20:16:06
 */
<template>
  <div class="container">
    <button @click="handleClick">点击按钮直接登陆</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      const obj = {
        username: '张三',
        password: '123456'
      }
      this.$store.dispatch('FETCH_LOGIN', { ...obj })
          .then(() => {
            this.$router.go(-1)
          })
    }
  }
}
</script>

<style>

</style>
