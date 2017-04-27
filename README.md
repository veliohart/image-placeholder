# image-placeholder <br>
is a simple directive for angularjs, that give's you possibility to replace image that was loaded with error like "404".

# How to: 
install with bower: <br>
bower install image-placeholder <br>

bower install image placeholder --save (to save it) <br>

<ul>
  <li> 
    declare "image-placeholder" as dependancy of your angularjs app: <br> 
    <pre>angular.module('myApp', ['img.placeholder'])</pre>
  </li>
  <li>
    configure placeholders collection and set default item:
    <pre>
      angular.module('myApp')
      .config(['$placeholdersProvider', function($placeholdersProvider) {
        //configure placeholders object:
        $placeholdersProvider.placeholders({
          '150x150': 'data:image/png;base64,',
          '200x200': 'data:image/png;base64,'
        });
        //set default placeholder:
        $placeholdersProvider.default('200x200');
      }]);
    </pre>  
  </li>
  <div>
    important! <br>
    value of placeholder fields must be a "base64" string of image. <br>
    <br>
    You can use: 
      <a href="http://zhongdeliu.github.io/placeholder-image/">http://zhongdeliu.github.io/placeholder-image/</a> 
      - to generate placeholder <br>
      or <br>
      <a href="https://jpillora.com/base64-encoder/">https://jpillora.com/base64-encoder/</a> - to transform your image
  </div>
  <li>
    and use it: 
    <br>
    img-holder="'150x150'"
    <br>
    or <br>
    img-holder
  </li>
</ul>

<a href="https://plnkr.co/edit/yjctQDq7pJexMhePcSXW?p=preview">example</a>
