"use strict";

// document.querySelector('#message').textContent; //顯示訊息
// document.querySelector('#guess').value;//抓猜的數字
// document.querySelector('.score').textContent=5; //抓分數
// document.querySelector('.highscore').textContent=5; //抓分數

//set screatnumber
let scretnumber = Number(Math.trunc(Math.random() * 20));


let score = 20;
let highscore = 0;

//Listener：判斷btn check有沒有按
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector("#guess").value);

  //判斷guess有沒有輸入、範圍在1～100
  if (!guess || guess < 1 || guess > 100) {
    alert("你並未輸入正確範圍的數字！");
    // document.getElementByIdx(".btn again").disabled = true;

  } else {



    if (score >= 1) score--; //正確遊玩，玩一次扣一分
    document.querySelector(".score").textContent = score;

    if (score <= 0) {
      alert("Game Over！");
      document.querySelector("#message").textContent = "Game Over！";
      document.querySelector('.check').disabled = true;

    }

    //判斷輸贏
    //猜的數字比較小
    if (guess < scretnumber) {
      document.querySelector("#message").textContent = "你輸入的數字過小！";

      //猜的數字比較大
    } else if (guess > scretnumber) {
      document.querySelector("#message").textContent = "你輸入的數字過大！";
      //猜對了





    } else if (guess == scretnumber) {
      document.querySelector(
        "#message"
      ).textContent = `正確答案！沒錯是${guess}！`;

      //更改頁面
      document.querySelector("body").style.backgroundImage = "none";


      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener('click', function () {

  scretnumber = Number(Math.trunc(Math.random() * 20));
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('#message').textContent = "請猜猜看正確數字是多少";
  document.querySelector('.check').disabled = false;


  document.querySelector("body").style.backgroundImage = ("url('question-mark-1872665__340.webp')");


})
