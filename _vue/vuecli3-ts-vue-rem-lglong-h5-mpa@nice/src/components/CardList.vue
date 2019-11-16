<template>
    <div class="card-list">
		<div class="title">{{title}}</div>
		<div class="content">
			<ul v-if="list.length">
				<li v-for="(item,i) of list" :key="i" v-book="item.id">
					<div class="cover">
						<img v-lazy="item.cover" :onerror="global.defaultImg">
					</div>
					<div>
						<h3>{{item.title}}<span class="views">
							<slot :data="item"><i>{{item.views}}</i>人在看</slot>
						</span></h3>
						<div class="author">作者: {{item.author}}</div>
						<p class="summary">{{item.info}}</p>
					</div>
				</li>
			</ul>
			<div v-else class="no-more">没有更多内容了</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class CardList extends Vue {
  @Prop() title!: string;
  @Prop() list: any;
}
</script>
