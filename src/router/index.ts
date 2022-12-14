import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomePage.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutPage.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginPage.vue')
        },
        {
            path: '/admin',
            component: () => import('../layouts/admin/AdminLayout.vue'),
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('../views/admin/DashboardPage.vue')
                },
                {
                    path: '/rocleans',
                    name: 'my-rocleans',
                    component: () => import('../views/admin/RocleansPage.vue')
                },
                {
                    path: '/rocleans/:id',
                    name: 'show-roclean',
                    component: () => import('../views/admin/ShowRocleansPage.vue')
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('../views/admin/ProfilePage.vue')
                }
            ]
        }
    ]
})

export default router