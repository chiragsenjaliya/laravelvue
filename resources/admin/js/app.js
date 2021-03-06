/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import Notifications from 'vue-notification'


Vue.use(VueRouter);
Vue.use(Notifications);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import router from './router'
import store  from './store';

Vue.component('navbar-component', require('./components/layout/navbar.vue').default);
Vue.component('section-title', require('./components/elements/title.vue').default);
Vue.component('sidebar-component', require('./components/layout/sidebar.vue').default);
Vue.component('footer-component', require('./components/layout/footer.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    created(){
        if (this.$store.getters.isAuthenticated) {
            this.$store.dispatch('adminRequest');
            commit('authLogout');
        }
    },
    store,
    router
});
