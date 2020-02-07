<template>
	<nav class="main-header navbar navbar-expand navbar-dark navbar-gray-dark border-bottom-0">

	    <ul class="navbar-nav">
	        <li class="nav-item">
	            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
	        </li>
	    </ul>

	    <ul class="navbar-nav ml-auto">

	        <!-- Control Sidebar -->
	        <li class="nav-item">
	            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
	                <i  class="fas fa-th-large"></i>
	            </a>
	        </li>

	    </ul>

	</nav>
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
	    <!-- Brand Logo -->
	    <a href="index3.html" class="brand-link">
	        <img src="/images/logo.png" alt="{{ config('app.name', 'AdminLTE') }} Logo" class="brand-image img-circle elevation-3"
	             style="opacity: .8">
	        <span class="brand-text font-weight-light">{{ config('app.name', 'AdminLTE') }}</span>
	    </a>

	    <!-- Sidebar -->
	    <div class="sidebar">
	        <!-- Sidebar user panel (optional) -->
	        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
	            <div class="image">
	                <img src="/images/logo.png" class="img-circle elevation-2" alt="User Image">
	            </div>
	            <div class="info">
	                <a class="d-block" href="#">{{ Auth::guard('admin')->user()->name }}</a>
	            </div>
	        </div>

	        <!-- Sidebar Menu -->
	        <nav class="mt-2">
	            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
	                <!-- Add icons to the links using the .nav-icon class
	                     with font-awesome or any other icon font library -->

	                <li class="nav-item">
	                    <router-link tag="a" to="/dashboard" class="nav-link">
	                        <i class="nav-icon fas fa-tachometer-alt"></i>
	                        <p>Dashboard</p>
	                    </router-link>
	                </li>
	                <li class="nav-item">
	                    <router-link tag="a" to="/users" class="nav-link">
	                        <i class="nav-icon fas fa-th"></i>
	                        <p>Users</p>
	                    </router-link>
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
	    mounted() {
	        console.log('Component mounted.')
	    }
	}
</script>