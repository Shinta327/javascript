// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
// });

// $(function(){
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
// });

// $(function(){
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
// });

// $(function(){
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });


// 上記のコードをthisを用いて記述
// this = クリックされた要素、ここではbox1のクラスを持つ4つのdivのうち、クリックされた要素のみスライドアップされる
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});


// children
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});