<template>
    <AppSidebar />
    <main class="home">
        <AppHeader />
        <Tag />
        <CategoryItems />
    </main>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import CategoryItems from '@/components/CategoryItems.vue';
import Tag from '@/components/Tag.vue';
import AppSidebar from '@/components/AppSidebar.vue';

export default {
    name: 'All',
    components: {
        Tag,
        AppHeader,
        CategoryItems,
        AppSidebar
    }
}

</script>