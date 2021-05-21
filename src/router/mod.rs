mod index;
use yew::{Component, ComponentLink, Html, ShouldRender, html};
use yew_router::{Switch, router::Router};
use index::IndexPage;

#[derive(Switch, Debug, Clone)]
pub enum RouterApp {
    #[to="/"]
    Index
}

pub enum AppMessage {}

pub struct App {
    link: ComponentLink<Self>
}

impl Component for App {
    type Message = AppMessage;
    type Properties = ();

    fn view(&self) -> Html {
        html! {
            <Router<RouterApp, ()>
                render = Router::render(|switch: RouterApp| {
                    match switch {
                        RouterApp::Index => html!{<IndexPage/>},
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

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link
        }
    }
}
