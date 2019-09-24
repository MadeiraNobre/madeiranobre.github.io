var iframe = null;

function iframeLoad(){
    iframe = document.getElementById('conteudoiframe');
    iframe.onclick = function(e) {
        e = e || window.event;
        var tgt = e.target? e.target: e.srcElement;
        setIframe(tgt.target, tgt.href)
    }
}


// modified from same-domain version at www.dyn-web.com/tutorials/iframes/height/
function setIframeHeightCO(ht) {
    iframe.style.visibility = 'hidden';
    // some IE versions need a bit added or scrollbar appears
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