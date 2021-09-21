// // メイン部分
// let alertString;
// alertString = addString("Webcamp");

// // 作成した関数を呼び出す
// alert(alertString);

// // 与えられた引数をHelloと結合する関数
// function addString(strA) {
//   let addStr = "Hello " + strA;
//   return addStr;
// }


// // 入力ができるアラートの作成
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);


// じゃんけんの機能の作成
// // じゃんけんの手を入力してもらう
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

// // じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// // ユーザーの手とjavaScriptの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。')


// // 入力チェックも含めた処理
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)) {
//   alert('グー・チョキ・パーのいずれかを入力してください');
//   user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
// }

// // じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// // ユーザーの手とjavaScriptの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// // 結果を表示する
// if (user_hand != null) {
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// } else {
//   alert('またチャレンジしてね');
// }

// // 返すじゃんけんの手をランダムにする関数の作成
// function getJShand() {
//   let js_hand_num = Math.floor(Math.random() * 3);
//   let hand_name;

//   if (js_hand_num == 0) {
//     hand_name = "グー";
//   } else if (js_hand_num == 1) {
//     hand_name = "チョキ";
//   } else if (js_hand_num == 2) {
//     hand_name = "パー";
//   }

//   return hand_name;
// }

// // ユーザの手とJShandを比較する関数
// function winLose(user, js) {
//   let winLoseStr;

//   if (user == "グー") {
//     if (js == "グー") {
//       winLoseStr = "あいこ";
//     } else if (js == "チョキ") {
//       winLoseStr = "勝ち";
//     } else if (js == "パー") {
//       winLoseStr = "負け";
//     }
//   } else if (user == "チョキ") {
//     if (js == "グー") {
//       winLoseStr = "負け";
//     } else if (js == "チョキ") {
//       winLoseStr = "あいこ";
//     } else if (js == "グー") {
//       winLoseStr = "勝ち";
//     }
//   } else if (user == "パー") {
//     if (js == "グー") {
//       winLoseStr = "勝ち";
//     } else if (js == "チョキ") {
//       winLoseStr = "負け";
//     } else if (js == "パー") {
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }




// じゃんけん機能復習

// ユーザーの手の選択
let user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください。');

// じゃんけんの手がグー・チョキ・パー・空白（キャンセル）以外の場合、promptにリダイレクトし続ける処理
// whileは条件がtrueの間、処理を続行するメソッド
while((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー') && (user_hand != null)){
  alert('じゃんけんの手はグー・チョキ・パーから選んでください');
  user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください。');
}

// 正しく入力された場合の処理とキャンセルされた場合の処理
if (user_hand != null){
  let js_hand = getJShand();
  let judge = winLose(user_hand, js_hand);
  alert('あなたの選んだ手は' + user_hand + 'です。\njavascriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert('またチャレンジしてね！');
}

// javascript側のじゃんけんの手をランダムで選択する処理
function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;

  if (js_hand_num == 0){
    hand_name = 'グー';
  }else if(js_hand_num == 1){
    hand_name = 'チョキ';
  }else if(js_hand_num == 2){
    hand_name = 'パー'
  }
  return hand_name;
}

// じゃんけんの手を比較し勝敗を決定する処理
function winLose(user, js){
  let winLoseStr;
  if(user == 'グー'){
    if(js == 'グー'){
      winLoseStr = 'あいこ';
    }else if(js == 'チョキ'){
      winLoseStr = '勝ち';
    }else if(js == 'パー'){
      winLoseStr = '負け';
    }
  }else if(user == 'チョキ'){
    if (js == 'グー'){
      winLoseStr = '負け';
    }else if(js == 'チョキ'){
      winLoseStr = 'あいこ';
    }else if(js == 'パー'){
      winLoseStr = '勝ち';
    }
  }else if(user == 'パー'){
    if (js == 'グー'){
      winLoseStr = '勝ち';
    }else if(js == 'チョキ'){
      winLoseStr = '負け';
    }else if(js == 'パー'){
      winLoseStr = 'あいこ';
    }
  }
  return winLoseStr;
}