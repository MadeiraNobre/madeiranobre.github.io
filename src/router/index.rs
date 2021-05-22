use yew::{Component, ComponentLink, Html, ShouldRender, html};

pub enum IndexMessages {}

pub struct IndexPage;

impl Component for IndexPage{
    type Message = IndexMessages;
    type Properties = ();

    fn view(&self) -> Html {
        html! {
            <div class="index-page__background">
                <div class="index-page__form">
                    <h1 class="index-page__form-title">{"Madeira Nobre Móveis"}</h1>
                    <span class="index-page__form-span">{"Moveis • Arte • Decoração"}</span>
                    <div class="index-page__form-buttons">
                        <a class="index-page__form-button" href="/temporary_index.html">{"Nossos Produtos"}</a>
                        <a class="index-page__form-button" href="/temporary_index.html#footer">{"Sobre a Loja"}</a>
                    </div>
                </div>
            </div>
        }
    }

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        true
    }
}
