<template>
    <nav>
        <ul class="nav">
            <li v-for="link in links">
                <router-link class="nav__link" :to="{ name: `${link.route}` }">
                    <svg class="icon">
                        <use :xlink:href="`${iconPath}${link.icon}`"></use>
                    </svg>
                    {{ link.title }}
                </router-link>
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
            links: [
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
            ]
        }
    }
}

</script>