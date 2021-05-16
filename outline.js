
  var jq162 = jQuery.noConflict(true);

  $(function(){
    $('.slider').slick({
      autoplay:true,
      autoplaySpeed:5000,
      dots:true,
    });
  });

  $(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      let speed = 400; // ミリ秒で記述
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });


  $(function(){
    $('#feed').load('RSSフィードを読み込んだphpファイルまでのパス');
  });
