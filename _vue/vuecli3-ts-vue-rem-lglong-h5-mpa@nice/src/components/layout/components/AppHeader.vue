<template>
	<div class="app-header">
		<header>
			<template v-if="headerType=='index'">
				<span class="icon left">
					<a v-to="'/user/bookshelf.html'"><i class="fa fa-user"></i></a>
				</span>
				<span class="title">{{title}}</span>
				<span class="icon right" @click="toggleSearch">
					<i v-if="searchVisible" class="fa fa-close"></i>
					<i v-else class="fa fa-search"></i>
				</span>
			</template>
			<template v-if="headerType=='main'">
				<span class="icon left">
					<a v-to="'/index'"><i class="fa fa-home"></i></a>
				</span>
				<span class="title">{{title}}</span>
				<span class="icon right">
					<a v-to="'/user/bookshelf.html'"><i class="fa fa-user"></i></a>
				</span>
			</template>
			<template v-if="headerType=='bookshelf'">
				<span class="icon left">
					<a v-to="'/index'"><i class="fa fa-home"></i></a>
				</span>
				<span class="title">{{title}}</span>
				<span class="text right" @click="logout">
					注销
				</span>
			</template>
			<template v-if="headerType=='sections'||headerType=='404'">
				<span class="text left" onclick="history.go(-1)">
					<a href="javascript:void(0)" class="btn">返回</a>
				</span>
				<span class="title">{{title}}</span>
				<span class="text right">
					<a v-to="'/index'" class="btn">首页</a>
				</span>
			</template>
			<template v-if="$slots.title">
				<span></span>
				<slot name="title"></slot>
				<span></span>
			</template>
		</header>
		<div class="search" :style="searchVisible?'height: 2.3rem;':'height: 0;'">
			<button @click="switchSearchType">{{searchType}}</button>
			<input type="text" v-model.trim="searchValue" placeholder="输入搜索词"/>
			<button class="search-btn" @click="search"><i class="fa fa-search"></i></button>
		</div>
		<nav v-if="showNav">
			<a v-to="'/index'">首页</a>
			<a v-to="'/sort.html'">分类</a>
			<a v-to="'/top.html'">排行</a>
			<a v-to="'/full.html'">完本</a>
		</nav>
	</div>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";
import Vue from "@/types";

@Component
export default class AppHeader extends Vue {
  @Inject("title") title!: string;
  private type: string = "index";
  private searchType: string = "书名";
  private searchValue: string = "";
  searchVisible: boolean = false;
  get headerType() {
    let route = this.$route || this._route;
    if (route.path.includes("sections")) {
      return "sections";
    }
    if (route.path.includes("bookshelf")) {
      return "bookshelf";
    }
    if (route.path.startsWith("/404")) {
      return "404";
    }
    if (route.path.includes(".html")) {
      return "main";
    }
    return "index";
  }
  get showNav() {
    let route = this.$route || this._route;
    if (/sections|contents/.test(route.path)) {
      return false;
    }
    return true;
  }
  toggleSearch() {
    this.searchVisible = !this.searchVisible;
    if (!this.searchVisible) {
      this.bus.$emit("search", "");
    }
  }
  switchSearchType() {
    this.searchType = "作者书名".replace(this.searchType, "");
    this.bus.$emit(
      "switchSearchType",
      this.searchType == "作者" ? "author" : "title"
    );
  }
  search() {
    this.bus.$emit("search", this.searchValue);
  }
  logout() {
    if (confirm(`确定要退出登录?`)) {
      localStorage.removeItem("accessToken");
      location.replace("/index");
      window.history.forward();
    }
  }
  created() {
    if (this.title) {
      document.title = this.title;
    }
  }
}
</script>
