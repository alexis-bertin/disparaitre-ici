//IMPORT CSS WEBPACK
import '../css/main.scss';

// IMPORT JQUERY
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

// IMPORT OTHER PACKAGES
import lazyframe from "lazyframe";
import { CircleAudioPlayer } from '../js/audio-player';

//LET'S SCRIPT, OH YEAH !
jQuery( document ).ready(function() {

    //LAZYLOAD IFRAME
    let elements = jQuery(".lazyframe");
    lazyframe(elements, {
        debounce: 250,
        lazyload: true,
        autoplay: true
    });

    //AUDIO PLAYERS
    jQuery('.player-container').on('click', function(){
        if(jQuery(this).children().hasClass('is-playing')){
            jQuery(this).addClass('active');
        } else{
            jQuery(this).removeClass('active');
        }
    })
    //AUDIO #1
    let src1 = jQuery('#sound1').attr('src');
    let player1 = new CircleAudioPlayer({
        audio: src1,
        size: 120,
        borderWidth: 8
    });
    player1.appendTo(playerContainer1);
    //AUDIO #2
    let src2 = jQuery('#sound2').attr('src');
    let player2 = new CircleAudioPlayer({
        audio: src2,
        size: 120,
        borderWidth: 8
    });
    player2.appendTo(playerContainer2);


})