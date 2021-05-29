//IMPORT CSS WEBPACK
import '../css/main.scss';

// IMPORT JQUERY
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

// IMPORT OTHER PACKAGES
import lazyframe from "lazyframe";

//LET'S SCRIPT, OH YEAH !
jQuery( document ).ready(function() {

    //LAZYLOAD IFRAME
    let elements = jQuery(".lazyframe");
    lazyframe(elements, {
        debounce: 250,
        lazyload: true,
        autoplay: true
    });

})