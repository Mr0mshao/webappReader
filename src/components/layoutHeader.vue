<template>    
    <div>

      <x-header 
        :left-options="{backText: '',showBack:isShowBack}"
        :right-options="{showMore:false}"
        style="background-color:#000;"
      >
        {{DONE_PAGETITLE ? DONE_PAGETITLE : pageTitle}}
        <a slot="right" v-show="DONE_ISLOGIN ? false : true" @click="showReginster= true">注册</a>
        <a slot="right" v-show="DONE_ISLOGIN ? false : true" @click="showXdialog = true">登录</a>
        <span slot="right" v-show="DONE_ISLOGIN ? true : false" style="font-size:12px;">
        {{DONE_USERINFO.nickName}} <span style="color: #f60">|</span> <span @click="logout">注销</span>
        </span>
      </x-header>

      <div v-transfer-dom>
        <x-dialog v-model="showXdialog" :hideOnBlur="true">
          <p class="dialog-title">登录</p>
          <div class="dialog-content">
            <group>
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
            <span class="dialog-btn dialog-confir" @click="getValue">确认</span>
            <span class="dialog-btn dialog-close" @click="showXdialog = false">取消</span>
          </div>
        </x-dialog>
      </div>
      <div v-transfer-dom>
        <x-dialog v-model="showReginster" :hideOnBlur="true">
          <p class="dialog-title">注册</p>
          <div class="dialog-content">
            <group>
              <x-input 
                placeholder="请输入账户" 
                type="text"
                is-type="validElement"
                v-model="registerInfo.username"
                :required="true"
              >
<img slot="label" style="padding-right:10px;display:block;" src="../assets/user.png" width="24" height="24">
              </x-input>
              <x-input 
                title="邮 箱：" 
                placeholder="请输入邮箱" 
                type="text"
                is-type="email"
                v-model="registerInfo.email"
                :required="true"
              >
<img slot="label" style="padding-right:10px;display:block;" src="../assets/email.png" width="24" height="24">
              </x-input>
              <x-input 
                title="昵 称：" 
                placeholder="请输入昵称" 
                type="text"
                
                v-model="registerInfo.nickName"
                :required="true"
              >
<img slot="label" style="padding-right:10px;display:block;" src="../assets/email.png" width="24" height="24">
              </x-input>
              <x-input 
                title="密 码：" 
                placeholder="请输入密码"
                type="password"
                v-model="registerInfo.password"
                :required="true"
              >
<img slot="label" style="padding-right:10px;display:block;" src="../assets/pwd.png" width="24" height="24">
              </x-input>
              <x-input 
                title="确认密码："
                placeholder="请输入确认密码" 
                type="password"
                :required="true"
                v-model="registerInfo.confirPassword"
                :equal-with="registerInfo.password"
              >
<img slot="label" style="padding-right:10px;display:block;" src="../assets/confirpwd.png" width="24" height="24">
              </x-input>
            </group>
          </div>
          <div class="btn">
            <span class="dialog-btn dialog-confir" @click="getRegValue">确认</span>
            <span class="dialog-btn dialog-close" @click="showReginster = false">取消</span>
          </div>
        </x-dialog>
      </div>
      <div v-transfer-dom>
        <alert v-model="DONE_ALERTSHOW" :title='alertTitle'>{{DONE_ALERT_CONTENT}}</alert>
      </div>

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
      loginInfo:{
        username:'',
        password:''
      },
      registerInfo:{
        username:'',
        email:'',
        nickName:'',
        password:'',
        confirPassword:'',
      },
      showReginster:false,
      showXdialog:false,
      pageTitle: '我的书城',
      alertTitle:'',
      validElement: function(value){
        return {
          vaild : value==='2333',
          msg: 'Must be 2333'
        }
      },
    }
  },
  computed:{
    ...mapGetters(['DONE_USERINFO','DONE_ISLOGIN','DONE_ALERTSHOW','DONE_PAGETITLE',
      'DONE_ALERT_CONTENT'])
  },
  methods:{
    getValue(){
      console.log(this.loginInfo);
      if( this.loginInfo.username && this.loginInfo.password ){
        this.alertTitle = '登录'
        this.showXdialog = false;
        this.login(this.loginInfo)
      }else{
        alert('请输入完整')
        return false
      }
    },
    getRegValue(){
      console.log(this.registerInfo);
      if(this.registerInfo.username && this.registerInfo.password && this.registerInfo.nickName && this.registerInfo.confirPassword && this.registerInfo.email ){
        this.alertTitle = '注册'
        this.showReginster = false;
        this.register(this.registerInfo)
      }else{
        alert('请输入完整')
        return false
      }

      
    },
    login(params){
      this.$store.dispatch('FETCH_LOGIN',params)
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
  },
}
</script>
<style>
.weui-dialog{
  border-radius: 8px;
}
.dialog-title {
  line-height: 30px;
  color: #666;
}
.dialog-content{
  height: 263px;
  overflow: hidden;
  
  position: relative;
}
.dialog-btn {
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48%;
}
.dialog-confir{
  border-right: 1px solid #999;
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
</style>

