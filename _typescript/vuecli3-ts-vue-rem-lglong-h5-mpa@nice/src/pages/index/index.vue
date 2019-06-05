<template>
  <div class="home">
	<card-list title="搜索结果" :list="searchData" v-if="searchValue"></card-list>
    <div class="card recommend" v-if="hotData.length && !searchValue">
		<div class="title">本站推荐</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) of hotData.slice(0,3)" :key="i">
					<a v-book="item.id">
						<div class="img" :style="'background-image:url('+item.cover+')'">
						</div>
						<span>{{item.title}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<card-list title="热门推荐" :list="hotData" v-if="hotData.length && !searchValue"></card-list>
    <div class="card recent-update" v-if="newData.length && !searchValue">
		<div class="title">最近更新</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) of newData" :key="i">
					<div v-book="item.id">
						{{i+1}}.<span class="title">{{item.title}}</span> - 
						<span class="author">{{item.author}}</span>
						<span class="createdAt"><i>{{item.updateDate | dateTime("MM-DD HH:mm")}}</i></span>
					</div>
					<p class="summary">{{item.info}}</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="no-more" v-if="loading"><i class="fa fa-spinner"></i> 正在加载...</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import CardList from "@/components/CardList.vue";
import Vue from "@/types";

@Component({
  components: {
    CardList,
  },
})
export default class Home extends Vue {
  hotData: any = [];
  newData: any = [];
  searchData: any = [];
  searchType: string = "title";
  searchValue: string = "";
  loading: boolean = true;

  async getHot() {
    this.hotData = await this.get("books/");
  }
  async getRecent() {
    this.newData = await this.get("books/?sort=-updateDate");
  }
  async searchBooks() {
    if (!this.searchValue) {
      return;
    }
    this.searchData = await this.get("books/?sort=-updateDate", {
      like: {
        [this.searchType]: this.searchValue,
      },
    });
  }
  async created() {
    this.bus.$on("switchSearchType", (type: string) => {
      this.searchType = type;
    });
    this.bus.$on("search", (value: string) => {
      this.searchValue = value;
      this.searchBooks();
    });
    await this.getHot();
    await this.getRecent();
    this.loading = false;
  }
}
</script>
<style lang="scss" src="./index.scss" scoped>
</style>
