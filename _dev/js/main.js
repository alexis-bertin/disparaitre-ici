//IMPORT CSS WEBPACK
import '../css/main.scss';

// IMPORT JQUERY
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

// IMPORT OTHER PACKAGES
import lazyframe from "lazyframe";
import Swiper from 'swiper';
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

    //SMOOTH SCROLLING
    jQuery(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
        }, 800);
    });

    if(jQuery('body').is('#booklet')){
        //SLIDERS CARDS
        const swiper = new Swiper('.swiper-contain-slide', {
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        const swiper2 = new Swiper(".scroll-swiper", {
            spaceBetween: 20,
            slidesPerView: 1,
            scrollbar: {
                el: ".swiper-scrollbar",
                dragSize: '50',
                draggable: true
            },
        });
        jQuery('.show-cards').on('click', function(){
            jQuery(this).parent().parent().addClass('hidden').siblings().addClass('visible');
        })
        jQuery('.show-card').on('click', function(){
            jQuery(this).parent().addClass('hidden').siblings().addClass('visible');
        })

        //AUDIO PLAYERS
        jQuery('.player-container').bind('click touchstart mousedown', function(){
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
        //AUDIO #5
        let src5 = jQuery('#sound5').attr('src');
        let player5 = new CircleAudioPlayer({
            audio: src5
        });
        player5.appendTo(playerContainer5);
        //AUDIO #6
        let src6 = jQuery('#sound6').attr('src');
        let player6 = new CircleAudioPlayer({
            audio: src6
        });
        player6.appendTo(playerContainer6);
        //AUDIO #7
        let src7 = jQuery('#sound7').attr('src');
        let player7 = new CircleAudioPlayer({
            audio: src7
        });
        player7.appendTo(playerContainer7);
        //AUDIO #8
        let src8 = jQuery('#sound8').attr('src');
        let player8 = new CircleAudioPlayer({
            audio: src8
        });
        player8.appendTo(playerContainer8);
        //AUDIO #9
        let src9 = jQuery('#sound9').attr('src');
        let player9 = new CircleAudioPlayer({
            audio: src9
        });
        player9.appendTo(playerContainer9);
        //AUDIO #10
        let src10 = jQuery('#sound10').attr('src');
        let player10 = new CircleAudioPlayer({
            audio: src10
        });
        player10.appendTo(playerContainer10);
        //AUDIO #11
        let src11 = jQuery('#sound11').attr('src');
        let player11 = new CircleAudioPlayer({
            audio: src11
        });
        player11.appendTo(playerContainer11);
        //AUDIO #12
        let src12 = jQuery('#sound12').attr('src');
        let player12 = new CircleAudioPlayer({
            audio: src12
        });
        player12.appendTo(playerContainer12);
        //AUDIO #13
        let src13 = jQuery('#sound13').attr('src');
        let player13 = new CircleAudioPlayer({
            audio: src13
        });
        player13.appendTo(playerContainer13);
        //AUDIO #14
        let src14 = jQuery('#sound14').attr('src');
        let player14 = new CircleAudioPlayer({
            audio: src14
        });
        player14.appendTo(playerContainer14);
        //AUDIO #15
        let src15 = jQuery('#sound15').attr('src');
        let player15 = new CircleAudioPlayer({
            audio: src15
        });
        player15.appendTo(playerContainer15);
        //AUDIO #16
        let src16 = jQuery('#sound16').attr('src');
        let player16 = new CircleAudioPlayer({
            audio: src16
        });
        player16.appendTo(playerContainer16);
        //AUDIO #17
        let src17 = jQuery('#sound17').attr('src');
        let player17 = new CircleAudioPlayer({
            audio: src17
        });
        player17.appendTo(playerContainer17);
    }
})