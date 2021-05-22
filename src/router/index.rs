use yew::{Component, ComponentLink, Html, ShouldRender, html};

pub enum IndexMessages {}

pub struct IndexPage;

impl Component for IndexPage{
    type Message = IndexMessages;
    type Properties = ();

    fn view(&self) -> Html {
        html! {
            <div><h1>{"Ola"}</h1></div>
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
