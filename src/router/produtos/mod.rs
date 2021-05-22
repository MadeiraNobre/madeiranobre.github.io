mod list;

use yew::{Component, ComponentLink, Html, ShouldRender, html, prelude::Properties};
use yew_router::router::Router;
use list::ListaProdutosPage;

use super::ProdutosRoute;

pub enum ProdutosMessage {}

#[derive(Properties, Clone)]
pub struct ProdutosProps {
    pub route: ProdutosRoute
}


pub struct ProdutosPage;

impl Component for ProdutosPage {
    type Message = ProdutosMessage;
    type Properties = ProdutosProps;

    fn view(&self) -> Html {
        html! {
            <div class="produtos-main-page__main-div">
                <link rel="stylesheet" href="/static/css/pages/produtos.css"/>
                <Router<ProdutosRoute, ()>
                render = Router::render(|switch: ProdutosRoute|{
                    match switch {
                        ProdutosRoute::IndexProdutos => html! {<ListaProdutosPage />}
                    }
                })/>
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
