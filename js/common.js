//スマホスライドメニュー
$(function () {
  $("header .sp_nav").on("click", function () {
    $('header .snav').slideToggle();
  });
});
//ページトップナビ
$(function () {
  //ページトップへのスクロール
  $('.pagetop').click(function () {
    //id名#pagetopがクリックされたら、以下の処理を実行
    $("html,body").animate({
      scrollTop: 0
    }, "300");
  });
  //ページトップとフローティングメニューの出現
  $('.pagetop').hide();
  $('.contact_fixed').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.pagetop').fadeIn();
      $('.contact_fixed').fadeIn();
    } else {
      $('.pagetop').fadeOut();
      $('.contact_fixed').fadeOut();
    }
  });
});

//同一ページ内で＃リンクを入れる場合
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var margin = 134;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - margin;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

//お問合せ・見積フォームボタンを押した際のアンカーリンクと項目選択
$(function () {
  $('#cars .inner .row .col .btn a').click(function () {
    //ラジオボタンの選択をすべて解除
    $("#form .radio input[type=radio]").prop('checked', false);
    //フォームの位置までスクロール
    var h3pos = $('#form').offset().top;
    setTimeout(function () { //0.5秒送らせる
      $('html, body').animate({
        scrollTop: h3pos - 110
      });
    }, 500);
    //要素のクラス名でラジオボタンをチェック
    if ($(this).hasClass('res')) {
      $("#form .radio input[type=radio]#c1").prop("checked", true);
    } else if ($(this).hasClass('est')) {
      $("#form .radio input[type=radio]#c3").prop("checked", true);
    }
  });
});

//来店予約ボタンを押した際の制御
$(function () {
  $('.contact_btn .btn a:nth-of-type(2)').click(function () {
    //ラジオボタンの選択をすべて解除
    $("#form .radio input[type=radio]").prop('checked', false);
    //フォームの位置までスクロール
    var h3pos = $('#form').offset().top;
    setTimeout(function () { //0.5秒送らせる
      $('html, body').animate({
        scrollTop: h3pos - 110
      });
    }, 500);
    //指定のラジオボタンをチェック
    $("#form .radio input[type=radio]#c1").prop("checked", true);
  });
});

//スマホ時フローティングボタンを押した際のラジオボタンの制御
$(function () {
  $('.contact_fixed .inner .row .col:nth-of-type(1) a').click(function () {
    //ラジオボタンの選択をすべて解除
    $("#form .radio input[type=radio]").prop('checked', false);
    //フォームの位置までスクロール
    var h3pos = $('#form').offset().top;
    setTimeout(function () { //0.5秒送らせる
      $('html, body').animate({
        scrollTop: h3pos - 110
      });
    }, 500);
    //指定のラジオボタンをチェック
    $("#form .radio input[type=radio]#c1").prop("checked", true);
  });
});