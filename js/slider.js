"use strict";
const boxes = document.querySelectorAll('.review-box-mobile');
const reviewList = document.querySelector('.review-list-mobile');
let scroll = document.querySelector('.scrollbar-slider');
let count = 0;
let width;
let x1, y1 = null;
let widthScroll;


function init(){
	// console.log('resize');
	width = document.querySelector('.slider').offsetWidth;
	widthScroll = document.querySelector('.scrollbar').offsetWidth;
	reviewList.style.width = width*boxes.length + 'px'; 
	// console.log(width);
	rollSlider()
}

window.addEventListener('resize', init);
init();

function handleTouchStart(event) {
	// console.log(event);
	const firstTouch = event.touches[0];

	x1 = firstTouch.clientX;
	y1 = firstTouch.clientY;
	// console.log(x1, y1);
}

function handleTouchEnd(event) {
	// console.log(event);
	let x2 = event.changedTouches[0].clientX;
	let y2 = event.changedTouches[0].clientY;
	let xDiff = x2 - x1;
	let btn_main=document.querySelector('.btn-animation');
	let btn_add=document.querySelector('.btn-floor');
	console.log('Эта хуйня равна:' + xDiff);
	if (Math.abs(xDiff) > 0.10*width) {
		if (xDiff < 0) {
			count++;
			if (count == 3) {
				setTimeout (function() {
          			btn_main.classList.add('click_main'); 
          			btn_add.classList.add('click_add'); 
          		},1000);
      		}
      		else {
          		btn_main.classList.remove('click_main'); 
          		btn_add.classList.remove('click_add'); 
      		}
			if (count >= boxes.length) {
				count = count-1;
			}
			rollSlider();
		}
		else {
			count--;
			if (count<0) {
			count = 0;
			}
			rollSlider();
		}
	}
	// console.log(x2, y2);
}
function rollSlider() {
	reviewList.style.transform = 'translate( -' + count * width + 'px)';
	scroll.style.transform = 'translate( +' + count * (widthScroll/4) + 'px)';
}

document.querySelector('.slider').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.slider').addEventListener('touchend', handleTouchEnd, false);