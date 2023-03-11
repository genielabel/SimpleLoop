class SimpleLoop {


 static boucle(element, array = [], defaulTemplate) {
   const parent = document.getElementById(element);
   Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}
   var render = (template, data) => {
    return template.replace(/{{(.*?)}}/g, (match) => {

      return Object.byString(data, match.split(/{{|}}/).filter(Boolean)[0].trim())
    })
   }



if (parent.hasChildNodes()) {

let children = parent.children;
const node = children[0]


for(var i=0; i < array.length; i++) {
var cln = node.cloneNode(true);
const innerHTML = defaulTemplate?defaulTemplate:cln.innerHTML
const result = render(innerHTML,array[i]);

let cv = new DOMParser().parseFromString(result, 'text/html');
let doc = cv.body.firstChild;

  parent.append(doc);

}


  parent.removeChild(children[0]);
}


 }

}
