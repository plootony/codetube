<template>
    <div class="category-wrap">
        <section class="category" v-for="category in categories" :key="category.id">

            <h2 class="heading-title">{{ category.title }}</h2>

            <div class="category__items">
                <CategoryItem v-for="card in category.cards" :key="card.id" :card="card" />

                <button class="category__item category__item--add">
                    <svg class="icon">
                        <use xlink:href="/src/assets/icons/sprite.svg#plus"></use>
                    </svg>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import { getCategories } from '@/api/getCategories.js';

export default {
    name: 'CategoryItems',
    components: {
        CategoryItem
    },
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        getCategories()
            .then(categories => {
                this.categories = categories;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>