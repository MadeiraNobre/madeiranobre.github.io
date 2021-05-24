use yew::{Component, ComponentLink, Html, ShouldRender, html};

use crate::{api::Api, helpers, models::MoveisResponse, components::MovelItemComponent};

pub enum ListaProdutosMessage {
    ReceivedData(MoveisResponse)
}

pub struct ListaProdutosPage {
    moveis: Option<MoveisResponse>
}

impl Component for ListaProdutosPage {
    type Message = ListaProdutosMessage;
    type Properties = ();

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            ListaProdutosMessage::ReceivedData(data) => self.moveis = Some(data)
        }

        true
    }

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        get_data(link);
        Self {
            moveis: None
        }
    }

    fn view(&self) -> Html {
        match &self.moveis {
            Some(moveis) => {
                html!{
                    <>
                        <link rel="stylesheet" href="/static/css/pages/lista-produtos-moveis.css"/>
                        <div class="lista-produtos-moveis-page__root">
                            {
                                moveis.moveis
                                    .iter()
                                    .enumerate()
                                    .map(|(i, e)| html! {<MovelItemComponent index_id=i as u8 movel=e.clone()/>})
                                    .collect::<Html>()
                            }
                        </div>
                    </>
                }
            },
            None => html! {
                <div>
                    {"Nao tem"}
                </div>
            }
        }
    }
}

fn get_data(link: ComponentLink<ListaProdutosPage>) {
    let api = Api::new();

    api.get_moveis(move |c| {
        match c {
            Ok(data) => link.send_message(ListaProdutosMessage::ReceivedData(data)),
            Err(why) => {
                helpers::catch_error(why);
            }
        }
    })
}
