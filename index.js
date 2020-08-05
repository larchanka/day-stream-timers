const sessionEl = document.getElementById('num');
const timerEl = document.getElementById('timer');
const { hash } = window.location;

const currentNum = hash ? hash.replace('#', '') : 1;
let currentTimer;

const addZero = (number) => {
  if (String(number).length === 1) {
    return `0${number}`;
  }

  return number;
}

sessionEl.innerText = currentNum;

const startTimer = (maxMinutes) => {
  currentTimer = maxMinutes;
  
  setInterval(() => {
    if (currentTimer > 0) {
      currentTimer -= 1;
  
      const minutes = Math.floor(currentTimer / 60);
      const seconds = Math.floor(currentTimer - minutes * 60);
  
      timerEl.innerText = `${addZero(minutes)}:${addZero(seconds)}`;
    }
  }, 1000);
}
