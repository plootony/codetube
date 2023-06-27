<template>
    <div class="progress">
        <div class="progress__line" :style="{ width: normalizedPercent + '%' }">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        percent: {
            type: Number,
            required: false,
            default: () => ({})
        }
    },
    computed: {
        normalizedPercent() {
            if (this.percent > 100) {
                return 100;
            } else {
                return this.percent;
            }
        }
    }
}
</script>


<!-- Запрос на получение всех карточек, каждая карточка получает свой набор, в этом наборе есть прогресс -->