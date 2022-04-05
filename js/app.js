$(document).foundation()
$(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;
   $("#progressbar").attr('value', position);
});

$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
  
});

// Define an array of colors
const colors = ['#2A2CAC','#F7AC05','#FF0057'];
// Select the SVG paths
var blobs = document.querySelectorAll("path");

// Randomly apply colors to the SVG fill property
blobs.forEach(blob => {
  blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});

const el = document.querySelector('svg')
let count = 0
function callback() { 
  // dunno why the callback always seems to fire on load
  if (count === 1) {
    el.classList.add('onscreen') 
  }
  count++
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}
const observer = new IntersectionObserver(callback, options)
observer.observe(el)

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#top').fadeIn();
        }else{
            $('#top').fadeOut();
        }
    });
    $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});