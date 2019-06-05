<template>
	<div>
		<div class="no-more" v-if="loading"><i class="fa fa-spinner"></i> 正在加载...</div>
		<div class="no-more" v-if="!loading&&pages-currentPage<=1">没有更多了</div>
		<div class="no-more" v-if="!loading&&pages-currentPage>1">查看更多</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class CardList extends Vue {
  @Prop() loading!: boolean;
  @Prop() currentPage!: number;
  @Prop() pages!: number;
}
</script>
