<template>
    <div class="category-wrap">
        <section class="category">
            <h2 class="heading-title">Заголовок</h2>
            <div class="category__items">
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />

                <button class="category__item category__item--add"><svg class="icon">
                        <use xlink:href="/src/assets/icons/sprite.svg#plus"></use>
                    </svg></button>
            </div>
        </section>
    </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';


export default {
    name: 'CategoryItems',
    components: {
        CategoryItem
    }
}

</script>