import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
let router = createRouter({
    // url 地址的转发规则
    history: createWebHashHistory(),
    // 在routes 中配置路由规则
    routes: [{
            path: '/',
            // 异步懒加载 推荐使用
            component: () => import('../components/HelloWorld.vue')
        },
        // {
        //     path: '/stock',
        //     component: () => import('../components/StockPage.vue')
        // }
    ]
});
export default router;