import Vue from 'vue'

const state = {
    status: '',
    profile: {}
}

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name,
}

const actions = {
    adminRequest: ({commit, dispatch}) => {
        commit('adminRequest')
        axios.get('/api/admin')
            .then((resp) => {
                commit('adminSuccess', resp.data);
            })
            .catch((err) => {
                commit('adminError');
                // if resp is unauthorized, logout, to
                dispatch('authLogout')
            })
    },
}

const mutations = {
    adminRequest: (state) => {
        state.status = 'loading';
    },
    adminSuccess: (state, resp) => {
        state.status = 'success';
        Vue.set(state, 'profile', resp);
    },
    adminError: (state) => {
        state.status = 'error';
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}