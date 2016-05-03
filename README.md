# Inline.js
### Description
Inline.js is a simple yet powerful jquery plugin that makes controlling content on the fly a breeze. Inline aims to make editing website content as simple as possible. It implements nicely into a CMS so an administrator or client can easily edit the text of a website.
### Version
1.0
###### Future updates:  
- Add ability to change elements color on the fly
- Add bower and composer installation.
- Add demo page.


### Getting Started

Setup for the plugin is simple, but first it does require [Jquery](https://jquery.com/download/).

Then, include the inline.js file and the method call near the bottom of he body.
When calling the inline method, *class_key* defines a unique class that is used to target your elements that you want to be editable.
```
<script src="inline/js/inline.js"></script>
<script>
$(document).inline({
    class_key : 'edit'
});
</script>
```
The unique class must be the same for every element that you want to edit and the *id* must include the elements tag seperated by two *underscores*. The recommended naming convetion is to use to the outer most wrapper as a section definer followed by the elements tag followed by the number of which that element appears in your section.
```
<div id="aboutOuterOne" class="container-fluid largeContainer">
        <div id="aboutInner" class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2 id="aboutOuterOne_h2_1" class="edit">First h2 test!</h2>
                    <p id="aboutOuterOne_p_1" class="edit">First p test!</p>
                    <h2 id="aboutOuterOne_h2_2" class="edit">Second h2 test!</h2>
                </div>
            </div>
        </div>
```



### Settings

If you're updating your elements information to a database then you can easily tell Inline where to send the POST request. Inline.js allows for ajax calls that are defined by the *url* parameter. This is particularly helpful when using Inline in part of a CMS so an admin can edit website text on the fly.
```
$(document).inline({
    class_key : 'edit',
    url       : 'url_to_your_post_controller'
});
```




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>


