<template>
    <div>
      <div class="login-box">
        <h2>登录</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" v-model="username">
            <label>账号</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" v-model="password">
            <label>密码</label>
          </div>
 
          <a @click="userLogin">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            登录
          </a>
 
          <a @click="goAdminLogin">管理员登入 </a>
          <a @click="goReg">注册 </a>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import {synRequestPost} from "../../../../static/request"
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        msg: ''
      }
    },

    methods: {
        //前网注册页面
        goReg(){
          this.$router.push('/user/reg');
        },
        //前网注册页面
        goAdminLogin(){
          this.$router.push('/admin/login');
        },
        //用户登入
        async userLogin(){
           var obj = await synRequestPost("/user/login?username="+this.username+"&password="+this.password);
           console.log(obj[0]);
           if(obj.length == 0){
              alert("账号或者密码不正确");
           }else{
              this.$store.dispatch('setUser',obj[0]);
              alert("登入成功");
              setCookie("id",obj[0].id);
              setCookie("username",obj[0].username);
              setCookie("password",obj[0].password);
              setCookie("role",obj[0].role);
              setCookie("id",obj[0].id);
              setCookie("address",obj[0].address);
             window.location.href="http://127.0.0.1:8080/u/index";
           }
           console.log(obj.length);
            
        }
    },
  }
  ;
  </script>
  
  <style>
  body {
    background-image: url(../../../../static/a7d3536782d34024914b76d3eafbe637.jpeg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0px -50px;
  }
  
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
  }
  
  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }
  
  .login-box .user-box {
    position: relative;
  }
  
  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  
  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }
  
  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
  
  .login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
  }
  
  .login-box a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
  }
  
  .login-box a span {
    position: absolute;
    display: block;
  }
  
  .login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }
  
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%, 100% {
      left: 100%;
    }
  }
  
  .login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s
  }
  
  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%, 100% {
      top: 100%;
    }
  }
  
  .login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s
  }
  
  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%, 100% {
      right: 100%;
    }
  }
  
  .login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s
  }
  
  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%, 100% {
      bottom: 100%;
    }
  }
  </style>
  