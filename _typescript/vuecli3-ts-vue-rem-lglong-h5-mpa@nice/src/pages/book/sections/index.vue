<template>
	<div id="app" v-if="vshow">
		<layout :title="title" v-if="book.id">
			<div class="app-main">
				<div class="book">
					<div class="cover">
						<img :src="book.cover" :onerror="global.defaultImg">
					</div>
					<div class="book-items">
						<h3>{{book.title}}</h3>
						<div class="book-item">作者: {{book.author}}</div>
						<div class="book-item">分类: <a class="em" v-to="'/sort.html?type='+book.sort">{{book.sortn}}</a></div>
						<div class="book-item">状态: {{book.status}}</div>
						<div class="book-item ">更新: {{book.updateDate | dateTime}}</div>
						<div class="book-item">最新: <a class="em">{{book.lastSection}}</a></div>
					</div>
				</div>
				<div class="btn-group">
					<button type="button" v-section="book.fid">开始阅读</button>
					<button type="button" @click="addToBookshelf">加入书架</button>
				</div>
				<div class="tab">
					{{book.title}}小说简介
				</div>
				<div class="summary">
					{{book.info}}
				</div>
				<div class="tab">
					{{book.title}}最新章节 更新时间: {{book.updateDate | dateTime}}
				</div>
				<ul class="sections">
					<li v-for="(item,i) of newSections" :key="i" v-section="item.id">{{item.title}}</li>
				</ul>
				<div class="tab">
					全部章节列表
				</div>
				<ul class="sections" v-if="sections.length">
					<li v-for="(item,i) of sections" :key="i" v-section="item.id">{{item.title}}</li>
				</ul>
				<div class="no-more" v-if="loading"><i class="fa fa-spinner"></i> 正在加载...</div>
				<div class="btn-group">
					<button type="button" :class="{disabled:currentPage <= 0}" @click="prev">上一页</button>
					<select name="l" v-if='pages>0' @change="selectPage" v-model="selectedIndex">
						<option v-for="(item,i) of options" :key="i" :value="i" :selected="currentPage==i" >第{{i*pageSize+1}} - {{(i+1)*pageSize}}章</option>
					</select>
					<button type="button" :class="{disabled:currentPage >=pages-1}" @click="next">下一页</button>
				</div>
			</div>
		</layout>
	</div>
</template>

<script lang="ts">
import { Component, Provide, Watch } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";
import Vue from "@/types";

@Component({
  components: {
    Layout,
  },
})
export default class Sections extends Vue {
  vshow: boolean = false;
  book: any = {};
  sections: any = [];
  newSections: any = [];
  count: number = 0;
  pages: number = 0;
  currentPage: number = 0;
  pageSize: number = 20;
  selectedIndex: number = 0;
  loading: boolean = false;
  @Watch("currentPage")
  handle() {
    if (this.selectedIndex != this.currentPage) {
      this.selectedIndex = this.currentPage;
    }
  }
  get title() {
    return `${this.book.title || ""} 目录(共${this.count}章)`;
  }
  get options() {
    return [..."".padEnd(this.pages, "1")];
  }
  async getBook() {
    this.book = await this.get("books/" + this._route.query.bid);
  }
  async getSections() {
    history.pushState(
      "sections",
      "currentPage",
      `?bid=${this._route.query.bid}&p=${this.currentPage}`
    );
    this.sections = [];
    this.loading = true;
    let res = await this.query("books/" + this._route.query.bid + "/sections", {
      p: this.currentPage,
      pageSize: this.pageSize,
    });
    this.loading = false;
    this.count = res.headers["x-total-count"];
    this.pages = res.headers["x-total-pages"];
    this.sections = res.data;
  }
  async getRecent() {
    this.newSections = await this.get(
      "books/" + this._route.query.bid + "/sections?sort=-sequence&pageSize=5"
    );
  }
  beforeCreate() {
    if (!this._route.query.bid) {
      return location.replace("/404?url=" + location.href);
    }
  }
  footsteps() {
    this.post("dis/footsteps/book", {
      id: this.book.id,
      author: this.book.author,
      title: this.book.title,
    });
  }
  async created() {
    this._route.path = "sections";
    if (this._route.query.bid) {
      this.vshow = true;
    }
    if (this._route.query.p) {
      this.currentPage = this._route.query.p;
    }
    await this.getSections();
    await this.getBook();
    this.getRecent();
    this.footsteps();
  }
  async addToBookshelf() {
    if (localStorage.getItem("accessToken")) {
      await this.post(`books/${this._route.query.bid}/mark`);
      return alert("加入书架成功！");
    }
    if (confirm(`未登录，是否前往登录?`)) {
      localStorage.removeItem("accessToken");
      location.href = "/user/signin.html?redirect=" + location.href;
    }
  }
  prev() {
    if (this.currentPage <= 0) {
      return;
    }
    this.currentPage--;
    this.getSections();
  }
  next() {
    if (this.currentPage >= this.pages - 1) {
      return;
    }
    this.currentPage++;
    this.getSections();
  }
  selectPage() {
    this.currentPage = this.selectedIndex;
    this.getSections();
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.app-main {
  padding: 0.1rem 0.1rem 2rem 0.1rem;
  background-color: #fff;
}
.book {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0.3rem 0;
  margin: 0.5rem 0;
  h3 {
    font-weight: normal;
    line-height: 1.5;
  }

  .cover {
    width: 5.5rem;
    padding: 0.15rem;
    margin: 0 0.2rem 0 0.8rem;
    border: 0.05rem solid $color_border_light;
    font-size: 0;
    img {
      width: 100%;
      border: 0;
    }
  }

  .book-items {
    flex: 1;
    padding-left: 0.5rem;
    overflow: hidden;

    .book-item {
      padding: 0.1rem 0;
      margin: 0.2rem 0;
      color: $color_font_light;
      font-size: 0.7rem;
      .em {
        font-size: 0.7rem;
        color: $color_font_std;
      }
    }
  }
}
.btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  select {
    flex-basis: 3rem;
    flex-shrink: 0;
    align-self: stretch;
    margin: 0 0.5rem;
    text-align: center;
    text-align-last: center;
    background-color: #fff;
    border-radius: 0.15rem;
    color: $color_font_light;
  }
}
button {
  flex-shrink: 1;
  padding: 0;
  height: 2.2rem;
  width: 48%;
  border: none;
  color: #fff;
  background-color: $color_cyan;
  border-radius: 0.2rem;
  &.disabled {
    cursor: not-allowed;
    background-color: #ecf5ff;
    color: $color_font_light;
    &:focus {
      outline: 0;
    }
  }
}
.tab {
  margin: 0.5rem 0;
  padding-left: 0.3rem;
  line-height: 2.2;
  overflow: hidden;
  white-space: nowrap;
  word-break: all;
  text-overflow: ellipsis;
  color: $color_font_std;
  border-bottom: 0.05rem solid $color_cyan;
  background-color: $color_bg;
}
.summary {
  padding: 0 0.6rem;
  color: $color_font_light;
  line-height: 1.8;
  font-size: 0.8rem;
  letter-spacing: 0.03rem;
}
.sections {
  padding-bottom: 0.5rem;
  li {
    padding-left: 0.7rem;
    line-height: 2;
    border-bottom: 0.05rem solid $color_border_light;
  }
}
</style>
