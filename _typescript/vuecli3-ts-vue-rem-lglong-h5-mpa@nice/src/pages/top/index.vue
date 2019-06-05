<template>
	<block-list :blocks="blocks" filter="top"></block-list>		
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BlockList from "@/components/BlockList.vue";
@Component({
  components: {
    BlockList,
  },
})
export default class Top extends Vue {
  blocks: any = [
    {
      name: "日点击榜",
      path: "?type=dayvisit",
    },
    {
      name: "周点击榜",
      path: "?type=weekvisit",
    },
    {
      name: "月点击榜",
      path: "?type=monthvisit",
    },
    {
      name: "总点击榜",
      path: "?type=views",
    },
    {
      name: "周推荐榜",
      path: "?type=weekvote",
    },
    {
      name: "月推荐榜",
      path: "?type=monthvote",
    },
    {
      name: "总推荐榜",
      path: "?type=allvote",
    },
    {
      name: "总收藏榜",
      path: "?type=goodnum",
    },
    {
      name: "字数排行",
      path: "?type=size",
    },
    {
      name: "最新入库",
      path: "?type=uploadDate",
    },
    {
      name: "最近更新",
      path: "?type=updateDate",
    },
    {
      name: "新书榜单",
      path: "?type=goodnew",
    },
  ];
}
</script>
