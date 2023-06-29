<template>
    <div class="category-wrap">
        <section class="category" v-for="category in categories" :key="category.id">

            <h2 class="heading-title">{{ category.title }}</h2>

            <div class="category__items">
                <CategoryItem v-for="card in filteredCards(category.id)" :key="card.id" :card="card" />

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
import { getCards } from '@/api/getCards.js';

export default {
    name: 'CategoryItems',
    components: {
        CategoryItem
    },
    data() {
        return {
            categories: [],
            cards: [],

        }
    },
    computed: {
        filteredCards() {
            return (categoryId) => {
                return this.cards.filter(card => card.category_id === categoryId);
            };
        },
    },
    mounted() {
        getCategories()
            .then(categories => {
                this.categories = categories;
            })
            .catch(error => {
                console.error(error);
            });

        getCards()
            .then(cards => {
                this.cards = cards;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>