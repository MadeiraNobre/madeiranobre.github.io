use reqwest::{Client, RequestBuilder};

use crate::{GenericError, models::MoveisResponse};

fn get_url() -> String {
    let window = web_sys::window()
        .unwrap();

    window.location()
        .origin()
        .unwrap()
}

fn http_request_async<F, F2>(configure_http: F, mut callback: F2)
where
    F: Fn(&mut Client) -> RequestBuilder + 'static,
    F2: FnMut(Result<String, GenericError>) + 'static
{
    let mut http_client = Client::new();
    wasm_bindgen_futures::spawn_local(async move {
        let resulted = async {
            let configured_http = configure_http(&mut http_client);
            let resulted = configured_http
                .send()
                .await?
                .text()
                .await?;

            Ok(resulted) as Result<String, GenericError>
        };

        callback(resulted.await);
    });
}


pub struct Api {
    url: String
}

impl Api {
    pub fn new() -> Self {
        Self {
            url: get_url()
        }
    }

    pub fn get_moveis<F>(&self, mut callback: F)
    where
        F: FnMut(Result<MoveisResponse, GenericError>) + 'static
    {
        let url = format!("{}/static/assets/internal/moveis-db/moveis.json", &self.url);
        http_request_async(move |c| c.get(url.clone()), move |response| {
            let result = || {
                let data = response?;
                let json_data = serde_json::from_str::<MoveisResponse>(&data)?;


                Ok(json_data) as Result<MoveisResponse, GenericError>
            };

            callback(result());
        });
    }
}

impl Default for Api {
    fn default() -> Self {
        Self::new()
    }
}
