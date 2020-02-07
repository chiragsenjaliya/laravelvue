<template>
    <div class="login-box">
        <div class="login-logo">            
            <b>
                Admin
            </b>
            LTE
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
                        </input>
                    </div>
                    <div class="input-group mb-3">
                        <input class="form-control" id="password" placeholder="Password" required="" type="password" v-model="password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock">
                                    </span>
                                </div>
                            </div>
                        </input>
                    </div>
                    <div class="row">                        
                        <!-- /.col -->
                        <div class="col-4">
                            <button class="btn btn-lg btn-primary btn-block mt-2 mb-2" type="submit">
                                Sign in
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                'email':'',
                'password':'',
                'remember':false,
            }
        },
        computed: {
            authErrors(){
                return this.$store.getters.authErrors;
            }
        },
        methods: {
            login: function () {
                const { email, password, remember } = this;
                this.$store.dispatch('authRequest', { email, password, remember })
                    .then(() => {
                        this.$router.push('/dashboard')
                    })
            }
        }
    }
</script>