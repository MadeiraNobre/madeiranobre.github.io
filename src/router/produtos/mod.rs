pub mod list;
pub mod view;

use yew::{Children, Component, ComponentLink, Html, ShouldRender, html, prelude::Properties};


pub enum ProdutosMessage {}

#[derive(Properties, Clone)]
pub struct ProdutosProps {
    #[prop_or_default]
    pub children: Children
}


pub struct ProdutosPage {
    children: Children
}

impl Component for ProdutosPage {
    type Message = ProdutosMessage;
    type Properties = ProdutosProps;

    fn view(&self) -> Html {
        html! {
            <>
                <link rel="stylesheet" href="/static/css/pages/produtos.css"/>
                <div class="produtos-main-page__main-div">
                    {for self.children.iter()}
                    <footer class="produtos-main-page__footer">
                        <nav class="produtos-main-page__fot-nav">
                            <a href="#" class="produtos-main-page__logo">
                                <span>{"MN"}</span>
                            </a>
                            <button class="produtos-main-page__fot-but">{"Móveis"}</button>
                            <button class="produtos-main-page__fot-but">{"Decoração"}</button>
                            <button class="produtos-main-page__fot-but">{"Arte"}</button>
                        </nav>
                    </footer>
                </div>
            </>
        }
    }

    fn create(props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self {
            children: props.children
        }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }
}
