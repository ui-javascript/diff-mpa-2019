<template>
  <div class="login">
    <div class="loginMain">
      <div class="modal_login_cont">
        <span class="modal_login_img">
          <img :src="logo">
        </span>
        <h2 class="modal_login_title">iCTR_XXXXXXX</h2>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户登录" name="userlogin">
          <div v-loading="userloginLoading" element-loading-text="正在登录...">
            <el-form class="LoginR" :rules="rules" ref="ruleForm" :model="userInfo">
              <el-form-item class="elFormMargin" prop="UserName">
                <i class="fa fa-address-book faStyle" aria-hidden="true"></i>
                <el-input
                  type="text"
                  placeholder="请输入用户名"
                  v-model="userInfo.UserName"
                  @keyup.enter.native="loginFunc"
                ></el-input>
              </el-form-item>
              <el-form-item class="elFormMargin" prop="Pwd">
                <i class="fa fa-lock faStyle" aria-hidden="true"></i>
                <el-input
                  type="password"
                  placeholder="请输入密码"
                  v-model="userInfo.Pwd"
                  @keyup.enter.native="loginFunc"
                ></el-input>
              </el-form-item>
              <a>
                <el-button type="text" class="remember" style="margin-bottom:15px;">找回密码</el-button>
              </a>

              <el-form-item>
                <el-button class="elButton" type="primary" @click="loginFunc">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="footer login_footer">Powered by iCTR_TB!</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { UserInfo } from "../../models/user/userInfo";
import { Auth } from "../../api/auth";
import { __TOKEN_KEY__ } from "../../api/common";
import { AxiosResponse } from "axios";
import router from "../../router";
import logo from "../../assets/images/logo.png";

@Component({})
export default class Login extends Vue {
  name = "";
  userInfo: UserInfo = new UserInfo();
  authObj: Auth = new Auth();
  logo = logo;
  userloginLoading = false;
  activeName = "userlogin";
  rules = {
    UserName: [{ required: true, message: "请输入用户名！", trigger: "blur" }],
    Pwd: [{ required: true, message: "请输入密码！", trigger: "blur" }]
  };

  loginFunc() {
    this.authObj.login(this.userInfo).then(
      (res: AxiosResponse) => {
        window.localStorage.setItem(__TOKEN_KEY__, res.data.access_token);
        router.push({
          path: "/"
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  //登录tab切换
  handleClick(data, event) {
    if (data.name === "WeiChatLogin") {
    }
  }
}
</script>
<style>
.login {
  width: 100%;
  height: 100vh;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
}
.login::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;

  background: url(../../assets/images/bg03.jpg);
  background-size: cover;
}
.login .loginMain {
  width: 25rem;
  margin: 0 auto;
  background: #fff;
  padding: 30px 80px;
  height: auto;

  box-shadow: 0 0 0 0.625rem rgba(7, 17, 27, 0.13);
  position: absolute;
  /* z-index: 2; */
  left: 50%;

  transform: translate(-50%, -50%);
  top: 40%;
}
.login .modal_login_cont {
  position: relative;
}
.login .modal_login_img {
  width: 90px;
  display: inline-block;
  margin-bottom: 5px;
}
.login .modal_login_img img {
  max-width: 100%;
  width: auto;
}
.login .modal_login_title {
  margin-bottom: 1.875rem;
  text-align: center;
  font-size: 1.875rem;
  color: #27446c;
  font-weight: normal;
  position: absolute;
  left: 120px;
  top: 18px;
}
.login .footer {
  width: 100%;

  line-height: 40px;
  font-size: 16px;
  text-align: center;
}
.login .login_footer {
  position: absolute;
  bottom: 0;
  text-shadow: 0 1px 1px #000c17;
}
.login .el-button {
  border-radius: 50px;
}

.login .el-button--primary {
  background-color: #709af6;
  border-color: #3f70db;
}
.login .elButton {
  width: 100%;
}
</style>

