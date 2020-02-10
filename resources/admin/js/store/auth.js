import Cookies from 'js-cookie'
import Errors from './../modules/errors';

const state = {
    access_token: Cookies.get('access_token') || '',
    status: '',
    authMessage: '',
    hasLoadedOnce: false,
    errors: new Errors()
}

const getters = {
    isAuthenticated: state => !!state.access_token,
    authStatus: state => state.status,
    authErrors: state => state.errors,
    authMessage: state => state.authMessage,
}

const actions = {
    authRequest: ({ commit, dispatch }, payload) => {
        let actionUrl = '/api/admin/login';
        let data = {
            'email': payload.email,
            'password': payload.password
        }


        return new Promise((resolve, reject) => {
            commit('authRequest');
            axios.post(actionUrl, data)
                .then((resp) => {
                    let access_token = 'Bearer ' + resp.data.access_token;
                    Cookies.set('access_token', access_token, { expires: remember ? 365 : 1 });
                    axios.defaults.headers.common['Authorization'] = access_token;
                    commit('authSuccess', access_token);
                    dispatch('adminRequest');
                    resolve(access_token);
                })
                .catch((err) => {
                    console.log(err)
                    commit('authError', err.response.data);
                    Cookies.remove('access_token');
                    reject(err);
                })
        })
    },
    authLogout: ({ commit, dispatch }) => {
        Cookies.remove('access_token');
        return new Promise((resolve, reject) => {
            axios.post('/logout')
                .then((resp) => {
                    commit('authLogout');
                    resolve();
                })
                .catch((err) => {
                    commit('authError', err.response.data);
                    reject(err);
                });
        })
    },
    authMessage: ({ commit, dispatch }) => {
        commit('authMessage');
    }
}

const mutations = {
    authRequest: (state) => {
        state.status = 'loading';
    },
    authSuccess: (state, access_token) => {
        state.status = 'success';
        state.authMessage = 'You have successfully logged in.';
        state.access_token = access_token;
        state.hasLoadedOnce = true;
    },
    authError: (state, err) => {
        let errors = err.errors ? err.errors : {};
        state.status = 'error';
        state.hasLoadedOnce = true;
        state.errors.record(errors);
    },
    authMessage: (state) => {
        state.authMessage = '';
    },
    authLogout: (state) => {
        state.access_token = '';
        state.authMessage = 'You have successfully Logged Out.';
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
