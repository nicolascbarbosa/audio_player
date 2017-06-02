const countTimer = () => {
    const doc = document;
    const $audio = doc.querySelector('.js-audio-player');

  $audio.addEventListener('loadedmetadata', () => {
    let $timerFinish = doc.querySelector('.js-timer-finish');
    let duration = parseInt($audio.duration);
    let secondsDuration = parseInt(duration % 60);
    let minutesDuration = parseInt((duration / 60) % 60);

    $timerFinish.textContent = secondsDuration > 9 ? minutesDuration + ':' + secondsDuration : minutesDuration + ':0' + secondsDuration;

  }, false);

  $audio.addEventListener('timeupdate', () => {
    let $timerInit = doc.querySelector('.js-timer-init');
    let duration = parseInt($audio.duration);
    let currentTime = parseInt($audio.currentTime);
    let timeLeft = duration - currentTime;
    let seconds = timeLeft % 60;
    let minutes = Math.floor(timeLeft / 60) % 60;

    seconds = seconds < 10 ? "0"+seconds : seconds;
    minutes = minutes < 10 ? "0"+minutes : minutes;

    $timerInit.textContent = minutes+":"+seconds;
  }, false);

};

countTimer.call();

const controlVolume = () => {
  const doc = document;
  const $audio = doc.querySelector('.js-audio-player');
  const $control = doc.querySelector('.js-volume-control');

  $control.addEventListener('change', () => {
    $audio.volume = $control.value;

    console.log($audio.volume);
  }, false);
};

controlVolume.call();