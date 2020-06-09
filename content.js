console.log("Page loaded.");
var p=/[13][a-km-zA-HJ-NP-Z0-9]{26,33}/gi;
while (m = p.exec(document.body.innerText)) { 
    alert( 'Link: '+window.location.href+' Index: '+m.index+' Match: '+m ); 
    fetch('http://127.0.0.1:8888/record', {
      method: 'POST',
      body: JSON.stringify({
        link: window.location.href,
        index: m.index,
        address: m,
        content: btoa(unescape(encodeURIComponent(document.body.innerHTML))),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(console.log)
}
