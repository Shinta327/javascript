// // マウスオーバーとマウスアウトでdivの色の変更
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color':'#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color':'#ff0000'});
//   });
// });


// // 事前にCSSでマウスオーバー時の設定を記述し、classの切り替えを行う
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// マウスクリックイベントの実装
$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext')
;  });
});