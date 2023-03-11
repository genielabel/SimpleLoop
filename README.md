
# Simple Loop
Weighs only 1.3KB
If you don't want to use a template engine or a javascript framework and you just want to make a simple loop.



```javascript
SimpleLoop.boucle(#element, array)
```

####HTML code

```html
<!doctype html>
<html>
   <head>
      <title>Examples</title>
   </head>
   <body>
      <p>Rendering the list using the simple loop </p>

      <div id="loop" >
         <div>
            <h1>{{name}} </h1>
         </div>
      </div>

<script>
var array = [{name:"One"},{name:"Two"},{name:"Three"},{name:"Four"},{name:"Fiv"},{name:"six"}];

SimpleLoop.boucle("loop", array)

</script>

      </body>
      </html>
```
