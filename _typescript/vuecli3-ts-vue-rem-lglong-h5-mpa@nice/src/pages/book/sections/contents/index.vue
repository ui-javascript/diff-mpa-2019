<template>
	<div id="app" :class="{off:light=='off'}">
		<div class="no-more" v-if="loading"><i class="fa fa-spinner"></i> 正在加载...</div>
		<layout :title="title" v-if="section.title">
			<div class="app-main">
				<div class="btn-settings">
					<div class="left">
						<span class="disabled">字体</span>
						<span :class="{active:fontSize=='lg'}" @click="setFontSize('lg')">大</span>
						<span :class="{active:fontSize=='md'}" @click="setFontSize('md')">中</span>
						<span :class="{active:fontSize=='sm'}" @click="setFontSize('sm')">小</span>
					</div>
					<div>
						<span @click="toggleLight">{{light=='on'?'关灯':'开灯'}}</span>
					</div>
				</div>
				<div class="btn-groups">
					<button><a v-book="section.book">目录</a></button>
					<button><a v-section="section.prev">上一章</a></button>
					<button><a v-section="section.next">下一章</a></button>
					<button @click="bookmark">加书签</button>
				</div>
				<div class="contents" :class="fontSize" v-html="section.contents"></div>
				<div class="btn-groups" v-if="section.contents">
					<button><a v-book="section.book">目录</a></button>
					<button><a v-section="section.prev">上一章</a></button>
					<button><a v-section="section.next">下一章</a></button>
					<button @click="bookmark">加书签</button>
				</div>
			</div>
		</layout>
	</div>
</template>

<script lang="ts">
import { Component, Provide } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";
import Vue from "@/types";

@Component({
  components: {
    Layout,
  },
})
export default class Sections extends Vue {
  loading: boolean = true;
  section: any = {};
  fontSize: string = localStorage.getItem("fontSize") || "";
  light: string = localStorage.getItem("light") || "on";
  get title() {
    return `${this.section.title}`;
  }
  async getSection() {
    this.section = await this.get(
      `books/sections/${this.$route.query.sid}/contents`
    );
  }
  beforeCreate() {
    if (!this.$route.query.sid) {
      return location.replace("/404?url=" + location.href);
    }
  }
  async created() {
    this.$route.path = "contents.html";
    if (this.$route.query.sid) {
      await this.getSection();
      this.loading = false;
      this.footsteps();
    }
  }
  footsteps() {
    this.post("dis/footsteps/section", {
      section: this.section.id,
      book: this.section.book,
      btitle: this.section.btitle,
      stitle: this.section.title,
    });
  }
  setFontSize(size: string) {
    if (typeof size == "string" && size) {
      this.fontSize = size;
      localStorage.setItem("fontSize", size);
    }
  }
  toggleLight() {
    this.light = "onoff".replace(this.light, "");
    localStorage.setItem("light", this.light);
  }
  async bookmark() {
    if (localStorage.getItem("accessToken")) {
      await this.post(
        `books/${this.section.book}/sections/${this.$route.query.sid}/mark`
      );
      return alert("加入书签成功！");
    }
    if (confirm(`未登录，是否前往登录?`)) {
      localStorage.removeItem("accessToken");
      location.href = "/user/signin.html?redirect=" + location.href;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables.scss";

#app {
  .disabled {
    cursor: not-allowed;
  }
  min-height: 100vh;
  &::before {
    content: "";
    display: table;
  }
}
.app-main {
  padding: 2%;
}

%btn {
  color: #fff;
  background-color: $color_cyan;
  border-radius: 0.2rem;
  a {
    color: #fff;
  }
}

.btn-settings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  @extend %border-bottom;
  .left {
    span {
      margin: 0 0.15rem;
    }
  }
  span {
    @extend %btn;
    padding: 0.3rem 0.5rem;
    font-size: 0.6rem;
    height: 1.2rem;
    line-height: 1.2rem;
    cursor: pointer;
    &.active {
      background-color: $color_border;
    }
  }
}

.btn-groups {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.8rem 0;
  button {
    @extend %btn;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 23%;
    height: 1.8rem;
    line-height: 1.8rem;
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
  }
}

.contents {
  text-indent: 2rem;
  color: $color_font_mid;
  line-height: 1.7;
  &.lg {
    font-size: 1.2rem;
  }
  &.md {
    font-size: 1rem;
  }
  &.sm {
    font-size: 0.8rem;
  }
}
</style>
<style  lang="scss">
@import "../../../../styles/variables.scss";

body {
  background-color: $color_bg_azure !important;
}
#app {
  &.off {
    background-color: $color_bg_off;
    header,
    .btn-settings span,
    .btn-groups button {
      background-color: $color_font_mid;
    }
  }
}
</style>
