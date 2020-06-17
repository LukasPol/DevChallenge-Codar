const target = $('.animate-left, .animate-right'),
  animationClass = 'animate-start',
  offset = $(window).height() * 3 / 4 + 50;


function animeScrool() {
  let documentTop = $(document).scrollTop();

  target.each(function () {
    let itemTop = $(this).offset().top;

    if (documentTop > itemTop - offset) {
      $(this).addClass(animationClass);
    } else {
      $(this).removeClass(animationClass);
    }
  })
}

$(document).ready(function () {
  animeScrool()
})

$(document).scroll(function () {
  animeScrool()
});