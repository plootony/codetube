<template>
    <nav>
        <ul class="nav">
            <li>
                <router-link class="nav__link is-active" :to="{ name: 'all' }">
                    <svg class="icon">
                        <use xlink:href="@/assets/icons/sprite.svg#folder-open"></use>
                    </svg>
                    Все курсы
                </router-link>
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'done' }">
                    <svg class="icon">
                        <use xlink:href="@/assets/icons/sprite.svg#calendar-alt"></use>
                    </svg>
                    Завершенные
                </router-link>
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'favor' }">
                    <svg class="icon">
                        <use xlink:href="@/assets/icons/sprite.svg#star"></use>
                    </svg>
                    Избранное
                </router-link>
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'deleted' }">
                    <svg class="icon">
                        <use xlink:href="@/assets/icons/sprite.svg#trash"></use>
                    </svg>
                    Удаленные
                </router-link>
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'settings' }">
                    <svg class="icon">
                        <use xlink:href="@/assets/icons/sprite.svg#cog"></use>
                    </svg>
                    Настройки
                </router-link>
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'help' }">
                    <svg class="icon">
                        <use xlink:href="@/assets/icons/sprite.svg#question-circle"></use>
                    </svg>
                    Помощь
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}

</script>