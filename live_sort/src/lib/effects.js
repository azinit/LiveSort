// https://css-tricks.com/moving-highlight/
// https://codepen.io/keithjgrant/pen/OgEdgN?editors=0100
// https://cssgradient.io/
// https://keithjgrant.com/posts/2017/07/transitioning-gradients/
// https://stackoverflow.com/questions/5322895/is-there-a-way-to-create-a-chrome-like-tab-using-css
// https://stackoverflow.com/questions/8742249/how-to-set-css3-transition-using-javascript

// file:///C:/Users/Martis/Desktop/MovingHighlight/MovingHighlight/index.html#

// function glare(elementSelector) {
//     let link = $(elementSelector);
//     link.mousemove(mousemove).mouseleave(mouseleave)
// }
//
// function mousemove(e) {
//     let link       = this;
//     let originalBG = link.css("background-color");
//     let lightColor = "rgba(255,255,255,0.75)";
//     let gradientSize = 100;
//
//     let x = e.pageX - link.offsetLeft;
//     let y = e.pageY - link.offsetTop;
//     let xy = x + " " + y;
//
//     let bgWebKit = `-webkit-gradient(radial, ${xy}, 0, ${xy}, 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), ${originalBG}`;
//     let bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${originalBG} ${gradientSize}px)`;
//
//     $(this).css({background: bgWebKit}).css({background: bgMoz});
//
//
// }
//
// function mouseleave(e) {
//     let originalBG = $(".nav a").css("background-color");
//     $(this).css({background: originalBG});
// }
//
// export {glare};