<template>
	<div class="app-container">
		<form>
			<div class="row">
				<label for="username"><i class="clr-red">* </i>帐号</label>
				<input @keyup.enter="corfirm" type="text" v-model.trim="formData.username" name="username" placeholder="请输入帐号">
			</div>
			<div class="row">
				<label for="password"><i class="clr-red">* </i>密码</label>
				<input @keyup.enter="corfirm" type="password" v-model.trim="formData.password" placeholder="请输入密码">
			</div>
			<div class="row">
				<label for="repassword"><i class="clr-red">* </i>确认</label>
				<input @keyup.enter="corfirm" type="password" v-model.trim="repassword" placeholder="请确认密码">
			</div>
			<div class="row">
				<label for="email"><i style="visibility:hidden">* </i>邮箱</label>
				<input @keyup.enter="corfirm" type="email" v-model.trim="formData.email" placeholder="请输入邮箱">
			</div>
			<div class="row btns">
				<button type="button" @click="corfirm">确定注册</button>
				<button type="button" @click="signin">帐号登录?</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import Vue from "@/types";

@Component
export default class Signup extends Vue {
  formData: any = {
    username: "",
    password: "",
    email: "",
    client: "BOOK",
  };
  repassword: string = "";
  loading: boolean = false;
  @Watch("formData", { deep: true })
  onFormDataChanged() {
    localStorage.setItem("signup", JSON.stringify(this.formData));
  }
  async corfirm() {
    if (this.loading) {
      return;
    }
    if (!/^[A-Za-z_]\w{3}/.test(this.formData.username)) {
      return alert("帐号格式不正确: 至少四个字符,以下划线或字母开头");
    }
    if (!/^\w{6}/.test(this.formData.password)) {
      return alert("密码格式不正确: 至少六位由下划线、字母或数字组成");
    }
    if (this.formData.password != this.repassword) {
      return alert("两次输入密码不一致");
    }
    this.loading = true;
    try {
      let token = await this.post("dis/me", this.formData);
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.removeItem("signup");
      let redirect = location.href.match(/redirect=(.*)+/);
      if (redirect) {
        return location.replace(decodeURIComponent(redirect[1]));
      }
      location.replace("/user/bookshelf.html");
    } catch (e) {
      this.loading = false;
    }
  }
  signin() {
    let redirect = location.href.match(/redirect=(.*)+/);
    if (redirect) {
      return location.replace("/user/signin.html?redirect=" + redirect[1]);
    }
    location.replace("/user/signin.html");
  }
  beforeCreate() {
    if (localStorage.getItem("accessToken")) {
      return location.replace("/user/bookshelf.html");
    }
  }
  created() {
    let signup = localStorage.getItem("signup");
    if (signup) {
      this.formData = JSON.parse(signup);
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
    border-radius: 0.2rem;
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
  }
}
</style>
