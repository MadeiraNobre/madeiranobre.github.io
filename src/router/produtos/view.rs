use yew::{Component, ComponentLink, Html, ShouldRender, html};

pub struct MoveisPageView;

pub enum MoveisPageMessages {}

impl Component for MoveisPageView {
    type Message = MoveisPageMessages;
    type Properties = ();

    fn view(&self) -> Html {
        html! {
            <h1>{"oi"}</h1>
        }
    }

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }
}
