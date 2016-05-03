/*
 -------------------------------------------
 Inline.js

 Setup:

    1. <script src="js/inline.js"></script>
    2. <script>
        $(document).inline({
            class_key : 'whatever class you want to use to call the plugin. Must be unique!',
            url : 'optional, but enter a url for the ajax request.
        });
 -------------------------------------------
 */

//Define Variables
var text;
var tagID;
var elementID;
var id;
var key;
var input;
var newElement;
var originalClass;
var url;


//Define jquery function
(function($)
{
    $.fn.inline = function(options){
        $(document).click(function(e){

        var settings = $.extend({
            class_key : 'edit',
            url       :  "",
            hasDB     :  false
        },options);
            var event = e.target;
            var inline = new Inline(
                event,
                settings.class_key,
                settings.url
            );
            inline.invoke();
        });
    }
}(jQuery));

 function Inline(element,identifier,url){
     this.element     =   element;
     this.class_key   =   identifier;
     this.url         =   url;
}

Inline.prototype.invoke = function(){
    this.toggleInputDisplay();
};

Inline.prototype.toggleInputDisplay = function() {

    if ($(this.element).hasClass(this.class_key)) {

        //Creates input element to allow editing of text.
        //Input's name attribute holds the class_key and the old elements id.
        input = $("<input>",
            {
                val     :   $(this.element).text(),
                type    :   "text",
                name    :   this.class_key + $(this.element).attr('id')
        });

        $(this.element).replaceWith(input);


        $(input).css({
            'width' : '100%',
            'height': '50px'
        });

        input.focus();

        originalClass   =   $(this.element).attr('class');
        tagID           =   this.fetchSubString(input,"_");
        elementID       =   this.fetchSubString(input,this.class_key);
        key             =   this.class_key;
        url             =   this.url;
        input.blur(function()
        {
            newElement = "<"+tagID+"" +
                " id= '"+elementID+"'" +
                "class='"+originalClass+"'>"+$(this).val()+"</"+tagID+">";

            if($(this).val() !=""){
                
                if(url){
                    //input to database
                    $.ajax({
                        url     :    url,
                        type    :   'POST',
                        data    :   {
                            'id'         :  elementID,
                            'elementText':  $(this).val(),
                            '_token'     :  $('input[name=_token]').val()
                        },
                        success :   function(){
                            console.log("success!");
                        }

                    });
                }
                //replace DOM element
                $(this).replaceWith(newElement);

            }
            //keep input open and add placeholder inside focused input
            $(this).attr("placeholder","Enter some text");
        });
    }
};

//Parses the input's name attribute and returns either the original tagid or the original element id.
Inline.prototype.fetchSubString = function(element,identifier){

    var first   =   element.attr("name").indexOf(identifier)+1;
    var last    =   element.attr("name").lastIndexOf(identifier);
    if(identifier.includes(this.class_key)){
        return element.attr("name").substr(this.class_key.length);
    }

    return element.attr("name").substring(first,last);
};
