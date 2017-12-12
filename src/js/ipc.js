import Mustache from "mustache";
import data from '../json/ipc.json';
import '../sass/ipc/index.scss';

let img1 = new Image();
let img2 = new Image();
let img3 = new Image();
let img4 = new Image();
let img5 = new Image();
let img6 = new Image();
let img7 = new Image();
let img8 = new Image();
let img9 = new Image();
let img10 = new Image();
let img11 = new Image();
let img12 = new Image();
let img13 = new Image();
let img14 = new Image();

img1.src = require('../img/view1-part1.1.png');
img2.src = require('../img/view1-part1.2.png');
img3.src = require('../img/view1-part1.3.png');
img4.src = require('../img/view1-part1.4.png');
img5.src = require('../img/view1-part1.5.png');
img6.src = require('../img/view1-part1.6.png');
img7.src = require('../img/view1-part1.7.png');
img8.src = require('../img/view1-part1.8.png');
img9.src = require('../img/view1-part1.9.png');
img10.src = require('../img/view6-part2.1.png');
img11.src = require('../img/view6-part2.2.png');
img12.src = require('../img/view6-part2.3.png');
img13.src = require('../img/view6-part2.4.png');
img14.src = require('../img/view9-part1.gif');

$(document).ready(function() {
    let $fullpage = $('#fullpage');
    let $operation = $('#operation');
    let view = Mustache.render($('#ipcView').html(), data);
    let operation = Mustache.render($('#ipcOperation').html(), {data: data.button});

    $fullpage.append(view);
    $operation.append(operation);

    // 全屏滚动插件初始化调用.
    $fullpage.fullpage({
        sectionsColor:['#2f2f2f', '', '', '', '', '', '', '#ffffff', '', '', ''],
        // continuousVertical: true,
        loopTop: true,
        loopBottom: true,
        recordHistory: false,
        resize: true,
        onLeave: (index, nextIndex, direction) => {
            let currentView = $('.view' + index);

            currentView.find('.text').removeClass('fadeInDown duration-1000');

            $('.view' + nextIndex).find('.text, .part').addClass('opacity-0');

            if (index === 1) {
                currentView.find('.part1').removeClass('fadeInRock1-1');
            }

            if (index === 2) {
                currentView.find('.part1').removeClass('fadeIn duration-800 delay-300');
                currentView.find('.part2-1').removeClass('fadeInRightLeft duration-2000 delay-1000');
                currentView.find('.part2-2').removeClass('fadeInRightLeft duration-2000 delay-1000');
            }

            if (index === 3) {
                currentView.find('.part1').removeClass('fadeInUp duration-800 delay-200');
            }

            if (index === 4) {
                currentView.find('.part1').removeClass('fadeInDown duration-1000 delay-300');
                currentView.find('.part2').removeClass('fadeInUp duration-1000 delay-300');
            }

            if (index === 5) {
                currentView.find('.part1').removeClass('fadeInRight duration-1000 delay-300');
                currentView.find('.part2').removeClass('fadeInLeft duration-1000 delay-300');
                currentView.find('.part3').removeClass('rock5-3');
            }

            if (index === 6) {
                currentView.find('.part1').removeClass('fadeInDown');
                currentView.find('.part2').removeClass('fadeInDownBanner');
                currentView.find('.part3').removeClass('fadeInDownBanner');
            }

            if (index === 7) {
                currentView.find('.part1').removeClass('fadeInRight duration-1000 delay-800');
            }

            if (index === 8) {
                currentView.find('.part1-1').removeClass('fadeInRight duration-1000 delay-500');
                currentView.find('.part1-2').removeClass('fadeInLeftCircle');
                currentView.find('.part1-3').removeClass('fadeInLeftCircle');
            }

            if (index === 9) {
                currentView.find('.part1').removeClass('fadeInLeft duration-1000 delay-800');
            }

            if (index === 10) {
                currentView.find('.part1').removeClass('fadeInDown duration-1000');
                currentView.find('.part2-1').removeClass('fadeInRight duration-600 delay-800');
                currentView.find('.part2-2').removeClass('fadeInLeft duration-600 delay-800');
                currentView.find('.part3').removeClass('fadeIn duration-800 delay-1200');
            }

            if (index === 11) {
                currentView.find('.part1').removeClass('fadeInRight duration-1000');
                currentView.find('.part2').removeClass('fadeInLeft duration-1000');
                currentView.find('.part3-1').removeClass('fadeInUp duration-800 delay-600');
                currentView.find('.part3-2').removeClass('fadeInDown duration-800 delay-600');
                currentView.find('.part3-3').removeClass('fadeInLeft duration-800 delay-600');
            }

            if (nextIndex === 1) {
                $operation.fadeOut();
            } else {
                $operation.fadeIn();
            }
        },
        afterLoad: (anchorLink, index) => {
            let currentView = $('.view' + index);

            currentView.find('.text').addClass('fadeInDown duration-1000');

            if (index === 1) {
                currentView.find('.part1').addClass('fadeInRock1-1');
            }

            if (index === 2) {
                currentView.find('.part1').addClass('fadeIn duration-800 delay-300');
                currentView.find('.part2-1').addClass('fadeInRightLeft duration-2000 delay-1000');
                currentView.find('.part2-2').addClass('fadeInRightLeft duration-2000 delay-1000');
            }

            if (index === 3) {
                currentView.find('.part1').addClass('fadeInUp duration-800 delay-200');
            }

            if (index === 4) {
                currentView.find('.part1').addClass('fadeInDown duration-1000 delay-300');
                currentView.find('.part2').addClass('fadeInUp duration-1000 delay-300');
            }

            if (index === 5) {
                currentView.find('.part1').addClass('fadeInRight duration-1000 delay-300');
                currentView.find('.part2').addClass('fadeInLeft duration-1000 delay-300');
                currentView.find('.part3').addClass('rock5-3');
            }

            if (index === 6) {
                currentView.find('.part1').addClass('fadeInDown');
                currentView.find('.part2').addClass('fadeInDownBanner');
                currentView.find('.part3').addClass('fadeInDownBanner');
            }

            if (index === 7) {
                currentView.find('.part1').addClass('fadeInRight duration-1000 delay-800');
            }

            if (index === 8) {
                currentView.find('.part1-1').addClass('fadeInRight duration-1000 delay-500');
                currentView.find('.part1-2').addClass('fadeInLeftCircle');
                currentView.find('.part1-3').addClass('fadeInLeftCircle');
            }

            if (index === 9) {
                currentView.find('.part1').addClass('fadeInLeft duration-1000 delay-800');
            }

            if (index === 10) {
                currentView.find('.part1').addClass('fadeInDown duration-1000');
                currentView.find('.part2-1').addClass('fadeInRight duration-600 delay-800');
                currentView.find('.part2-2').addClass('fadeInLeft duration-600 delay-800');
                currentView.find('.part3').addClass('fadeIn duration-800 delay-1200');
            }

            if (index === 11) {
                currentView.find('.part1').addClass('fadeInRight duration-1000');
                currentView.find('.part2').addClass('fadeInLeft duration-1000');
                currentView.find('.part3-1').addClass('fadeInUp duration-800 delay-600');
                currentView.find('.part3-2').addClass('fadeInDown duration-800 delay-600');
                currentView.find('.part3-3').addClass('fadeInLeft duration-800 delay-600');
            }
        },
        afterRender: () => {
            $('.view1').find('.part').addClass('opacity-0');
        },
    });

    // 购买按钮触碰事件.
    $('.purchase').on('touchstart', function() {
        $(this).addClass('purchase-active');
    }).on('touchend', function() {
        $(this).removeClass('purchase-active');
    });

    // 返回顶部按钮触碰事件.
    $('.back-to-top').on('click', function() {
        $.fn.fullpage.moveTo(1, 0);
    }).on('touchstart', function() {
        $(this).addClass('back-to-top-active');
    }).on('touchend', function() {
        $(this).removeClass('back-to-top-active');
    });
});