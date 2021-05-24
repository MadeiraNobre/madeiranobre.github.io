use yew::{Component, ComponentLink, Html, ShouldRender, html, Properties};

use crate::models::Movel;

pub enum MovelItemComponentMessage {}

pub struct MovelItemComponent {
    index_id: u8,
    movel: Movel
}

#[derive(Properties, Clone)]
pub struct MovelItemProps {
    pub index_id: u8,
    pub movel: Movel
}

impl Component for MovelItemComponent {
    type Message = MovelItemComponentMessage;
    type Properties = MovelItemProps;

    fn view(&self) -> Html {
        let imagem_url = format!("/static/assets/internal/moveis-db/imgmoveis/{}", &self.movel.imgs[0]);
        html! {
            <>
                <link rel="stylesheet" href="/static/css/components/movel-item.css"/>
                <a href=format!("/temporary_index.html?movel={}", self.index_id) class="movel-item-component__main">
                    <img class="movel-item-component__image" src=imagem_url alt={self.movel.nome.clone()}/>
                    <h2 class="movel-item-component__title">{self.movel.titulo_catalogo.clone()}</h2>
                </a>
            </>
        }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn create(props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self {
            index_id: props.index_id,
            movel: props.movel
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }
}
