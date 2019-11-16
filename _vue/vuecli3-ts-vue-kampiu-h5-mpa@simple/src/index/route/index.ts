import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/index/views/Home.vue';

Vue.use(Router);

const R = (name: string) => () => import(`@/index/views/${name}.vue`);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Views',
            component: R('view'),
            redirect: '/home',
            children: [{
                path: '/home',
                name: 'Home',
                component: R('tabbar/home'),
                meta: {
                    title: '首页',
                },
            }, {
                path: '/cate',
                name: 'Cate',
                component: R('tabbar/cate'),
                meta: {
                    title: '分类',
                },
            }, {
                path: '/seller',
                name: 'Seller',
                component: R('tabbar/seller'),
                meta: {
                    title: '商家',
                },
            }, {
                path: '/cart',
                name: 'Cart',
                component: R('tabbar/cart'),
                meta: {
                    title: '购物车',
                },
            }, {
                path: '/personal',
                name: 'Personal',
                component: R('tabbar/personal'),
                meta: {
                    title: '我的',
                },
            }],
        },
        {
            path: '*',
            redirect: '/home',
        },
    ],
});

router.beforeEach((to: any, from: any, next: any): void => {
    if(to.meta && to.meta.title){
        document.title = to.meta.title
    }
    next();
});

export default router
