let time = document.querySelector(".status-bar__cloumn:nth-child(2) span");

function timeSet() {
  hours = new Date().getHours().toString().padStart(2, "0");
  minutes = new Date().getMinutes().toString().padStart(2, "0");
  seconds = new Date().getSeconds().toString().padStart(2, "0");
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

timeSet();
setInterval(timeSet, 1000);

// 함수가 반복실행되는 것이기 때문에 변수를 함수 밖에서 설정하면 반복실행되는 함수의 영향을 받지 않는다.
