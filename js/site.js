$(document).ready(function(){
    if(location.search){
       infrate("paginas/movel");
    }else{
        infrate("paginas/home");
    }

    registerEvent(".navClick");
});