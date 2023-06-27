<template>
    <AppSidebar />
    <main class="main">

        <router-view></router-view>
    </main>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';

export default {
    name: 'App',
    components: {
        AppSidebar
    }
}

</script>
