import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/view/login/index.vue')
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes as RouteRecordRaw[],
    // 刷新时滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;