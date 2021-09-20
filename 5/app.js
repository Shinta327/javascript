// // divを青くする記述
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });


// // 上から下へのスライド
// $(function(){
//   $('.box1').slideDown({
//   });
// });


// // 下から上へスライドさせる
// $(function(){
//   $('.box1').slideUp();
// });


// // 表示非表示の選択
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });


// // 表示されている内容の非表示化
// $(function(){
//   $('.box1').hide();
// });


// 要素を上から下へスライドさせた後、赤色の正方形を青色の長方形に変更し、下から上へスライド
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'height':'100px',
      'width':'200px'
    }).slideUp();
  });
});
