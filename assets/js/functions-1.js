 $(function(){
   profilesBubbleClick();
   setInterval(function(){eventsTada()}, 500);
   tvBGStuff();
   mobileNav()
   smoothScroll(300);
 });

(function ($){
  var $mobileNavToggleBtn = $('.mobile-nav-toggle');

  function onBtnClick (e) {
    var $this = $(this),
        $selectors = $('.mobile-nav-toggle, .mobile-nav');

    $this.toggleClass('.is-open');
    $selectors.toggleClass('is-open');

  }

  $(document).ready(function(){
    $mobileNavToggleBtn.on('click', onBtnClick)
  });

})(jQuery);

function mobileNav(){
  $('.mobile-nav-toogle').on('click', function(){
    var status = $(this).hasClas('is-open');
    if (status) { $('.mobile-nav-toggle, .mobile-nav').removeClass('.is-open');}
  }else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');}
  });
}


function smoothScroll (duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function tvBGStuff() {
  ///.ms-img-link
  $('.ms-img-link').hover(function(){
    $(this).parent().parent().css('background-color',$(this).data('color'));
  }, function(){
    $(this).parent().parent().css('background-color',$(this).parent().parent().data('orig-color'));

  });
}


 function eventsTada() {
   $('.events-thumb').addClass('is-emph');
 }

function profilesBubbleClick() {
  $('.face').on('click', function(){
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath = -1*(faceTop - 280),
        faceLeft = $this.position().left,
        horzMath = 0 - faceLeft;

    if($(window).width() > 640){
      $this.parent().css('top',+ vertMath+'px');
    }else {
      if($this.hasClass('back-btn')){
        profilesNarrowStart();
      }else{
        $this.parent().css('left',+ horzMath+'px');
      }
    }
    if(!$this.hasClass('back-btn')){
    $this.addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
    }
  });
}


$(window).scroll(function(){
  youtubeVidScrol();
  startProfiles();
  startEvents();
});

function youtubeVidScrol(){
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position','center -'+ wScroll +'px');
}

function startEvents(){
  var wScroll = $(window).scrollTop();

  if($('section.events').offset().top - $(window).height()/2 < wScroll){
    $('.events-thumb').addClass('is-visible');
  }
}

function startProfiles() {
  var wScroll = $(window).scrollTop();

  if($('section.profiles').offset().top - $(window).height()/2 < wScroll){
    if ($(window).width() > 640) {
    $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open') && $('.face').hasClass('back-btn')){
        setTimeout(function(){
          $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 400);
      }
    } else {
      profilesNarrowStart();
    }
  }
};



function profilesNarrowStart() {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
}


function profilesWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
}

$(window).resize(function(){
  if($(window).width() > 640){
    profilesWideStart();
  }else{
    profilesNarrowStart();
  }
});
