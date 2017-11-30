<template>    
    <div>
      <x-header 
        :left-options="{backText: '',showBack:isShowBack}"
        :right-options="{showMore:false}"
        style="background-color:#000;"
      >
        我的书城
        <router-link to="/register" slot="right">注册</router-link>
        <router-link to="/login" slot="right">登录</router-link>
        </span>
      </x-header>
      <!-- <div v-transfer-dom>
        <x-dialog v-model="showXdialog" :hideOnBlur="true">
          <p class="dialog-title">登录</p>
          <div class="dialog-content">
            <group gutter="0">
              <x-input 
              title="账 户：" 
              placeholder="请输入账户" 
              type="text"
              v-model="loginInfo.username"
              :required="true"
              ></x-input>
              <x-input 
              title="密 码：" 
              placeholder="请输入密码" 
              type="password"
              v-model="loginInfo.password"
              :required="true"
              ></x-input>
            </group>
          </div>
          <div class="btn">
            <button class="dialog-btn dialog-confir" @click="getValue" v-on:keyup.enter="getValue">确认</button>
            <button class="dialog-btn dialog-close" @click="showXdialog = false">取消</button>
          </div>
        </x-dialog>
      </div>
      <div v-transfer-dom>
        <x-dialog v-model="showReginster" :hideOnBlur="true">
          <p class="dialog-title">注册</p>
          <div class="dialog-content">
            <group gutter="0">
              <x-input 
                placeholder="请输入账户" 
                type="text"
                is-type="validElement"
                v-model="registerInfo.username"
                :required="true"
              >
<img slot="label" class="input-icon" src="../assets/user.png" >
              </x-input>
              <x-input 
                title="邮 箱：" 
                placeholder="请输入邮箱" 
                type="text"
                is-type="email"
                v-model="registerInfo.email"
                :required="true"
              >
<img slot="label" class="input-icon" src="../assets/email.png" >
              </x-input>
              <x-input 
                title="昵 称：" 
                placeholder="请输入昵称" 
                type="text"
                
                v-model="registerInfo.nickName"
                :required="true"
              >
<img slot="label" class="input-icon" src="../assets/nicheng2.png" >
              </x-input>
              <x-input 
                title="密 码：" 
                placeholder="请输入密码"
                type="password"
                v-model="registerInfo.password"
                :required="true"
              >
<img slot="label" class="input-icon" src="../assets/pwd.png" >
              </x-input>
              <x-input 
                title="确认密码："
                placeholder="请输入确认密码" 
                type="password"
                :required="true"
                v-model="registerInfo.confirPassword"
                :equal-with="registerInfo.password"
              >
<img slot="label" class="input-icon" src="../assets/confirpwd.png" >
              </x-input>
            </group>
          </div>
          <div class="btn">
            <button class="dialog-btn dialog-confir" @click="getRegValue">确认</button>
            <button class="dialog-btn dialog-close" @click="showReginster = false">取消</button>
          </div>
        </x-dialog>
      </div> -->
      <!-- <div v-transfer-dom>
        <alert v-model="DONE_ALERTSHOW" :title='alertTitle' @on-hide="onHide">{{DONE_ALERT_CONTENT}}</alert>
      </div> -->

    </div>
</template>

<script>
import { XHeader,XDialog,XInput,Alert,Group,TransferDomDirective as TransferDom } from 'vux'
import { mapGetters } from 'vuex'
export default {
  directives: { TransferDom },
  components: { XHeader,XDialog,XInput, Group,Alert  },
  props:['isShowBack'],
  data () {
    return {
      // loginInfo:{
      //   username:'',
      //   password:''
      // },
      // registerInfo:{
      //   username:'',
      //   email:'',
      //   nickName:'',
      //   password:'',
      //   confirPassword:'',
      // },
      // showReginster:false,
      // showXdialog:false,
      pageTitle: '我的书城',
      // alertTitle:'',
      // validElement: function(value){
      //   return {
      //     vaild : value==='2333',
      //     msg: 'Must be 2333'
      //   }
      // },
    }
  },
  methods:{
    // getValue(){
    //   if( this.loginInfo.username && this.loginInfo.password && this.loginInfo.username.length>5){
    //     this.alertTitle = '登录'
    //     this.showXdialog = false;
    //     this.login(this.loginInfo)
    //   }else{
    //     this.showXdialog = false;
    //     // alert('请输入合法的帐号或密码')
    //     this.$store.dispatch('FETCH_ALERT_CONTENT','请输入合法的帐号或密码')
    //     return false
    //   }
    // },
    // getRegValue(){
    //   if(this.registerInfo.username && this.registerInfo.password && this.registerInfo.nickName && this.registerInfo.confirPassword && this.registerInfo.email ){
    //     this.alertTitle = '注册'
    //     this.register(this.registerInfo)
    //     this.showReginster = false;
    //   }else{
    //     this.showReginster = false;
    //     this.$store.dispatch('FETCH_ALERT_CONTENT','请输入合法的字段')
    //     return false
    //   }

      
    // },
    login(params){
      
    },
    register(params){
      this.$store.dispatch('FETCH_REGISTER',params)
    },
    logout(){
      console.log('注销')
      this.$store.dispatch('FETCH_LOGOUT')
    },
    onHide () {
      console.log('on hide')
      this.$store.dispatch('FETCH_ALERTSHOW')
    },
  }
}
</script>
<style scoped>
.weui-dialog{
  border-radius: 8px;
}
.dialog-title {
  height: 35px;
  line-height: 35px;
  color: #666;
  font-size: 20px;
  padding: 7px 0;
}
.dialog-content{
  overflow: hidden;
  position: relative;
}
.dialog-btn {
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48%;
  font-size: 16px;
  border:none;
  background: none;
  color: red;
}
.dialog-confir{
  border-right: 1px solid #999;
  color: green;
}
.register{
  position: absolute;
  bottom: 0;right: 0.5em;
  height: 44px;
  line-height: 44px;
  width: 8em;
}
.register .register-link{
  display: block;
  font-size: 13px;
  color:#555;
}
.btn{
  border-top: 1px solid #ddd
}
.input-icon {
  display:block;
  width: 24px;
  height: 24px;
  padding-right:10px;
}
</style>

