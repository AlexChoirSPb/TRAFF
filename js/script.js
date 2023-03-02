// When the user clicks on div, open the popup
function myFunction1() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}
function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}

function myFunction11() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}
function myFunction21() {
    var popup = document.getElementById("myPopup21");
    popup.classList.toggle("show");
}
function myFunction31() {
    var popup = document.getElementById("myPopup31");
    popup.classList.toggle("show");
}
function myFunctionElectro() {
    var butPr = document.querySelector(".print_ver");
    var butEl = document.querySelector(".electro_ver");
    var ordPr = document.querySelector(".print");
    var ordEl = document.querySelector(".electro");
    butPr.classList.remove("color_button");
    butEl.classList.add("color_button");
    butPr.classList.add("none_color_button");
    butEl.classList.remove("none_color_button");
    ordEl.classList.remove("hidden_mobile");
    ordPr.classList.add("hidden_mobile");
}
function myFunctionPrint() {
    var butPr = document.querySelector(".print_ver");
    var butEl = document.querySelector(".electro_ver");
    var ordPr = document.querySelector(".print");
    var ordEl = document.querySelector(".electro");
    butPr.classList.add("color_button");
    butEl.classList.remove("color_button");
    butPr.classList.remove("none_color_button");
    butEl.classList.add("none_color_button");
    ordEl.classList.add("hidden_mobile");
    ordPr.classList.remove("hidden_mobile");
}
function myFunctionForm() {
    var popup = document.getElementById("myPopupForm"),
    popupHead = document.getElementById("myPopupHead");
    popup.classList.toggle("show_form");
    popup.classList.toggle("hide_form");
    popupHead.classList.toggle("show_form");
    popupHead.classList.toggle("hide_form");
}

function myFunctionBurg() {
    var popup = document.getElementById("myPopupMenu");
    popup.classList.toggle("hide_form");
    popup.classList.toggle("show_form");
}


let quoteBG=document.querySelector('.quote-bg');
let quoteShadow=document.querySelector('.quote p');
let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            quoteBG.classList.add("bg-animation");
            setTimeout (function() {
                quoteShadow.classList.add("qoute-show");
            },1000);
        }
        // else {
        //     quoteBG.classList.remove("bg-animation");
        //   }
    })
}
let options= {
    threshold: 0.02
}
let observer = new IntersectionObserver(callback, options);
let target = document.querySelector('.quote');
observer.observe(target)


let  targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
},
windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
};  

// let sec=0;

// function scrollUp() {
//     // alert('Мы начинаем!');
//     let intervalID = setInterval(function(){
//         targetPosition.top = window.pageYOffset + target.getBoundingClientRect().top;
//         targetPosition.bottom = window.pageYOffset + target.getBoundingClientRect().bottom;
//         windowPosition.top = window.pageYOffset;
//         windowPosition.bottom = window.pageYOffset + document.documentElement.clientHeight;
//         // console.log(targetPosition.top);   
//         // console.log(targetPosition.bottom);     
//         // console.log(windowPosition.top);
//         // console.log(windowPosition.bottom); 
//         if ((windowPosition.bottom >= targetPosition.top)) {
//                 sec++;
//                 console.log(sec);
//         }
//         if (sec >= 50) {
//             observer.observe(target);
//             clearInterval(intervalID);
//             // alert('Не успел!');        
//             sec = 0;
//         }

//         if ((windowPosition.top >= targetPosition.bottom)) {
//             if (sec < 50) {
//                 // alert('Это хуйня больше ничего не считает ' + sec);
//                 clearInterval(intervalID);
//                 sec = 0;
//                 // alert('Начало новой проверки ' + sec);
//                 let intervalIDup = setInterval(function(){
//                     targetPosition.top = window.pageYOffset + target.getBoundingClientRect().top;
//                     targetPosition.bottom = window.pageYOffset + target.getBoundingClientRect().bottom;
//                     windowPosition.top = window.pageYOffset;
//                     windowPosition.bottom = window.pageYOffset + document.documentElement.clientHeight;
//                     if ((windowPosition.top <= targetPosition.bottom)) {
//                         sec++;
//                         console.log(sec);                    
//                     }


//                     if (sec >= 50) {
//                         observer.observe(target);
//                         clearInterval(intervalIDup);
//                         // alert('Не успел, но уже наверх!');        
//                         sec = 0;        
//                     }

