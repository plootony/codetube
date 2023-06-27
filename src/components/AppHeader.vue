<template>
    <div class="header">
        <Search />
    </div>
</template>

<script>
import Search from './Search.vue';

export default {
    name: "AppHeader",
    components: { Search }
}

</script>