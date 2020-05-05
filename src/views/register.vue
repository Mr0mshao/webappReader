/*
 * @Author: mr.mshao 
 * @Date: 2017-11-30 09:03:51 
 * @Last Modified by:   mr.mshao 
 * @Last Modified time: 2017-11-30 09:03:51 
 */

<template>
  <div class="container">
    <group gutter='0'>
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <!-- <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input> -->
      <x-input title="验&nbsp;证&nbsp;码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
      <div class="wrapper">
        <x-button type="primary">确认注册</x-button>
      </div>
    </group>
  </div>
</template>

<script>
import { Group, Cell, XInput, XButton } from 'vux'
export default {
  components: { Group, Cell, XInput, XButton },
}
</script>

<style scoped>
.wrapper {
  padding: 0 10px;
}
</style>
