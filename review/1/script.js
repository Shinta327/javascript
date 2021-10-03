$(function (){
  // JQueryの挙動
  $('.box1').slideDown(function (){   // slidedownの第２引数にfunctionを渡すと演出完了後に実行される。今回はfunction内にcssメソッドとslideUpメソッドを記述しているため、CSS変更とslideUpがslideDown後に同時に実行される。
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});