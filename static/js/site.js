import init from '../wasm/madeiranobre_app.js'
init()

$(document).ready(function(){
    if(location.search){
       infrate("static/paginas/movel");
    }else{
        infrate("static/paginas/home");
    }

    registerEvent(".navClick");
});
