<template>
    <div class="produtos-main-page__main-div">
        <router-view></router-view>
        <footer class="produtos-main-page__footer">
            <nav class="produtos-main-page__fot-nav">
                <a href="#" class="produtos-main-page__logo">
                    <span>MN</span>
                </a>
                <button class="produtos-main-page__fot-but">Móveis</button>
                <button class="produtos-main-page__fot-but">Decoração</button>
                <button class="produtos-main-page__fot-but">Arte</button>
            </nav>
        </footer>
    </div>
</template>


<style scoped>
.produtos-main-page__main-div::after {
    content: ' ';
    height: 5rem;
    display: block;
}

.produtos-main-page__footer {
    position: fixed;
    bottom: 0;
    margin: 1rem 38vw;
    background-color: rgba(0, 0, 0, 0.6);
    right: 0;
    left: 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 3rem;
}

.produtos-main-page__fot-nav {
    display: flex;
}

.produtos-main-page__logo {
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: -0.5rem;
    left: -0.1rem;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-family: var(--merienda-font);
    color: var(--gold-color);
    text-decoration: none;
    transition-property: background-color;
    transition-duration: 300ms;
}

    .produtos-main-page__logo:hover {
        background-color: rgb(255, 255, 255);
    }

.produtos-main-page__fot-but {
    flex-grow: 1;
    padding: 1rem;
    border: none;
    background-color: transparent;
    color: white;
    transition-property: background-color,color;
    transition-duration: 300ms;
    cursor: pointer;
}

    .produtos-main-page__fot-but:nth-child(2) {
        margin-left: 4rem;
    }

    .produtos-main-page__fot-but:last-child {
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
        margin-right: 0;
    }

    .produtos-main-page__fot-but:hover {
        background-color: white;
        color: black;
    }


@media (max-width: 1400px) {
    .produtos-main-page__footer {
        margin: 1rem auto;
        width: 337px;
    }
}

@media (max-width: 350px) {
    .produtos-main-page__footer {
        margin: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0;
        width: 100vw;
    }

    .produtos-main-page__logo {
        position: initial;
        width: 3rem;
        height: 3rem;
        font-size: 1rem;
    }

    .produtos-main-page__fot-but:nth-child(2) {
        margin-left: 0rem;
    }

    .produtos-main-page__fot-but:last-child {
        border-top-right-radius: 0rem;
        border-bottom-right-radius: 0rem;
        margin-right: 0;
    }
}

</style>
