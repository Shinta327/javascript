// // varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)
// // 変数の再宣言が可能


// // letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)
// // 変数の再宣言が不可


// // constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)
// // 変数の再宣言が不可


// // varによる変数の再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// // 変数の再代入が可能


// // constによる変数の再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// // 変数の再代入が不可


// // letによる変数の再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// // 変数の再代入が可能


// // varのスコープ
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello"//変数スコープ
// }

// foo()
// console.log(y)
// // Uncaught ReferenceError: y is not definedが発生。yは関数内で定義された変数のため関数の外では使用できない


// // letのスコープ
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"//ブロックスコープ（ローカルスコープ）
//   }
//   console.log(x)
//   console.log(y)
// }
// foo()
// // エラーが発生（Uncaught ReferenceError: y is not defined）ブロック{}の外から変数を参照できない

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log(i)
// // エラー発生（Uncaught ReferenceError: i is not defined）変数iをブロックの外から参照できないため最後の行のconosle.log(i)はエラーとなる


// // 変数の巻き上げ
// var str = "webcamp"

// function foo() {
//   console.log(str)
//   var str = "dmmwebcamp"
//   console.log(str)
// }
// foo()
// // 関数外で変数を宣言していたとしても、関数内で同盟の変数を宣言している場合、冒頭で宣言をしたことになること。
// // この場合、関数内で宣言前にconsole.logを行っているが、関数内の冒頭で変数が宣言されたことになるため、undefindが格納される


// letとconstの使い分け
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// この処理でiをletで宣言する理由は再代入を可能とするため。constの場合、再代入ができずエラーとなる。