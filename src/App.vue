<template>
    <aside class="sidebar left-sidebar">
        <div class="logo">
            <a href="/" class="logo__link"><img src="./assets/image/logo.svg" width="130" alt="Логотип"></a>
        </div>
        <nav>
            <ul class="nav">
                <li>
                    <a class="nav__link is-active" href="#">
                        <svg class="icon">
                            <use xlink:href="./assets/icons/sprite.svg#folder-open"></use>
                        </svg>
                        Все категории
                    </a>
                    <ul class="nav__subnav">
                        <li><a class="nav__subnav-link" href="#">Программирование</a></li>
                        <li><a class="nav__subnav-link" href="#">Английский язык</a></li>
                        <li><a class="nav__subnav-link" href="#">Тайм мендежмент</a></li>
                    </ul>
                </li>
                <li>
                    <a class="nav__link" href="#">
                        <svg class="icon">
                            <use xlink:href="./assets/icons/sprite.svg#calendar-alt"></use>
                        </svg>
                        Завершенные
                    </a>
                </li>
                <li>
                    <a class="nav__link" href="#">
                        <svg class="icon">
                            <use xlink:href="./assets/icons/sprite.svg#star"></use>
                        </svg>
                        Избранное
                    </a>
                </li>
                <li>
                    <a class="nav__link" href="#">
                        <svg class="icon">
                            <use xlink:href="./assets/icons/sprite.svg#trash"></use>
                        </svg>
                        Удаленные
                    </a>
                </li>
                <li>
                    <a class="nav__link" href="#">
                        <svg class="icon">
                            <use xlink:href="./assets/icons/sprite.svg#cog"></use>
                        </svg>
                        Настройки
                    </a>
                </li>
                <li>
                    <a class="nav__link" href="#">
                        <svg class="icon">
                            <use xlink:href="./assets/icons/sprite.svg#question-circle"></use>
                        </svg>
                        Помощь
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    <main class="main">
        <div class="header">
            <div class="search">
                <input class="search__input" type="text" placeholder="Search...">
                <button class="btn search__btn"><svg class="icon">
                        <use xlink:href="./assets/icons/sprite.svg#search"></use>
                    </svg></button>
            </div>
        </div>

        <section class="tag">
            <h2 class="heading-title">Теги</h2>
            <div class="tag__items">
                <span class="tag__item">JS</span>
                <span class="tag__item">Английский</span>
                <span class="tag__item">Unity</span>
                <span class="tag__item">C++</span>
            </div>
        </section>
        <div class="category-wrap">
            <section class="category">
                <h2 class="heading-title">Программирование</h2>
                <div class="category__items">
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn is-stared"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
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
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Курс по SCSS</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 80%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Курс по Java Script</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 50%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn is-stared"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Тайм мендежмент</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 30%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown is-open">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__menu-item">Удалить</li>
                                <li class="dropdown__menu-item">Редактировать</li>
                                <li class="dropdown__menu-item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Как стрелять из пушки по воробьям</h3>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <button class="category__item category__item--add"><svg class="icon">
                            <use xlink:href="/src/assets/icons/sprite.svg#plus"></use>
                        </svg></button>
                </div>
            </section>
            <section class="category">
                <h2 class="heading-title">Английский язык</h2>
                <div class="category__items">
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn is-stared"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">English for Beginners</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 11%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">British English</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 80%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Английский за 2 недели</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 50%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn is-stared"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Travel English</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 30%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__menu-item">Удалить</li>
                                <li class="dropdown__menu-item">Редактировать</li>
                                <li class="dropdown__menu-item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Как выучить Английский?</h3>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <button class="category__item category__item--add"><svg class="icon">
                            <use xlink:href="/src/assets/icons/sprite.svg#plus"></use>
                        </svg></button>
                </div>
            </section>
            <section class="category">
                <h2 class="heading-title">Английский язык</h2>
                <div class="category__items">
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn is-stared"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">English for Beginners</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 11%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">British English</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 80%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Английский за 2 недели</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 50%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">Удалить</li>
                                <li class="dropdown__item">Редактировать</li>
                                <li class="dropdown__item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn is-stared"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Travel English</h3>
                        <div class="progress">
                            <div class="progress__line" style="width: 30%;"></div>
                        </div>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <div class="category__item">
                        <div class="dropdown">
                            <button class="dropdown__btn"> <svg class="icon">
                                    <use xlink:href="./assets/icons/sprite.svg#ellipsis-h"></use>
                                </svg></button>
                            <ul class="dropdown__menu">
                                <li class="dropdown__menu-item">Удалить</li>
                                <li class="dropdown__menu-item">Редактировать</li>
                                <li class="dropdown__menu-item">Архивировать</li>
                            </ul>

                        </div>
                        <button class="stared-btn"><svg class="icon">
                                <use xlink:href="/src/assets/icons/sprite.svg#star"></use>
                            </svg></button>
                        <div class="category__item-img">
                            <img src="./assets/image/folder.svg" alt="">
                        </div>
                        <h3 class="category__item-title">Как выучить Английский?</h3>
                        <div class="category__item-footer">
                            <b class="category__item-time">2ч 20м</b>
                            <span class="category__item-notes">23 заметки</span>
                        </div>
                    </div>
                    <button class="category__item category__item--add"><svg class="icon">
                            <use xlink:href="/src/assets/icons/sprite.svg#plus"></use>
                        </svg></button>
                </div>
            </section>
        </div>

    </main>
</template>
