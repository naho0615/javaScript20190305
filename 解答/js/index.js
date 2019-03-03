"use strict";

// 変数宣言
let total      = 0;    // 現在の合計値
let strKeepNum = "";   // 保持している数値
let operator   = "+";  // 保持している演算子
let isNum      = true; // １回前に入力したもの true:数字 false:演算子

/*
* 0~9、または小数点ボタンの押下後処理
*
* @param input 押下したボタンの値
*/
function clickNum(input){
    // 数値入力フラグをtrueにする
    isNum = true;

    // 入力した値をkeepNumに保持しておく
    strKeepNum += input;

    // 入力した値を画面に表示する
    document.getElementById("result").value = strKeepNum; 
}

/*
* 演算ボタン押下後処理
*
* @param myData 押下したボタンの値
*/
function clickCalc(input){
    // 1回前に入力したものが、数値の場合
    if (isNum) {
        // 演算ボタンを押したので、フラグをfalseに変更する
        isNum = false;

        // 式を作る（現在の合計値 + 保持しておいた演算子 + 保持しておいた値）
        const strFormula = total + operator + strKeepNum;

        // 計算式を実際に計算して変数に値を代入する
        total = eval(strFormula);

        // 現在入力している値をクリア
        strKeepNum = "";

        // 計算した結果を画面に表示
        document.getElementById("").value = total;
    }

    if (input == '=') {
        // 押下したボタンが「＝」の場合
        // 計算が終了したので、次の計算に備えて0にリセットしておく
        total = 0;
        // 演算子を＋に変更
        operator = "+";
    } else {
        // 押下したボタンが「＝」以外の場合
        // 押下したボタンをoperatorに保持しておく
        operator = input;
    }
}

/*
* クリアボタン押下後処理
*/
function clickClear(){
    total      = 0;
    operator   = "+";
    strKeepNum = "";
    document.getElementById("result").value = total;
}






