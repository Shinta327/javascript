// $(function(){
//   $('#back a').on('click', function(event){
//     $('body, html').animate({
//       scrollTop:0
//     }, 800);
//     event.preventDefault();
//   });
// });


// 復習
// back a でbackIDの子要素であるaタグを指定している
// clickでクリック時にイベント発火を指定、範囲をbody,htmlつまりページ全体を指定している
// animateでスクロール位置とスピードを指定する
// event.preventDefaultはaタグを押すとページトップに戻るというHTMLの設定を無効化している
$(function(){
  $('#back a').on('click', function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});