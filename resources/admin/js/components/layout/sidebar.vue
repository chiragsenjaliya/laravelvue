<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a class="brand-link" href="../../index3.html">
            <img alt="AdminLTE Logo" class="brand-image img-circle elevation-3" src="/images/logo.png" style="opacity: .8">
            <span class="brand-text font-weight-light">
                AdminLTE 3
            </span>
            </img>
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img alt="User Image" class="img-circle elevation-2" src="/images/avatar.png">
                    </img>
                </div>
                <div class="info">
                    <a class="d-block" href="#">
                        {{ admin.name }}
                    </a>
                </div>
            </div>
            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-accordion="false" data-widget="treeview" role="menu">
                    <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                    <li class="nav-item">
                        <router-link class="nav-link" tag="a" to="/dashboard">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" tag="a" to="/users">
                            <i class="nav-icon fas fa-th">
                            </i>
                            <p>Users</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="logout">
                            <i class="nav-icon fas fa-power-off"></i>
                            <p>Sign Out</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
    export default {
        data() {
            return {}
        },
        computed: {
            admin() {
                return this.$store.getters.getProfile;
            }
        },
        methods: {
            logout: function() {
                this.$store.dispatch('authLogout')
                    .then(() => {
                        this.$router.go('/')
                    })
            }
        }
    }

</script>
