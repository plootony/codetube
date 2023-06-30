<template>
    <nav>
        <ul class="nav">
            <li v-for="navLink in navLinks" :key="navLink.id">
                <router-link class="nav__link" :to="{ name: `${navLink.route}` }">
                    <svg class="icon">
                        <use :xlink:href="`${iconPath}${navLink.icon}`"></use>
                    </svg>
                    {{ navLink.title }}
                </router-link>
            </li>
        </ul>
        <ul class="nav nav--auth">
            <li>
            <li v-for="authLink in authLinks" :key="authLink.id">
                <router-link class="nav__link" :to="{ name: `${authLink.route}` }">
                    <svg class="icon">
                        <use :xlink:href="`${iconPath}${authLink.icon}`"></use>
                    </svg>
                    {{ authLink.title }}
                </router-link>
            </li>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            iconPath: 'src/assets/icons/sprite.svg#',
            navLinks: [
                {
                    id: 1,
                    title: 'Все курсы',
                    icon: 'folder-open',
                    route: 'home'
                },
                {
                    id: 2,
                    title: 'Завершенные',
                    icon: 'calendar-alt',
                    route: 'done'
                },
                {
                    id: 3,
                    title: 'Избранное',
                    icon: 'star',
                    route: 'favor'
                },
                {
                    id: 4,
                    title: 'Удаленные',
                    icon: 'trash',
                    route: 'deleted'
                },
                {
                    id: 5,
                    title: 'Настройки',
                    icon: 'cog',
                    route: 'settings'
                },
                {
                    id: 6,
                    title: 'Помошь',
                    icon: 'question-circle',
                    route: 'help'
                }
            ],
            authLinks: [
                {
                    id: 1,
                    title: 'Войти',
                    icon: 'folder-open',
                    route: 'login'
                },
                {
                    id: 2,
                    title: 'Регистрация',
                    icon: 'calendar-alt',
                    route: 'register'
                }
            ]
        }
    }
}

</script>