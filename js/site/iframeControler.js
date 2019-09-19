
// modified from same-domain version at www.dyn-web.com/tutorials/iframes/height/
function setIframeHeightCO(id, ht) {
    var ifrm = document.getElementById(id);
    ifrm.style.visibility = 'hidden';
    // some IE versions need a bit added or scrollbar appears
    ifrm.style.height = ht + "px";
    ifrm.style.visibility = 'visible';
}

// iframed document sends its height using postMessage
function handleDocHeightMsg(e) {
    // check origin
    // parse data
    var data = JSON.parse( e.data );
    // check data object
    if ( data['docHeight'] ) {
        setIframeHeightCO( 'conteudoiframe', data['docHeight'] );
    } else if ( data['href'] ) { 
        setIframe('ifrm', data['href'] );
    }
}

// assign message handler
if ( window.addEventListener ) {
    window.addEventListener('message', handleDocHeightMsg, false);
} else if ( window.attachEvent ) { // ie8
    window.attachEvent('onmessage', handleDocHeightMsg);
}