//                     if ((windowPosition.bottom <= targetPosition.top)) {
//                        if (sec < 50) {
//                             clearInterval(intervalIDup);
//                             // alert('Не успел, но уже быстра!');
//                             scrollUp();        
//                             sec = 0;       
//                         }
//                     }
//                 }, 10);
//             }
//         //     sec = 0;
//         //     console.log(sec);

//             // clearInterval(intervalID);
//             // alert('Это хуйня больше ничего не считает ' + sec);
//         }

//         // if (sec==500) {
//         //     clearInterval(intervalID);
//         //     alert('Это хуйня больше ничего не считает ' + sec);
//         // }

//     }, 10);
// }

// scrollUp();


 // && (windowPosition.bottom >= (targetPosition.top - 10))
    // window.addEventListener('scroll', function() {
    //     let  targetPosition = {
    //       top: window.pageYOffset + target.getBoundingClientRect().top,
    //       bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    //     },

    //     windowPosition = {
    //       top: window.pageYOffset,
    //       bottom: window.pageYOffset + document.documentElement.clientHeight
    //     };
    //     let intevalId = 0;
    //     // console.log('ПАИХАЛИ');

    //     if ((windowPosition.bottom >= targetPosition.top) && (windowPosition.bottom >= (targetPosition.top - 100))) {
    //     let intevalId = setInterval(function() {
    //             sec++;
    //             console.log(sec);
    //     }, 1000);
    //     };
    //     if (windowPosition.top >= targetPosition.bottom) {
    //         clearInterval(intevalId);
    //         console.log('Итоговое время:' + sec);
    //     }

    // });

// let sec=0;          
// function tick() {
//     sec++;
//     console.log(sec);
// }
// let target = document.querySelector('.quote');

// let go_func = true;
// let Visible_stop = function() {
//     go_func = false;
// }
// let Visible = function(element) {
//     let vis_box = {
//         top: window.pageYOffset + element.getBoundingClientRect().top,
//         bottom: window.pageYOffset + element.getBoundingClientRect().bottom
//     };
//     let vis_win = {
//         top: window.pageYOffset,
//         bottom: window.pageYOffset + document.documentElement.clientHeight
//     };
//     if (go_func) {
//         if (vis_box.top < vis_win.bottom &&
//             vis_box.top > vis_win.top) {
//             console.log('отсчет пошел');
//             setInterval(tick, 1000);
//         }
//     }
//     else {
//     return
//     console.log('Итоговое время:' + sec);
//     }
// }

// let check_scroll=function(element) {
//     let vis_box = {
//         top: window.pageYOffset + target.getBoundingClientRect().top,
//         bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//     };
//     let vis_win = {
//         top: window.pageYOffset,
//         bottom: window.pageYOffset + document.documentElement.clientHeight
//     };
//     if (vis_box.top == vis_win.bottom) {
//         console.log('Погнали!');
//         setInterval(tick, 1000);
//     }
//     if 
//     if (vis_box.top == vis_win.top) {
//         console.log('Прекратили!');
        
// }   

// window.addEventListener('scroll', function () {
//     let vis_box = {
//         top: window.pageYOffset + target.getBoundingClientRect().top,
//         bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//     };
//     let vis_win = {
//         top: window.pageYOffset,
//         bottom: window.pageYOffset + document.documentElement.clientHeight
//     };
//     if 
// });








let printBook=document.querySelector('.print'),
    electroBook=document.querySelector('.electro');
    electroButton=document.querySelector('.electro_ver');
    printButton=document.querySelector('.print_ver');
    menu=document.querySelector('.menu');
    reviewCheck=document.querySelector('.review-check');

function order_chek() {
    const windowInnerWidth = window.innerWidth;
    console.log(windowInnerWidth);
    if (windowInnerWidth < 575) {

        reviewCheck.href='#review-mobile'
        printButton.classList.add('color_button');
        electroButton.classList.add('none_color_button');
        electroBook.classList.add('hidden_mobile');
        menu.classList.add('hide_form');
        document.getElementsByClassName('electro')[0].style.width = "80" + "vw";
        document.getElementsByClassName('print')[0].style.width = "80" + "vw";
        console.log('ПРоизошел ресайз!!!!')
        console.log(windowInnerWidth)

    }

    else {
        console.log(windowInnerWidth)

        printButton.classList.remove('color_button');
        electroButton.classList.remove('none_color_button');
        electroBook.classList.remove('hidden_mobile');
        menu.classList.remove('hide_form');
        document.getElementsByClassName('electro')[0].style.width = "46.53" + "vw";
        document.getElementsByClassName('print')[0].style.width = "46.53" + "vw";
    }
}

order_chek()
window.addEventListener('resize',order_chek);
