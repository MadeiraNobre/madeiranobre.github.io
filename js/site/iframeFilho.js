var tamanho = 0;

// Get height of document
function getDocHeight(doc) {
    doc = doc || document;
    // from http://stackoverflow.com/questions/1145850/get-height-of-entire-document-with-javascript
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

// send docHeight onload
function sendDocHeightMsg(e) {
    var ht = getDocHeight();
    tamanho = getWidth();
    parent.postMessage( JSON.stringify( {'docHeight': ht} ), '*' );
}

function loader(){
    // assign onload handler 
    if ( window.addEventListener ) {
        window.addEventListener('load', sendDocHeightMsg, false);
    } else if ( window.attachEvent ) { // ie8
        window.attachEvent('onload', sendDocHeightMsg);
    }
}

loader();

function CarregarItemView(href, id){
    $.cookie("id_movel", id);
    sendSetIframeMsg(href);
}


// Send message to parent to load new document in iframe
function sendSetIframeMsg(href) {
    if ( parent !== self) { // in iframe?
        parent.postMessage( JSON.stringify( {'href': href} ), '*' );
        return false;
    }
    return true; // follow link
}