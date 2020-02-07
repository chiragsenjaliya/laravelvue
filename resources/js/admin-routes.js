import VueRouter from 'vue-router';


import {store} from '../vuex/store'

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return
    }
    next('/dashboard')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return
    }
    next('/')
}

import AdminLayout from './../components/admins/layout/layout';
import Dashboard from './../components/admin/dashboard/dashboard'; 
import Login from './../components/admin/auth/login';   


let adminRoutes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/',
        name: 'layout',
        component: AdminLayout,
        beforeEnter: ifAuthenticated,
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard
            }
        ]
    },
];


export default new VueRouter({
    base: '/admin/',
    mode: 'history',
    adminRoutes,
    linkActiveClass: 'active'
});