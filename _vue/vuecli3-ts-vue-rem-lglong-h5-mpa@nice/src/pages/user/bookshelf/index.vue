<template>
	<div>
		<div class="app-container">
			<div class="no-more" v-if="loading"><i class="fa fa-spinner"></i> 正在加载...</div>
			<div v-if="!bookList||!bookList.length" v-show="!loading" class="empty">
				<div>还木有任何书籍( ˙﹏˙ )</div>
			</div>
			<div v-else class="book-list" v-for="(item,i) of bookList" :key="i">
				<div>书名: <a v-book="item.book">{{item.btitle}}</a></div>
				<div>最新: <a v-section="item.sid">{{item.stitle}}</a></div>
				<div>书签: <a v-if="item.mid" v-section="item.mid">{{item.mtitle}}</a>
				<span v-else>无书签</span>
				</div>
				<div class="clr-red" @click="remove(item,i)">删除本书</div>
			</div>
		</div>
		<div class="card" v-if="footsteps.length && !loading && showRecents">
			<div class="title">最近浏览 <span class="float-right" @click="switchRecents">关闭</span></div>
			<div class="content">
				<ul>
					<li v-for="(item,i) of footsteps" :key="i">
						<div v-section="item.data.section">
							{{i+1}}. <span class="title">{{item.data.stitle}}</span> 
							<span class="createdAt"><i>{{item.createdAt | dateTime("MM-DD HH:mm:SS")}}</i></span>
						</div>
						<p class="summary" v-book="item.data.book">{{item.data.btitle}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="no-more" v-if="!loading && !footsteps.length" @click="switchRecents">最近浏览</div>
	</div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "@/types";
import * as _ from "lodash";

@Component
export default class Bookshelf extends Vue {
  bookList: any = [];
  bookshelf: any;
  loading: boolean = false;
  footsteps: any = [];
  showRecents: boolean =
    localStorage.getItem("showRecents") ||
    typeof localStorage.getItem("showRecents") !== "string"
      ? true
      : false;
  async getData() {
    this.loading = true;
    if (!localStorage.getItem("accessToken")) {
      alert("未登录");
      return (location.href = "/user/signin.html");
    }
    try {
      this.bookshelf = await this.get("dis/me/bookshelf");
      this.bookList = this.bookshelf.books;
      this.loading = false;
    } catch (e) {
      if (_.get(e, "response.status") === 401) {
        location.href = "/user/signin.html";
      }
    }
  }
  async remove(item: any, index: number) {
    if (!localStorage.getItem("accessToken")) {
      alert("未登录");
      return (location.href = "/user/signin.html");
    }
    if (item && item.id && confirm(`确定要删除 ${item.btitle}?`)) {
      try {
        await this.del(`dis/me/bookshelf/books/${item.book}`);
        await this.getData();
      } catch (e) {
        if (_.get(e, "response.status") === 401) {
          location.href = "/user/signin.html";
        }
      }
    }
  }
  switchRecents() {
    this.showRecents = !this.showRecents;
    localStorage.setItem("showRecents", this.showRecents ? "1" : "");
    this.getFootsteps();
  }
  async getFootsteps() {
    if (!this.showRecents) {
      this.footsteps = [];
      return;
    }
    this.footsteps = await this.get("dis/me/footsteps/section");
  }
  created() {
    this.getData();
    this.getFootsteps();
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.app-container {
  padding: 0.5rem;
  a:hover {
    color: $color_red;
  }
  .book-list {
    border-bottom: 0.05rem solid $color_green;
    > div {
      margin: 0.55rem 0;
    }
  }
  .empty {
    margin: 0 auto;
    display: table;
    height: 8rem;
    > div {
      display: table-cell;
      vertical-align: middle;
    }
  }
}

.card {
  margin: 0.5rem;
  border: 1px solid $color_border;
  border-radius: 3px;
  background-color: #fff;
  font-size: 0.8rem;
  > .title {
    @extend %border-bottom;
    padding: 0.5rem 0.6rem 0.25rem;
    color: $color_font_mid;
  }
  .content {
    padding: 0.5rem;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 0.3rem 0;
      border-bottom: 1px dotted $color_border_light;
      font-size: 1rem;
      color: $color_font_light;
      div {
        line-height: 1.2rem;
      }
      .createdAt {
        float: right;
        font-size: 0.8rem;
        i {
          color: $color_org;
        }
      }
      .title {
        font-size: 0.9rem;
        color: $color_font_std;
      }
      .summary {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        text-indent: 0.5rem;
        font-size: 0.8rem;
        margin-top: 0.3rem;
        line-height: 1.5;
      }
    }
  }
}
</style>
