<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <b>
                    LaraVue
                </b>
                Panel
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">
                        Sign in to start your session
                    </p>
                    <template v-if="authErrors.any()">
                        <p class="text-danger" v-for="error in authErrors.all()" v-text="error">
                        </p>
                    </template>
                    <form method="POST" v-on:submit.prevent="login">
                        <div class="input-group mb-3">
                            <input autofocus="" class="form-control" id="email" placeholder="Email address" required="" type="email" v-model="email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input class="form-control" id="password" placeholder="Password" required="" type="password" v-model="password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input id="remember" type="checkbox" value="remember" v-model="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button class="btn btn-primary btn-block" type="submit">
                                    Sign In
                                </button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                'email': '',
                'password': '',
                'remember': false,
            }
        },
        mounted() {
           
        },
        computed: {
            authErrors() {
                return this.$store.getters.authErrors;
            }
        },
        methods: {
            login: function() {
                const {
                    email,
                    password,
                    remember
                } = this;
                this.$store.dispatch('authRequest', {
                        email,
                        password,
                        remember
                    })
                    .then(() => {
                        this.$router.push('/dashboard')
                    })
            }
        }
    }

</script>
