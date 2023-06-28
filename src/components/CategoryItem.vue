<template>
    <div class="category__item">
        <Dropdown />

        <button :class="['favor-btn', { 'is-favor': isFavor }]" @click="favorToggle">
            <svg class="icon">
                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
            </svg>
        </button>

        <div class="category__item-img">
            <img :src="`${cardImagePath}${card.image}.svg`" :alt="`${card.image}`">
        </div>

        <h3 class="category__item-title">{{ card.title }}</h3>

        <ProgressBar :percent="card.percent" />

        <div class="category__item-footer">
            <b class="category__item-time">{{ card.time }} мин</b>
            <span class="category__item-notes">{{ card.note }} заметки</span>
        </div>
    </div>
</template>

<script>
import Dropdown from './Dropdown.vue';
import ProgressBar from './ProgressBar.vue';

export default {
    name: "CategoryItem",
    components: {
        Dropdown,
        ProgressBar
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isFavor: false,
            cardImagePath: 'src/assets/image/'
        }
    },
    methods: {
        favorToggle() {
            this.isFavor = !this.isFavor
        }
    }
}
</script>