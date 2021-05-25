use yew::{Component, ComponentLink, Html, ShouldRender, html};

pub enum IndexMessages {
    ChangeSobre(bool)
}

pub struct IndexPage {
    link: ComponentLink<Self>,
    sobre_visible: bool
}

impl Component for IndexPage{
    type Message = IndexMessages;
    type Properties = ();

    fn view(&self) -> Html {
        let sobre = if self.sobre_visible {
            html! {
                <div class="index-page__sobre">
                    <span class="index-page__times" onclick=self.link
                        .callback(|_| IndexMessages::ChangeSobre(false))>{"×"}</span>
                    <div class="index-page__sobre-central">
                        <div class="index-page__sobre-text">
                            <h2>{"Sobre Nós:"}</h2>
                            <p>
                                {"Somos uma loja de móveis montada no centro histórico de Santana de Parnaíba, cidade turística e de muitas histórias. Atendemos a todo público, mas principalmente pessoas exigentes e de muito bom gosto. Móveis feitos de Peroba Rosa selecionadas de demolição, preservamos assim a qualidade e o requinte de nossos produtos."}
                            </p>
                        </div>
                        <div class="index-page__sobre-localizacao">
                            <h2>{"Localização da Loja:"}</h2>
                            <iframe sandbox="allow-same-origin allow-scripts allow-popups" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.414196599979!2d-46.91756218445572!3d-23.445519463210903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1b4f0cc225cd%3A0xf598051641594ca0!2sR.%20Andr%C3%A9%20Fernandes%2C%20115%20-%20Centro%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006501-050!5e0!3m2!1spt-BR!2sbr!4v1570404266532!5m2!1spt-BR!2sbr" allowfullscreen="" frameborder="0"></iframe>
                        </div>
                        <div class="index-page__sobre-contato">
                            <h2>{"Endereço e Contato:"}</h2>
                            <p>
                                {"Rua André Fernandes, 115 - Centro Histórico"}
                                <br/>
                                {"Santana de Parnaíba - SP"}
                                <br/>
                                {"CEP: 06501-050"}
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
            }
        } else {
            html!{}
        };

        html! {
            <>
                <div class="index-page__background">
                    <div class="index-page__form">
                        <h1 class="index-page__form-title">{"Madeira Nobre Móveis"}</h1>
                        <span class="index-page__form-span">{"Moveis • Arte • Decoração"}</span>
                        <div class="index-page__form-buttons">
                            <a class="index-page__form-button" href="#/produtos">{"Nossos Produtos"}</a>
                            <button class="index-page__form-button" onclick=self.link
                                .callback(|_| IndexMessages::ChangeSobre(true))>{"Sobre a Loja"}</button>
                        </div>
                    </div>
                </div>
                {sobre}
            </>
        }
    }

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            sobre_visible: false,
            link
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            IndexMessages::ChangeSobre(visible) => {
                self.sobre_visible = visible;
                true
            }
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }
}
