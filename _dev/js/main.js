//IMPORT CSS WEBPACK
import '../css/main.scss';

// IMPORT JQUERY
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

// IMPORT OTHER PACKAGES
import lazyframe from "lazyframe";
import { CircleAudioPlayer } from '../js/audio-player';
import Swiper from 'swiper';

//LET'S SCRIPT, OH YEAH !
jQuery( document ).ready(function() {

    //LAZYLOAD IFRAME
    let elements = jQuery(".lazyframe");
    lazyframe(elements, {
        debounce: 250,
        lazyload: true,
        autoplay: true
    });

    //SMOOTH SCROLLING
    jQuery(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
        }, 800);
    });

    //AUDIO PLAYERS
    jQuery('.player-container').bind('touchstart mousedown', function(){
        if(jQuery(this).children().hasClass('is-paused')){
            jQuery(this).addClass('active');
        } else{
            jQuery(this).removeClass('active');
        }
    })
    //AUDIO #1
    let src1 = jQuery('#sound1').attr('src');
    let player1 = new CircleAudioPlayer({
        audio: src1
    });
    player1.appendTo(playerContainer1);
    //AUDIO #2
    let src2 = jQuery('#sound2').attr('src');
    let player2 = new CircleAudioPlayer({
        audio: src2
    });
    player2.appendTo(playerContainer2);
    //AUDIO #3
    let src3 = jQuery('#sound3').attr('src');
    let player3 = new CircleAudioPlayer({
        audio: src3
    });
    player3.appendTo(playerContainer3);
    //AUDIO #4
    let src4 = jQuery('#sound4').attr('src');
    let player4 = new CircleAudioPlayer({
        audio: src4
    });
    player4.appendTo(playerContainer4);
    //AUDIO #4
    let src5 = jQuery('#sound5').attr('src');
    let player5 = new CircleAudioPlayer({
        audio: src5
    });
    player5.appendTo(playerContainer5);

    //SLIDERS CARDS
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    jQuery('.show-cards').on('click', function(){
        jQuery(this).parent().parent().addClass('hidden').siblings().addClass('visible');
    })

})