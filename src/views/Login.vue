<template>
    <main class="auth">
        <div class="auth__body">
            <h1 class="auth__title">Авторизация</h1>
            <p class="auth__subtitle">Введите Ваши учетные данне</p>
            <form class="auth__form" action="#" method="POST">
                <div class="auth__form-group">
                    <label for="name" class="auth__label">Имя:</label>
                    <input type="text" id="name" name="name" class="auth__input" required placeholder="Введите имя">
                </div>
                <div class="auth__form-group">
                    <label for="email" class="auth__label">Email:</label>
                    <input type="email" id="email" name="email" class="auth__input" required placeholder="Введите email">
                </div>
                <div class="auth__form-group">
                    <label for="password" class="auth__label">Пароль:</label>
                    <input type="password" id="password" name="password" class="auth__input" required
                        placeholder="Введите пароль">
                </div>
                <button type="submit" class="btn auth__submit">Зарегистрироваться</button>
            </form>
            <router-link class="auth__link" :to="{ name: 'register' }">Уже есть аккаунт?</router-link>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Login'
}

</script>