<template>
    <div>
        <div class="index-page__background">
            <div class="index-page__form">
                <h1 class="index-page__form-title">Madeira Nobre Móveis</h1>
                <span class="index-page__form-span">Moveis • Arte • Decoração</span>
                <div class="index-page__form-buttons">
                    <a class="index-page__form-button" href="#/produtos">Nossos Produtos</a>
                    <button class="index-page__form-button" @click="definirSobre(true)">Sobre a Loja</button>
                </div>
            </div>
        </div>
        <div v-if="openSobre" class="index-page__sobre">
            <span class="index-page__times" @click="definirSobre(false)">×</span>
            <div class="index-page__sobre-central">
                <div class="index-page__sobre-text">
                    <h2>Sobre Nós:</h2>
                    <p>
                        Somos uma loja de móveis montada no centro histórico de Santana de Parnaíba, cidade turística e de muitas histórias. Atendemos a todo público, mas principalmente pessoas exigentes e de muito bom gosto. Móveis feitos de Peroba Rosa selecionadas de demolição, preservamos assim a qualidade e o requinte de nossos produtos.
                    </p>
                </div>
                <div class="index-page__sobre-localizacao">
                    <h2>Localização da Loja:</h2>
                    <iframe sandbox="allow-same-origin allow-scripts allow-popups" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.414196599979!2d-46.91756218445572!3d-23.445519463210903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1b4f0cc225cd%3A0xf598051641594ca0!2sR.%20Andr%C3%A9%20Fernandes%2C%20115%20-%20Centro%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006501-050!5e0!3m2!1spt-BR!2sbr!4v1570404266532!5m2!1spt-BR!2sbr" allowfullscreen="" frameborder="0"></iframe>
                </div>
                <div class="index-page__sobre-contato">
                    <h2>Endereço e Contato:</h2>
                    <p>
                        Rua André Fernandes, 115 - Centro Histórico
                        <br/>
                        Santana de Parnaíba - SP
                        <br/>
                        CEP: 06501-050
                    </p>
                    <div class="index-page__contato">
                        <a href="https://wa.me/5511995401715" class="wpp">
                            <img class="index-page__contato__link" src="/static/assets/svgs/wpp.svg" alt="WhatsApp Logo"/>
                        </a>
                        <a href="https://www.facebook.com/madeiranobremoveis" class="insta">
                            <img class="index-page__contato__link" src="/static/assets/svgs/instagram.svg" alt="Instagram Logo"/>
                        </a>
                        <a href="https://www.instagram.com/madeiranobremoveis/" class="fb">
                            <img class="index-page__contato__link" src="/static/assets/svgs/facebook.svg" alt="Facebook Logo"/>
                        </a>
                        <a href="mailto:comercial@madeiranobremoveis.com.br" class="email">
                            <img class="index-page__contato__link" src="/static/assets/svgs/email.svg" alt="Email Logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            openSobre: false
        }
    },
    methods: {
        definirSobre(estado) {
            this.openSobre = estado
        }
    },
}
</script>

