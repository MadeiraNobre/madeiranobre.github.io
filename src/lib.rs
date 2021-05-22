mod utils;
mod router;
pub mod components;
pub mod models;

use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::Element;
use yew::App;

pub type GenericError = Box<dyn std::error::Error + Send + Sync>;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


fn get_main_element() -> Option<Element> {
    let window = web_sys::window()?;
    let document = window.document()?;
    document.get_element_by_id("app")
}

#[wasm_bindgen(start)]
pub fn run() {
    utils::set_panic_hook();
    let element = get_main_element();

    App::<router::App>::new()
        .mount(element.expect("Não pode instanciar o elemento principal."));
}


#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}
