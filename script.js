// タイマーの要素を取得
const timer = document.querySelector(".timer");
const hours = timer.querySelector(".hours");
const minutes = timer.querySelector(".minutes");
const seconds = timer.querySelector(".seconds");

// フォームの要素を取得
const form = document.querySelector(".form");
const input = document.querySelector("#time");
const select = document.querySelector("#sound");

let remainingTime;
let sound;

// カウントダウン関数を作成
function countdown() {
  // 分、秒、ミリ秒を計算
  const minutesLeft = Math.floor(remainingTime / 60);
  const secondsLeft = remainingTime % 60;
  const millisecondsLeft = remainingTime % 1000;

  // 分、秒、ミリ秒を表示
  hours.textContent = ("00" + Math.floor(minutesLeft / 60)).slice(-2);
  minutes.textContent = ("00" + (minutesLeft % 60)).slice(-2);
  seconds.textContent = ("00" + secondsLeft).slice(-2);

  // タイマーを更新
  remainingTime -= 10;

  // カウントダウンが終了したらサウンドを再生し、タイマーを停止
  if (remainingTime < 0) {
    clearInterval(intervalId);
    if (sound) {
      const audio = new Audio(sound);
      audio.play();
    }
  }
}

// フォームを送信したときにカウントダウンを開始
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // 入力された時間を取得
  const time = input.value;

  // 選択されたサウンドを取得
  sound = select.value;

  // 残り時間を設定
  remainingTime = time * 1000;

  // カウントダウンを開始
  const intervalId = setInterval(countdown, 10);
});
