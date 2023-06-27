<template>
    <div class="category__item">
        <Dropdown />
        <button class="stared-btn is-stared"><svg class="icon">
                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
            </svg></button>
        <div class="category__item-img">
            <img src="@/assets/image/folder.svg" alt="">
        </div>
        <h3 class="category__item-title">Курс по Vue 3</h3>
        <div class="progress">
            <div class="progress__line" style="width: 11%;"></div>
        </div>
        <div class="category__item-footer">
            <b class="category__item-time">2ч 20м</b>
            <span class="category__item-notes">23 заметки</span>
        </div>
    </div>
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
    name: "CategoryItem",
    components: { Dropdown }
}
</script>