class SimpleLoop {

  static isObject(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
  }
 static boucle(element, array = [], defaulTemplate,placeholder) {



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



if (SimpleLoop.isObject(data)) {
  return Object.byString(data, match.split(/{{|}}/).filter(Boolean)[0].trim())
}else {

  return data
}

    })
   }



if (parent.hasChildNodes()) {

let children = parent.children;
const childrenLength = parent.children.length;

if (defaulTemplate) {
  parent.innerHTML = ""
}else if (placeholder) {
    parent.innerHTML = ""
}
const node = children[0]


for(var i=0; i < array.length; i++) {
var cln =  null;

if (!defaulTemplate) {
cln =  node.cloneNode(true);
}else {
  cln = defaulTemplate;
}
const innerHTML = defaulTemplate?defaulTemplate:cln.innerHTML
const result = render(innerHTML,array[i]);

let cv = new DOMParser().parseFromString(result, 'text/html');
let doc = cv.body.firstChild;

  parent.append(doc);

}



if (array.length == 0 && placeholder) {

  for (var i = 0; i < childrenLength; i++) {


    let cv = new DOMParser().parseFromString(placeholder, 'text/html');
    let doc = cv.body.firstChild;

      parent.append(doc);
  }
}
if (children[0] && !defaulTemplate && !placeholder) {
  parent.removeChild(children[0]);
}

}


 }

}
