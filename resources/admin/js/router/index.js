import Vue from 'vue';
import VueRouter from 'vue-router'
import store from './../store'

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

import AdminLayout from '../components/layout/layout';
import Dashboard from '../components/dashboard/dashboard'; 
import Login from '../components/auth/login';   


let routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/',
        name: 'index',
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
    mode: 'history',
    base: '/admin',
    routes
})