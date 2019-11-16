<template>
	<div class="app-container">
		<form>
			<div class="row">
				<label for="login"><i class="clr-red">* </i>帐号</label>
				<input @keyup.enter="corfirm" type="text" v-model.trim="formData.login" name="login" placeholder="请输入帐号">
			</div>
			<div class="row">
				<label for="password"><i class="clr-red">* </i>密码</label>
				<input @keyup.enter="corfirm" type="password" v-model.trim="formData.password" placeholder="请输入密码">
			</div>
			<div class="row btns">
				<button type="button" @click="corfirm">确定登录</button>
				<button type="button" @click="signup">注册帐号?</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "@/types";

@Component
export default class Signin extends Vue {
  formData: any = {
    login: "",
    password: "",
    client: "BOOK",
  };
  loading: boolean = false;
  async corfirm() {
    if (this.loading) {
      return;
    }
    if (!/^\w{4}/.test(this.formData.login)) {
      return alert("帐号格式不正确: 请输入帐号或邮箱");
    }
    if (!/^\w{6}/.test(this.formData.password)) {
      return alert("密码格式不正确: 至少六位由下划线、字母或数字组成");
    }
    this.loading = true;
    try {
      let token = await this.post("dis/access-tokens", this.formData);
      localStorage.setItem("accessToken", token.accessToken);
      let redirect = location.href.match(/redirect=(.*)+/);
      if (redirect) {
        return location.replace(decodeURIComponent(redirect[1]));
      }
      location.replace("/user/bookshelf.html");
    } catch (e) {
      this.loading = false;
    }
  }
  signup() {
    let redirect = location.href.match(/redirect=(.*)+/);
    if (redirect) {
      return location.replace("/user/signup.html?redirect=" + redirect[1]);
    }
    location.replace("/user/signup.html");
  }
  beforeCreate() {
    if (localStorage.getItem("accessToken")) {
      return location.replace("/user/bookshelf.html");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.app-container {
  padding: 0.5rem;
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 0.05rem solid $color_border_light;
  }
  input[type] {
    height: 1.5rem;
    line-height: 1.5rem;
    width: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    text-indent: 0.5rem;
    color: $color_font_mid;
  }
  .btns {
    justify-content: space-around;
  }
  button {
    padding: 0;
    height: 1.5rem;
    width: 42%;
    border: none;
    color: #fff;
    background-color: $color_cyan;
    border-radius: 0.2rem;
  }
}
</style>
