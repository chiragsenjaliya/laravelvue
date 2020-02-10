<template>
    <div class="wrapper sidebar-mini layout-fixed sidebar-collapse">
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <footer-component></footer-component>
        <notifications position="top right" group="toast" />
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            if (this.$store.getters.authMessage) {
                this.$notify({
                    group: 'toast',
                    type: 'success',
                    text: this.$store.getters.authMessage
                });
                this.$store.dispatch('authMessage')
            }
        }
    }

</script>
