<template>
    <AppHeader />
    <Tag />
    <CategoryItems />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import CategoryItems from '@/components/CategoryItems.vue';
import Tag from '@/components/Tag.vue';

export default {
    name: 'All',
    components: {
        Tag,
        AppHeader,
        CategoryItems,
    }
}

</script>