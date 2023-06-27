<template>
    <div class="search">
        <input class="search__input" type="text" placeholder="Search...">
        <button class="btn search__btn"><svg class="icon">
                <use xlink:href="@/assets/icons/sprite.svg#search"></use>
            </svg></button>
    </div>
</template>

<script>
export default {
    name: 'Search'
}

</script>