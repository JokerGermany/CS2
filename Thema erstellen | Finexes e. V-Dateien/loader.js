/*!
* License https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode
* Copyright 2017 Lukas Wieditz
*/

/*jslint browser: true, nomen: true*/
/*global jQuery, XF, console */

(function ($, window, document, _undefined) {
    "use strict";

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                // element added to DOM
                var hasClass = [].some.call(mutation.addedNodes, function(el) {
                    return el.classList.contains('globalAction')
                });
                if (hasClass) {
                    var temp = $('.globalAction-temp'),
                        html = temp.html();
                    temp.remove();
                    $('.globalAction').html(html);
                }
            }
        });
    });

    var config = {
        attributes: true,
        childList: true,
        characterData: true
    };

    observer.observe(document.body, config);
}(jQuery, window, document));