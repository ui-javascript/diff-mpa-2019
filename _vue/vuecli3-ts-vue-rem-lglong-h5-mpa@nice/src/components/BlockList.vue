<template>
	<div>
		<ul class="block">
			<li v-for="(item,i) of blocks" :key="i">
				<div :class="{active:active(item)}">
					<router-link :to="item.path">{{item.name}}</router-link>
				</div>
			</li>
		</ul>
		<card-list :title="title" :list="books" v-if="books.length">
			<span slot-scope="{ data }">
				<i>{{filter=='sort'?data.status:data.views}}</i>{{filter=='sort'?"":"人在看"}}
			</span>
		</card-list>
		<load-more v-if="$route.query.type" :loading="loading" :currentPage="currentPage" :pages="pages"/>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Watch } from "vue-property-decorator";
import CardList from "@/components/CardList.vue";
import LoadMore from "@/components/LoadMore.vue";
import Vue from "@/types";

@Component({
  components: {
    CardList,
    LoadMore,
  },
})
export default class BlockList extends Vue {
  @Prop() blocks: any;
  @Prop() filter!: string;
  title: string = "";
  books: any = [];
  count: number = 0;
  pages: number = 0;
  currentPage: number = 0;
  loading: boolean = true;
  @Watch("$route")
  handle() {
    this.books = [];
    this.currentPage = 0;
    this.queryBooks();
  }
  active(item: any) {
    let { type } = this.$route.query;
    return item.path.includes(type);
  }
  async queryBooks() {
    let { type } = this.$route.query;
    if (type) {
      this.loading = true;
      let url = `books/?q={"sort":"${type}"}&sort=-updateDate`;
      if (this.filter != "sort") {
        url = `books/?sort=-${type}`;
      }
      let res = await this.query(url, {
        p: this.currentPage,
      });
      this.loading = false;
      this.currentPage++;
      this.count = res.headers["x-total-count"];
      this.pages = res.headers["x-total-pages"];
      this.books = this.books.concat(res.data);

      if (this.books.length) {
        this.blocks.some(
          (item: any) => item.path.includes(type) && (this.title = item.name)
        );
      }
    }
  }
  loadMore() {
    window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let documentElement: any = document.documentElement || {};
      var scrollTop = documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      if (scrollTop + windowHeight + 50 >= scrollHeight) {
        if (this.currentPage >= this.pages - 1) {
          return;
        }
        this.queryBooks();
      }
    };
  }
  async created() {
    await this.queryBooks();
    this.loadMore();
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.block {
  display: flex;
  justify-items: space-around;
  flex-wrap: wrap;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  li {
    flex-basis: 33.33%;
    flex-shrink: 0;
    flex-flow: 1;
    padding: 0.5rem 0.5rem 0;
    box-sizing: border-box;
    div {
      background-color: #fff;
      padding: 0.7rem 1rem;
      text-align: center;
      border-radius: 0.15rem;
      & a:hover {
        color: $color_red;
      }
      &.active {
        background-color: $color_bg_dark;
      }
    }
  }
}
</style>
