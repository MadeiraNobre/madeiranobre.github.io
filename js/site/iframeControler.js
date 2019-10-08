let iframe = null;

$(document).ready(function(){
    $.cookie("largura", document.documentElement.clientWidth);
    
    iframe = document.getElementById('conteudoiframe');
    //let iframelocal = getUrlParameter(window.location.href, "pagina");
    //if(iframelocal){
      //  setIframe(iframelocal);
    //}
});


/*
function setUrlParameter(url, key, value) {

    var baseUrl = url.split('?')[0],
        urlQueryString = '?' + url.split('?')[1],
        newParam = key + '=' + value,
        params = '?' + newParam;

    // If the "search" string exists, then build params from it
    if (urlQueryString) {
        var updateRegex = new RegExp('([\?&])' + key + '[^&]*');
        var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

        if (typeof value === 'undefined' || value === null || value === '') { // Remove param if value is empty
            params = urlQueryString.replace(removeRegex, "$1");
            params = params.replace(/[&;]$/, "");

        } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it
            params = urlQueryString.replace(updateRegex, "$1" + newParam);

        } else { // Otherwise, add it to end of query string
            params = urlQueryString + '&' + newParam;
        }
    }

    // no parameter was set so we don't need the question mark
    params = params === '?' ? '' : params;

    let newurl = baseUrl + params;

    if(window.location.href != newurl){
        window.location.href = newurl;
    }
}

function getUrlParameter(url, parameter) {
    parameter = parameter.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?|&]' + parameter.toLowerCase() + '=([^&#]*)');
    var results = regex.exec('?' + url.toLowerCase().split('?')[1]);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

*/







function iframeLoad(){
    
    iframe.onclick = function(e) {
        e = e || window.event;
        var tgt = e.target? e.target: e.srcElement;
        setIframe(tgt.target, tgt.href);
    }
}


// modified from same-domain version at www.dyn-web.com/tutorials/iframes/height/
function setIframeHeightCO(ht) {
    iframe.style.visibility = 'hidden';
    // some IE versions need a bit added or scrollbar appears
    //document.documentElement.style.setProperty('--tamanho-iframe', (ht + 'px'));
    iframe.style.height = ht + "px";
    iframe.style.visibility = 'visible';
}

// iframed document sends its height using postMessage
function handleDocHeightMsg(e) {
    // check origin
    // parse data
    var data = JSON.parse( e.data );
    // check data object
    if ( !data['href']) {
        setIframeHeightCO(data['docHeight'] );
    } else { 
        setIframe(data['href']);
    }
}


function refazerSize(){
    if(document.documentElement.clientWidth != $.cookie("largura")){
        document.location.reload();
    }
}

window.addEventListener("resize", refazerSize);

// called onclick of links that target iframe
function setIframe(href) {
    iframe.style.height = '10px'; // reset to minimal height in case going from longer to shorter doc
    iframe.src = href; 
    //window.frames[iframe].location.replace(href); // since back/forward doesn't trigger height adjustment 
}

// assign message handler
if ( window.addEventListener ) {
    window.addEventListener('message', handleDocHeightMsg, false);
} else if ( window.attachEvent ) { // ie8
    window.attachEvent('onmessage', handleDocHeightMsg);
}