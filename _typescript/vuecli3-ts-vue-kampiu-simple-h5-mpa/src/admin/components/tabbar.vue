<template>
	<div class="tabbar-layout">
		<router-link to="/home" class="tabbar-nav">
			<img :src="'http://www.xiehome.com/m_second_v/images/mall/tabbar_home_icon' + (router === 'Home' ? '_active' : '') + '.png'" alt="">
			<span>首页</span>
		</router-link>
		<router-link to="cate" class="tabbar-nav">
			<img :src="'http://www.xiehome.com/m_second_v/images/mall/tabbar_cate_icon' + (router === 'Cate' ? '_active' : '') + '.png'" alt="">
			<span>分类</span>
		</router-link>
		<router-link to="seller" class="tabbar-nav">
			<img :src="'http://www.xiehome.com/m_second_v/images/mall/tabbar_seller_icon' + (router === 'Seller' ? '_active' : '') + '.png'" alt="">
			<span>商家</span>
		</router-link>
		<router-link to="cart" class="tabbar-nav">
			<img :src="'http://www.xiehome.com/m_second_v/images/mall/tabbar_cart_icon' + (router === 'Cart' ? '_active' : '') + '.png'" alt="">
			<span>购物车</span>
		</router-link>
		<router-link to="/personal" class="tabbar-nav">
			<img :src="'http://www.xiehome.com/m_second_v/images/mall/tabbar_personal_icon' + (router === 'Personal' ? '_active' : '') + '.png'" alt="">
			<span>我的</span>
		</router-link>
	</div>
</template>


<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class';

    const commonModule = namespace('common');

    @Component({
        components: {},
    })
    export default class TabbarL extends Vue {
        name: String = "Tabbar";

        @State(state => state.common.router) router
        // @commonModule.Getter('router') router
    }
</script>

<style scoped lang="less">
	.tabbar-layout {
		width: 100%;
		height: 56px;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #f6f6f6;
		box-shadow: 0 -2px 8px rgba(233, 233, 233, 0.8);
	}

	.tabbar-nav {
		width: 20%;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.tabbar-nav img {
		width: 28px;
		height: 28px;
	}

	.tabbar-nav span {
		font-size: 14px;
		color: #333333;
		line-height: 1.2em;
	}
</style>
