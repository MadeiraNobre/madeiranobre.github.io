mod index;
mod produtos;
use yew::{Component, ComponentLink, Html, ShouldRender, html};
use yew_router::{Switch, router::Router};
use crate::router::{index::IndexPage, produtos::{ProdutosPage, list::ListaProdutosPage, view::MoveisPageView}};

#[derive(Switch, Debug, Clone)]
pub enum RouterApp {
    #[to="/#/produtos/{id}"]
    ProdutoView(u64),
    #[to="/#/produtos"]
    ProdutosList,
    #[to=""]
    Index
}


pub enum AppMessage {}

pub struct App;

impl Component for App {
    type Message = AppMessage;
    type Properties = ();

    fn view(&self) -> Html {
        html! {
            <Router<RouterApp, ()>
                render = Router::render(|switch: RouterApp| {
                    match switch {
                        RouterApp::ProdutosList => html! {<ProdutosPage><ListaProdutosPage/></ProdutosPage>},
                        RouterApp::ProdutoView(id) => html! {<ProdutosPage><MoveisPageView/></ProdutosPage>},
                        RouterApp::Index => html!{<IndexPage/>}
                    }
                })
            />
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        true
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        true
    }

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self
    }
}
