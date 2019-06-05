<template>
	<div class="app-footer">
		<a v-to="'/index'">首页</a>
		<a @click="share">客户端</a>
		<a v-to="'/user/bookshelf.html'">书架</a>
		<div class="qrcode-mask" @click="share" v-show="QRCode" >
			<div class="qrcode-box">
				<div id="qrcode" @click.stop="" ref="qrcode"></div>
				<a v-to="app" @click.stop="" style="color:#469ED2">立即下载</a>
			</div>
			
		</div>
	</div>
</template>


<script lang="ts">
import { Component, Provide, Watch } from "vue-property-decorator";
import Vue from "@/types";
import QRCode from "qrcodejs2";

@Component
export default class Sections extends Vue {
  QRCode: boolean = false;
  app: string = "http://yun.mofunc.com/gallery/app/com.book.android_latest.apk";
  qrcode() {
    let qrcode = new QRCode("qrcode", {
      width: 128,
      height: 128,
      text: this.app,
      colorDark: "#000",
    });
  }
  share() {
    this.QRCode = !this.QRCode;
  }
  mounted() {
    this.$nextTick(function() {
      this.qrcode();
    });
  }
}
</script>

<style lang="scss" scoped>
.qrcode-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .qrcode-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;
    padding-bottom: 0.3rem;
    background: #fff;
  }
  #qrcode {
    margin-bottom: 0.3rem;
  }
}
</style>
