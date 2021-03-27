

<template>
  <div :class="loginClass">
    <div class="login-header-title">{{title}}</div>
    <div class="btn-wrapper">
      <div class="btn register-ban"        
        @mouseover="changeTips(true)"  
        @mouseleave="changeTips(false)">
        <a class="register_url login-btn" href="javascript:;">注册</a>
      </div>
      
   <transition
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <div v-show="showTip" class="animate__animated tips" >
        系统维护中，暂时无法注册
      </div>
    </transition>

      <div class="btn login">
        <a class="login_url login-btn" href="javascript:;">登录</a>
      </div>
    </div>
  </div>  
</template>


<script>
export default {
  props : {
    show : {
      type : Boolean,
      required : true
    }
  },
  watch : {
    show(newVal){
      if(newVal){
        this.loginClass = 'login-header show-header'
      }else{
        this.loginClass = 'login-header'
      }
    }
  },
  data() {
    return {
      loginClass : 'login-header',
      showTip : false,
      title : ''
    }
  },
  mounted() {
    this.title = this.$store.state.webTitle
  },
  methods: {
    changeTips(value){
      this.showTip = value
    }
  },
}
</script>

<style scoped>
.login-header {
  height: 64px;
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0 0 60px rgb(117 131 148 / 10%);
  -moz-box-shadow: 0 0 60px rgba(117,131,148,.1);
  box-shadow: 0 0 60px rgb(117 131 148 / 10%);
  position: fixed;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity .5s cubic-bezier(.34,.69,.1,1);
  -moz-transition: opacity .5s cubic-bezier(.34,.69,.1,1);
  transition: opacity .5s cubic-bezier(.34,.69,.1,1);
}
.show-header{
  opacity: 1;
  z-index: 100;
  pointer-events: auto;
}
.login-header-title{
  position: absolute;
  top: 19px;
  left: -webkit-calc(50% - 512px);
  left: -moz-calc(50% - 512px);
  left: calc(50% - 512px);
  font-size: 24px;
  color: red;
  font-family: "Weibei SC";
}
a{
  text-decoration: none;
}
.btn {
  font-size: 14px;
  height: 30px;
  width: 64px;
  line-height: 28px;
  position: relative;
  outline: none;
  white-space: nowrap;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-user-select: none;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  -webkit-font-variant-ligatures: normal;
  -moz-font-variant-ligatures: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
}
.btn-wrapper {
  position: absolute;
  top: 17px;
  right: -webkit-calc(50% - 512px);
  right: -moz-calc(50% - 512px);
  right: calc(50% - 512px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  width: 144px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.btn.register-ban {
  border: 1px solid #d8d8d8;
  background: #f5f5f5;
  cursor: not-allowed;
}
.btn.login {
  background-color: #f04142;
  border: 1px solid #f04142;
  color: #fff;
}
.btn.login a {
  color: #fff;
}
.login a:hover {
  opacity: .6;
}
.btn.register-ban a {
  cursor: not-allowed;
  color: #bfbfbf;
}
.btn a {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
}
.tips {
  position: absolute;
  top: 40px;
  right: 20px;
  font-size: 14px;
  border: 1px solid #e8e8e8;
  width: 200px;
  border-radius: 5px;
  background-color: white;
  padding: 15px 5px;
  box-shadow: 2px 2px 1px #e8e8e8;
}

</style>