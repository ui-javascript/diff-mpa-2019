<template>
	<div>
		<card-list title="完本小说" :list="fullData" v-if="fullData.length">
			<i slot-scope="{ data }">{{data.updateDate | dateTime("YYYY-MM-DD")}}完本</i>
		</card-list>
		<load-more :loading="loading" :currentPage="currentPage" :pages="pages"/>
	</div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "@/types";
import CardList from "@/components/CardList.vue";
import LoadMore from "@/components/LoadMore.vue";

@Component({
  components: {
    CardList,
    LoadMore,
  },
})
export default class Full extends Vue {
  fullData: any = [];
  count: number = 0;
  pages: number = 0;
  currentPage: number = 0;
  loading: boolean = true;
  async getFul() {
    this.loading = true;
    let res = await this.query('books/?q={"status":"完本"}&sort=-updateDate', {
      p: this.currentPage,
    });
    this.loading = false;
    this.currentPage++;
    this.count = res.headers["x-total-count"];
    this.pages = res.headers["x-total-pages"];
    this.fullData = this.fullData.concat(res.data);
  }
  loadMore() {
    window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let documentElement: any = document.documentElement || {};
      let scrollTop = documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      let windowHeight =
        documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      let scrollHeight =
        documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      // 移动端 +50
      if (scrollTop + windowHeight + 50 >= scrollHeight) {
        if (this.currentPage >= this.pages - 1) {
          return;
        }
        this.getFul();
      }
    };
  }
  async created() {
    await this.getFul();
    this.loadMore();
  }
}
</script>
