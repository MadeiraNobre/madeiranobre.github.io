use yew::{Component, ComponentLink, Html, ShouldRender, html};

pub enum CategoriaItemComponentMessage {}

pub struct CategoriaItemComponent;

impl Component for CategoriaItemComponent {
    type Message = CategoriaItemComponentMessage;
    type Properties = ();

    fn view(&self) -> Html {
        html! {
            <h1>{"oi"}</h1>
        }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        true
    }

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        true
    }
}
