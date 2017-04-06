<template>    
    <div>

      <x-header 
        :left-options="{backText: '',showBack:isShowBack}"
        :right-options="{showMore:false}"
        style="background-color:#000;"
      >
        {{title}}
        <a slot="right" v-show="DONE_ISLOGIN ? false : true" @click="showReginster= true">注册</a>
        <a slot="right" v-show="DONE_ISLOGIN ? false : true" @click="showXdialog = true">登录</a>
        <span slot="right" v-show="DONE_ISLOGIN ? true : false" style="font-size:12px;">
        {{DONE_USERINFO.username}} <span style="color: #f60">|</span> <span @click="logout">注销</span>
        </span>
      </x-header>

      <div v-transfer-dom>
        <x-dialog v-model="showXdialog" :hideOnBlur="true">
          <p class="dialog-title">登录</p>
          <div class="dialog-content">
            <group>
              <x-input 
              title="账 户：" 
              name="loginUsername" 
              placeholder="请输入账户" 
              type="text"
              ref="usr"
              required
              ></x-input>
              <x-input 
              title="密 码：" 
              name="loginPassword" 
              placeholder="请输入密码" 
              type="password"
              ref="pwd"
              required
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
                title="账 户：" 
                name="loginUsername" 
                placeholder="请输入账户" 
                type="text"
                ref="regUsr"
                required
              ></x-input>
              <x-input 
                title="密 码：" 
                name="loginPassword" 
                placeholder="请输入密码" 
                type="password"
                ref="regPwd"
                required
              ></x-input>
              <x-input 
                title="确认密码：" 
                name="confirPassword" 
                placeholder="请输入确认密码：" 
                type="password"
                ref="confirPwd"
                required
              ></x-input>
            </group>
          </div>
          <div class="btn">
            <span class="dialog-btn dialog-confir" @click="getRegValue">确认</span>
            <span class="dialog-btn dialog-close" @click="showReginster = false">取消</span>
          </div>
        </x-dialog>
      </div>
    </div>
</template>

<script>
import { XHeader,XDialog,XInput, Group,TransferDomDirective as TransferDom } from 'vux'
import { mapGetters } from 'vuex'
export default {
  directives: { TransferDom },
  components: { XHeader,XDialog,XInput, Group },
  props:['isShowBack'],
  data () {
    return {
      loginInfo:{},
      showReginster:false,
      showXdialog:false,
      title:'我的书城',
    }
  },
  computed:{
    ...mapGetters(['DONE_USERINFO','DONE_ISLOGIN'])
  },
  methods:{
    getValue(){
      this.loginInfo.loginUsername = this.$refs.usr.currentValue
      this.loginInfo.loginPassword = this.$refs.pwd.currentValue
      console.log(this.loginInfo);

      this.showXdialog = false;
      this.login()
    },
    getRegValue(){
      this.loginInfo.loginUsername = this.$refs.regUsr.currentValue
      this.loginInfo.loginPassword = this.$refs.regPwd.currentValue
      this.loginInfo.loginPassword = this.$refs.confirPwd.currentValue
      console.log(this.loginInfo);

      this.showXdialog = false;
    },
    login(){
      this.$store.dispatch('FETCH_LOGIN')
    },
    logout(){
      console.log('注销')
      this.$store.dispatch('FETCH_LOGOUT')
    }
  },
}
</script>
<style>
.weui-dialog{
  border-radius: 8px;
  padding-bottom: 8px;
}
.dialog-title {
  line-height: 30px;
  color: #666;
}
.dialog-content{
  height: 200px;
  overflow: hidden;
  background-color: #eee;
  position: relative;
}
.dialog-btn {
  display: inline-block;
  margin-top: 8px;
  margin-bottom: 8px;
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
</style>

