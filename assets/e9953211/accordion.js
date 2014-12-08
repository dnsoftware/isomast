/*
 * jQuery UI Multilevel Accordion v.1
 * Copyright (c) 2011 Pieter Pareit
 * http://www.scriptbreaker.com
 *
 */

//plugin definition
(function($){
    $.fn.extend({

        //pass the options variable to the function
        accordion: function(options) {

            var defaults = {
                accordion: 'true',
                speed: 300,
                closedSign: '[+]',
                openedSign: '[-]'
            };

            // Extend our default options with those provided.
            var opts = $.extend(defaults, options);
            //Assign current element to variable, in this case is UL element
            var $this = $(this);

            //add a mark [+] to a multilevel menu
            $this.find("li").each(function() {
                if($(this).find("ul").size() != 0){
                    //add the multilevel sign next to the link
                    $(this).find("a:first").append("<span>"+ opts.closedSign +"</span>");

                    //avoid jumping to the top of the page when the href is an #
                    if($(this).find("a:first").attr('href') == "#"){
                        $(this).find("a:first").click(function(){return false;});
                    }
                }
            });

            //open active level
            $this.find("li.active").each(function() {
                $(this).parents("ul").slideDown(opts.speed);
                $(this).parents("ul").parent("li").find("span:first").html(opts.openedSign);
            });


        }
    });
})(jQuery);