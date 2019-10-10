let iframe = null;

$(document).ready(function(){
    $.cookie("largura", document.documentElement.clientWidth);
    
    iframe = document.getElementById('conteudoiframe');
    
    setIframe($.cookie("local"));

});

function iframeLoad(){
    
    iframe.onclick = function(e) {
        e = e || window.event;
        let tgt = e.target? e.target: e.srcElement;
        setIframe(tgt.target, tgt.href);
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


function refazerSize(){
    if(document.documentElement.clientWidth != $.cookie("largura")){
        document.location.reload();
    }
}

window.addEventListener("resize", refazerSize);

// called onclick of links that target iframe
function setIframe(href) {
    $.cookie("local", href);
    iframe.style.height = '10px'; // reset to minimal height in case going from longer to shorter doc
    iframe.src = href; 
}

// assign message handler
if ( window.addEventListener ) {
    window.addEventListener('message', handleDocHeightMsg, false);
} else if ( window.attachEvent ) { // ie8
    window.attachEvent('onmessage', handleDocHeightMsg);
}