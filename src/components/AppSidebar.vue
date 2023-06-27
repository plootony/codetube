<template>
    <aside class="sidebar left-sidebar">
        <Logo />
        <AppNav />
    </aside>
</template>

<script>
import Logo from './Logo.vue';
import AppNav from './AppNav.vue';

export default {
    name: 'AppSidebar',
    components: {
        Logo,
        AppNav
    }
}

</script>