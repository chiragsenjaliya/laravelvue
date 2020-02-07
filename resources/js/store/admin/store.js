import Vue from 'vue';
import Vuex from 'vuex';

import admin from './modules/admin'
import auth from './modules/auth'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        admin,
        auth,
    }
});