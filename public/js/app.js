$(document).ready(function(){
  portfolio.init();
});

var portfolio = (function(){
  /*
  * document offset
  *********************************************/
  var scrollStart = 0 ;
  var changingPoint = $('#what-ido').offset();
  var $navBar = $('.navbar');
  var $navBtns = $('a.section-scroll');
  var $typedElem = $('#typed');
  var $subAbout = $('#sub-about');

  var init = function(){
    navEffect();
    scrollTo();
    pageNavGuide();
    heroType();
    $(document).scroll(pageNavGuide);
  }

var heroType = function(){
  // $typedElem.typed({
  //   strings:["I am a web developer.","I design wondrous <br> landing pages.","I build <br> corporate websites.","I colaborate with <br> tech startups.","I like to do <br> weekened hacks.","I'm a tech savvy <br> and a couch potato.",""],
  //   typeSpeed:80,
  //   callback:function(){
  //     showSubAbout();
  //   }
  // })
  $typedElem.typeIt({
    speed:100,
    lifeLike:true,
    autoStart:true,
    html:true,
    startDelete:true,
    startDelay:2000,
    callback:function(){
      showSubAbout();
    }
  })
  .tiPause(500)
  .tiType('Hi, Im Pete.')
  .tiSettings({speed:100})
  .tiType('I\'am a <strong>web developer</strong>')
  .tiPause(500)
  .tiSettings({speed:50})
  .tiDelete(19)
  .tiSettings({speed:100})
  .tiType(' design <strong>wondrous</strong>')
  .tiBreak()
  .tiType('landing pages.')
  .tiPause(500)
  .tiDelete(14)
  .tiType('corporate websites')
  .tiPause(400)
  .tiSettings({speed:50})
  .tiDelete(35)
  .tiSettings({speed:100})
  .tiType(' colaborate with ')
  .tiBreak()
  .tiType('tech startups.')
  .tiPause(400)
  .tiSettings({speed:50})
  .tiDelete(31)
  .tiSettings({speed:100})
  .tiType('\'am a tech savvy')
  .tiBreak()
  .tiPause(600)
  .tiType('and a couchpotato.')
  .tiPause(400)
  .tiSettings({speed:50})
  .tiDelete(37)
}
 /*
 * navbar color transion effect
 *******************************************************************/
  var navEffect = function(){
    $(document).scroll(function(){
      scrollStart = $(this).scrollTop();
      if(scrollStart > changingPoint.top){
        $navBar.css('background-color','rgba(255,255,255,0.8)');
      }else{
        $navBar.css('background-color','transparent');
      }
    })
  }
  /*
  * navbar color transion end
  *******************************************************************/

  /*
  * scroll transion effect
  *******************************************************************/
  var scrollTo = function(){
    $navBtns.unbind().click(function(e){
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    })
  }
  /*
  * scroll transion end
  *******************************************************************/

  /*
  * nav border by section
  *******************************************************************/
  var pageNavGuide = function(){
    var scrollPos = $(document).scrollTop();
    var $navItems = $('.navbar ul li a');
    $('.navbar .section-scroll').each(function(){
      var $currAnchor = $(this);
      var $parent = $(this).parent();
      var refElement = $($currAnchor.attr('href'));
      if(refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $navItems.removeClass('active');
        $parent.addClass('active');
      }else{
        $parent.removeClass('active');
      }
    })
  }
  /*
  * nav border by section
  *******************************************************************/

  var showSubAbout = function(){
    $subAbout.css({
      'visibility': 'visible',
      'opacity': 1.0
    });
  }
  return { init:init }
}())
