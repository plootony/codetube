<template>
    <div :class="['dropdown', { 'is-open': isOpen }]" v-click-out-side="hideDropdown">
        <button class="dropdown__btn" @click="dropdownToggle">
            <svg class="icon">
                <use xlink:href="@/assets/icons/sprite.svg#ellipsis-h"></use>
            </svg>
        </button>
        <ul class="dropdown__menu">
            <li class="dropdown__item" v-for="link in links" :key="link">{{ link }}</li>
        </ul>
    </div>
</template>

<script>
import clickOutSide from "@/directives/clickOutSide";

export default {
    name: 'Dropdown',
    data() {
        return {
            isOpen: false,
            links: ['Удалить', 'Редактировать', 'Архивировать']
        }
    },
    directives: { clickOutSide },
    methods: {
        dropdownToggle(key) {
            this.isOpen = !this.isOpen
        },

        hideDropdown() {
            this.isOpen = false;
        }
    }
}
</script>