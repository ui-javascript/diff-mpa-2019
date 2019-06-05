<template>
	<div>
		<block-list :blocks="blocks" filter="sort"></block-list>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BlockList from "@/components/BlockList.vue";
import CardList from "@/components/CardList.vue";

@Component({
  components: {
    BlockList,
  },
})
export default class Sort extends Vue {
  blocks: any = [
    {
      name: "玄幻小说",
      path: "?type=xuanhuan",
    },
    {
      name: "修真小说",
      path: "?type=xiuzhen",
    },
    {
      name: "都市小说",
      path: "?type=dushi",
    },
    {
      name: "穿越小说",
      path: "?type=chuanyue",
    },
    {
      name: "网游小说",
      path: "?type=wangyou",
    },
    {
      name: "科幻小说",
      path: "?type=kehuan",
    },
  ];
}
</script>
