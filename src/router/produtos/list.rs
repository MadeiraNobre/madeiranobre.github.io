use yew::{Component, ComponentLink, Html, ShouldRender, html};

use crate::models::Categoria;

pub enum ListaProdutosMessage {
    ReceivedData(Vec<Categoria>)
}

pub struct ListaProdutosPage {
    categorias: Vec<Categoria>,
    link: ComponentLink<Self>
}

impl Component for ListaProdutosPage {
    type Message = ListaProdutosMessage;
    type Properties = ();

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            ListaProdutosMessage::ReceivedData(data) => self.categorias = data
        }

        true
    }

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        get_data(link.clone());
        Self {
            link,
            categorias: Vec::new()
        }
    }

    fn view(&self) -> Html {
        html! {
            <div>
                {"oi"}
                {self.categorias.iter().map(|e| html! {<h1>{&e.name}</h1>}).collect::<Html>()}
            </div>
        }
    }
}

fn get_data(link: ComponentLink<ListaProdutosPage>) {
    wasm_bindgen_futures::spawn_local(async move {
        link.send_message(ListaProdutosMessage::ReceivedData(vec![Categoria {
            icon: "oi".into(),
            id: 0,
            name: "fodaaoporra".into()
        }]));
    })
}
