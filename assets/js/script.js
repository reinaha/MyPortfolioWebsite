//menu//

let hamburger = document.querySelector('.fa-bars');
let nav =  document.querySelector('.nav-list');
        
hamburger.addEventListener('click', function(e){
  e.preventDefault();
  nav.classList.toggle('transition');
});




$(function(){

    //sticky menu
    var menuOffset = $('.navWrapper').offset();
    console.log(menuOffset);

    $(document).on('scroll',function(){
        var iScrollTop = $(document).scrollTop();
        
        if(iScrollTop > menuOffset.top){

            $('.navWrapper').addClass('fixed');

        }else{

            $('.navWrapper').removeClass('fixed');
        }
    });


    //menu highlight
    var offset1 = $('.section1').offset().top;
    var offset2 = $('.section2').offset().top;
    var offset3 = $('.section3').offset().top;
    var offset4 = $('.section4').offset().top;
    // var offset5 = $('.section5').offset().top;

    $(document).on('scroll',function(){

        var iScrollTop = $(document).scrollTop();

        var activeLi;

        if((iScrollTop>=offset1) && (iScrollTop<offset2)){
            activeLi = $('.nav-list>li:nth-child(1)');
           $('.fa-bars').css('color','#2E308A');
           $('.snsWrapper>a').css('color','#2E308A');           
        }

        if((iScrollTop>=offset2) && (iScrollTop<offset3)){
            activeLi = $('.nav-list>li:nth-child(2)');
            $('.fa-bars').css('color','#FEDD00');
            $('.snsWrapper>a').css('color','#FEDD00');
        }

        if((iScrollTop>=offset3) && (iScrollTop<offset4)){
            activeLi = $('.nav-list>li:nth-child(3)');
        }

        if(iScrollTop>=offset4){
            activeLi = $('.nav-list>li:nth-child(4)');
        }

        activeLi.addClass('active');
        $('.nav-list>li').not(activeLi).removeClass('active');

    });
    
    //smoth scrolling
    $('a[data-to]').on('click',function(e){

        // e.preventDefault(); // just in case link works

        var sTarget = $(this).data('to'); //.section1 etc
        var offsetTop = $(sTarget).offset().top + 2;

        $('html,body').animate({scrollTop:offsetTop},1000);

    });

    //Parallax scrolling

    $(document).on('scroll',function(){


        var iScrollTop = $(document).scrollTop();

        //distance&space between section 2 and view port
        var iSpace = offset2 - iScrollTop;

        //jquery for loop
        $('[data-speed]').each(function(i,el){

            var iSpeed = $(el).data('speed');

            $(el).css('transform', 'translateY('+ iSpeed*iSpace+ 'px)');    

        });

        $('[data-speed-horizontal]').each(function(i,el){

            var iSpeed = $(el).data('speed-horizontal');
            $(el).css('transform', 'translateX('+ iSpeed*iSpace+ 'px)');

        });

    });

});



// Text Animated

(function() {
  var app;

  $(document).ready(function() {
    return app.init();
  });

  app = {
    text: "Hello stranger. I am Reina.",
    index: 0,
    chars: 0,
    speed: 100,
    container: ".text .content",
    init: function() {
      this.chars = this.text.length;
      return this.write();
    },
    write: function() {
      $(this.container).append(this.text[this.index]);
      if (this.index < this.chars) {
        this.index++;
        return window.setTimeout(function() {
          return app.write();
        }, this.speed);
      }
    }
  };

}).call(this);


//chart

$(function() {
  $('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 10,
    lineCap: 'round',
    barColor: '#333',
    size: 150,
    animate: 500
  });
});