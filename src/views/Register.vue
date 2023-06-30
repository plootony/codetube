<template>
    <main class="auth">
        <div class="auth__body">
            <h1 class="auth__title">Регистрация</h1>
            <p class="auth__subtitle">Введите Ваши учетные данне</p>
            <form class="auth__form" action="#" method="POST">
                <div class="auth__form-group">
                    <label for="email" class="auth__label">Email:</label>
                    <input type="email" id="email" name="email" class="auth__input" required placeholder="Введите email">
                </div>
                <div class="auth__form-group">
                    <label for="password" class="auth__label">Пароль:</label>
                    <input type="password" id="password" name="password" class="auth__input" required
                        placeholder="Введите пароль">
                </div>
                <button type="submit" class="btn auth__submit">Войти</button>
            </form>
            <router-link class="auth__link" :to="{ name: 'login' }">Еще нет аккаунта?</router-link>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Register'
}

</script>