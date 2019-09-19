// Get height of document
function getDocHeight(doc) {
    doc = doc || document;
    // from http://stackoverflow.com/questions/1145850/get-height-of-entire-document-with-javascript
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

// send docHeight onload
function sendDocHeightMsg(e) {
    var ht = getDocHeight();
    parent.postMessage( JSON.stringify( {'docHeight': ht} ), '*' );
}

// assign onload handler 
if ( window.addEventListener ) {
    window.addEventListener('load', sendDocHeightMsg, false);
} else if ( window.attachEvent ) { // ie8
    window.attachEvent('onload', sendDocHeightMsg);
}