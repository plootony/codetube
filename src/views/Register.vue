<template>
    <main class="auth">
        <div class="auth__body">
            <h1 class="auth__title">Регистрация</h1>
            <p class="auth__subtitle">Введите Ваши учетные данне</p>
            <form class="auth__form" action="#" method="POST" @submit.prevent="onSubmit">
                <div class="auth__form-group">
                    <input type="text" class="auth__input" required placeholder="Введите имя" v-model="username">
                </div>
                <div class="auth__form-group">
                    <input type="email" class="auth__input" required placeholder="Введите email" v-model="email">
                </div>
                <div class="auth__form-group">
                    <input type="password" class="auth__input" required placeholder="Введите пароль" v-model="password">
                </div>
                <button :class="['btn auth__submit', { 'is-loading': isSubmitting }]" :disabled="isSubmitting"
                    @click="onSubmit()">Регистрация</button>
            </form>
            <router-link class="auth__link" :to="{ name: 'login' }">Еще нет аккаунта?</router-link>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            username: '',
            password: ''

        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting
        }
    },
    methods: {
        onSubmit() {
            console.log('Отправка формы');
            this.$store
                .dispatch('register', {
                    email: this.email,
                    username: this.username,
                    password: this.password
                })
                .then(user => {
                    console.log('Успешная регистрация', user);
                    this.$router.push({ name: 'home' });
                })
        }
    }
}

</script>