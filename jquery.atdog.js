/**
 * Created by artem ukolov on 19.07.2016.
 * addog library for jquery
 */

jQuery.atDog = function(attr, object) {
    if ($("#"+attr).length > 0)
    {
        for (var field in object)
        {
            var node = $("#"+attr).find("["+attr+"-"+field+"]");
            if (node.length > 0)
            {
                var input = object[field];
                var output = object[field];
                var binder = node.attr('binder');
                if (typeof binder !== typeof undefined && binder !== false) {
                    eval(binder);
                }
                node.html(output);
            }
        }
    }
    else
    {
        console.log("Error to bind");
    }

}