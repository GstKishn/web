<template>
  <div class="root">
    <div class="first content">
      <Header :show="showHeader"></Header>
      <div class="video-wrapper">
        <video
          id="video1"
          class="video"
          autoplay
          loop
          poster="https://sf3-ttcdn-tos.pstatp.com/obj/mp/welcome-video-poster-v2.png"
        >
          <source :src="video" type="video/mp4" />
          <source :src="video" type="video/ogg" />
          <source :src="video" type="video/webm" />
          <object :src="video" >
            <embed :src="video"/>
          </object>
        </video>
      </div>

      <div class="first-screen-logo">
        <h3>{{title}}</h3>
      </div>

      <div>
        <img class="first-screen-slogan" src="https://sf3-ttcdn-tos.pstatp.com/obj/mp/welcome-slogan.png" alt="">
        <div class="first-screen-operation">
          <div class="first-screen-button">
            <a class="register_url ">注册</a>
          </div> 
          <div class="first-screen-button login-btn">
            <a class="register_url ">登录</a>
          </div> 
        </div>
      </div>

      <div class="first-screen-mouse-hint">
        <div>滑动查看更多</div>
        <img class="animate__animated animate__infinite animate__slideOutDown" src="../../public/img/arrow.png" alt="">      
      </div>
      
      <div class="voice-img-box">
        <img @click="open" v-if="!hasVideoVoice"  src="../../public/img/close.png" >
        <img @click="close" v-else src="../../public/img/open.png"  alt="">
      </div>
    </div>
    <div class="group-source ">
      <div class="title" id="secondScreenTitle">支持丰富的创作体裁</div>
      <div class="text" style="margin-top:10px">包括文字、文章、微头条</div>
    </div>
    <LoginBox v-if="showLogin"></LoginBox>
  </div>
</template>

<script>
import LoginBox from '../components/loginBox'
import Header from '../components/Header'
export default {
  components : {
    LoginBox, Header
  },
  data() {
    return {
      video : 'https://sf3-ttcdn-tos.pstatp.com/obj/mp/welcome-video.mp4',// 背景视频
      hasVideoVoice : false, // 视频音量控制
      showLogin : false, // 登陆组件
      showHeader : false , // 是否展示顶部login
      title : ''
    }
  },
  created() {
    setTimeout(() => {
      let video = document.getElementById('video1')
      // console.log(video)
      video.volume = 0
    }, 0);
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    this.title = this.$store.state.webTitle
  },
  methods: {
    
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      if(scrollTop > 968){
        this.showHeader = true
      }else{
        this.showHeader = false
      }
    },
    // 打开音量
    open(){
      let video = document.getElementById('video1')
      video.volume = 0.4
      this.hasVideoVoice = !this.hasVideoVoice
    },
    close(){
      let video = document.getElementById('video1')
      video.volume = 0
      this.hasVideoVoice = !this.hasVideoVoice
    },

    // 打开登陆组件
    openLoginBox(){
      console.log('ssss')
      this.showLogin = true
    }  
  },
}
</script>

<style scoped>
.root{
  height: 3000px;
}
.content{
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-width: 1024px;
  height: 100vh;
}
.video-wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.video-wrapper .video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
}
.first-screen-logo{
  position: absolute;
  top: 60px;
  left: -webkit-calc(50% - 512px);
  left: -moz-calc(50% - 512px);
  left: calc(50% - 512px);
  width: 79px;
  height: 27px;
}
.first-screen-logo h3{
  font-size: 26px;
  font-weight: bold;
  color: whitesmoke;
}
.voice-img-box{
  position: absolute;
  bottom: 44px;
  right: 100px;
  cursor: pointer;
  height: 32px;
  width: 32px;
  background-color: #8e8e8e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.voice-img-box img{
  position: relative;
  width: 80%;
  height: 80%;
}
.first-screen-slogan{
  width: 40%;
  position: absolute;
  left: 30%;
  top: 42%;
}
.first-screen-operation{
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin-top: 60px;
  display: flex;
  flex-direction: row;
}
.first-screen-button{
  margin: 0 10px;
  width: 84px;
  height: 38px;
  font-size: 16px;
  line-height: 36px;
  font-weight: 400;
  border: 1px solid #8e8e8e;
  border-radius: 5px;
  color: white;
}
.login-btn{
  background-color: red;
}
.first-screen-mouse-hint{
  position: absolute;
  bottom: 61px;
  left: 50%;
  transform: translateX(-50%);
  color:white;
  font-size: 14px;
}
.first-screen-mouse-hint img{
  width: 16px;
  height: 16px;
  margin-top: 10px;
  color: white;
}
.register_url {
  color: whitesmoke;
}
.group-source{
  /* position: absolute; */
  padding-top: 120px;
}
.title {
  font-size: 32px;
  font-weight: bold;
}
.text{
  font-size: 16px;
}













a{
  text-decoration: none;
}
</style>
