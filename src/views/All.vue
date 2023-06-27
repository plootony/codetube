<template>
    <AppHeader />
    <CategoryItems />
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import CategoryItems from '../components/CategoryItems.vue';

export default {
    name: 'All',
    components: {
        AppHeader,
        CategoryItems
    }
}

</script>