<style scoped>
.index-page__background {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

    .index-page__background::before {
        content: ' ';
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: url('/static/assets/imgs/background.jpg');
        z-index: -1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(4px);
    }

.index-page__form {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 4rem;
    border-radius: var(--default-radius);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.index-page__form-title {
    font-family: var(--merienda-font);
    font-size: 3rem;
    color: var(--gold-color);
    margin-bottom: 1rem;
}

.index-page__form-span {
    font-size: 1.5rem;
}

.index-page__form-buttons {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
}

.index-page__form-button {
    flex-grow: 1;
    color: white;
    text-decoration: none;
    text-align: center;
    padding-top: .5rem;
    padding-bottom: .5rem;
    background-color: black;
    transition-property: color,background-color;
    transition-duration: 300ms;
    border: none;
    cursor: pointer;
}

    .index-page__form-button:first-child {
        border-bottom-left-radius: var(--default-radius);
        border-right: 1px solid rgba(255, 255, 255, 0.3);
    }

    .index-page__form-button:last-child {
        border-bottom-right-radius: var(--default-radius);
    }

    .index-page__form-button:hover {
        color: black;
        background-color: white;
    }

.index-page__sobre {
    animation-name: index-page__sobre-animation;
    animation-duration: 400ms;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
}

.index-page__sobre-central {
    --width-base: 60vw;
    --item-width: calc(var(--width-base) / 3);
    display: flex;
    width: var(--width-base);
    padding: 1rem;
}

    .index-page__sobre-central h2 {
        margin-bottom: .6rem;
        font-weight: bold;
    }

.index-page__times {
    position: fixed;
    top: 2rem;
    right: 2rem;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    user-select: none;
}

.index-page__sobre-text {
    width: var(--item-width);
    text-align: justify;
}

.index-page__sobre-localizacao {
    width: var(--item-width);
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .index-page__sobre-localizacao iframe {
        border-radius: 5px;
        width: 300px;
        height: 300px;
    }

.index-page__sobre-contato{
    width: var(--item-width)
}

.index-page__contato {
    margin-top: 2rem;
}

.index-page__contato__link {
    filter: invert(100%) sepia(20%) saturate(0%) hue-rotate(282deg) brightness(104%) contrast(104%);
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    transition-property: filter;
    transition-duration: 300ms;
}

.wpp:hover .index-page__contato__link {
    filter: invert(72%) sepia(100%) saturate(472%) hue-rotate(35deg) brightness(100%) contrast(111%);
}

.insta:hover .index-page__contato__link {
    filter: invert(16%) sepia(75%) saturate(6573%) hue-rotate(355deg) brightness(93%) contrast(104%);
}

.fb:hover .index-page__contato__link {
    filter: invert(46%) sepia(88%) saturate(1435%) hue-rotate(163deg) brightness(98%) contrast(101%);
}

.email:hover .index-page__contato__link {
    filter: invert(83%) sepia(68%) saturate(1485%) hue-rotate(3deg) brightness(108%) contrast(105%);
}

@media (max-width: 1680px) {
    .index-page__sobre-central {
        --width-base: 70vw
    }
}

@media (max-width: 1400px) {
    .index-page__sobre-central {
        --width-base: 80vw
    }
}

@media (max-width: 1200px) {
    .index-page__sobre-central {
        --width-base: 90vw
    }
}

@media (max-width: 1090px) {
    .index-page__sobre-central {
        --width-base: 100vw
    }
}

@media (max-width: 990px) {
    .index-page__sobre-central {
        --item-width: 400px;
        flex-direction: column;
        height: 90vh;
        overflow-y: auto;
        overflow-x: hidden;
        width: 400px;
        align-items: center;
    }

        .index-page__sobre-central div {
            margin-bottom: 2rem;
        }

    .index-page__sobre-localizacao {
        display: inline-block;
    }
}

@media (max-width: 690px) {
    .index-page__form {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0;

        border-radius: 0;
        justify-content: center;
    }

    .index-page__form-button:first-child {
        border-bottom-left-radius: 0;
    }

    .index-page__form-button:last-child {
        border-bottom-right-radius: 0;
    }
}

@media (max-width: 560px) {
    .index-page__form-title {
        font-size: 2rem;
    }

    .index-page__form-span {
        font-size: 1rem;
    }
}

@media (max-width: 550px) {
    .index-page__times {
        top: .5rem;
        right: .5rem;
    }
}

@media (max-width: 416px) {
    .index-page__sobre-central {
        --item-width: 290px;
        width: 290px;
    }

    .index-page__sobre-localizacao iframe {
        width: 290px;
        height: 290px;
    }
}

@media (max-width: 390px) {
    .index-page__form-title {
        font-size: 1.5rem;
    }

    .index-page__form-span {
        font-size: 1rem;
    }
}

@keyframes index-page__sobre-animation {
    from {
        top: -100vh;
    }

    to {
        top: 0;
    }
}

</style>
