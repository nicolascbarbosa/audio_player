const countTimer = () => {
  const doc = document;
  const $audio = doc.querySelector('.js-audio-player');
  const $progress = doc.querySelector('.js-audio-progress');
  const $timerFinish = doc.querySelector('.js-timer-finish');
  const $timerInit = doc.querySelector('.js-timer-init');

  $audio.addEventListener('loadedmetadata', () => {
    let duration = parseInt($audio.duration);
    let secondsDuration = parseInt(duration % 60);
    let minutesDuration = parseInt((duration / 60) % 60);

    $timerFinish.textContent = secondsDuration > 9 ? minutesDuration + ':' + secondsDuration : minutesDuration + ':0' + secondsDuration;

  }, false);

  $audio.addEventListener('timeupdate', () => {
    let duration = parseInt($audio.duration);
    let currentTime = parseInt($audio.currentTime);
    let timeLeft = duration - currentTime;
    let progress = (100 / duration) * currentTime;
    let seconds = timeLeft % 60;
    let minutes = Math.floor(timeLeft / 60) % 60;

    seconds = seconds < 10 ? "0"+seconds : seconds;
    minutes = minutes < 10 ? "0"+minutes : minutes;

    $timerInit.textContent = minutes+":"+seconds;
    $progress.value = progress;

  }, false);


  $progress.addEventListener('click', (e) => {
    let selectTime = (e.offsetX * $progress.max / $progress.offsetWidth);
    let duration = parseInt($audio.duration);

    $progress.value = selectTime;
    console.log(selectTime);
    console.log(duration);
    // $audio.currentTime = selectTime * duration;
    console.log(selectTime);
  }, false);

};

countTimer.call();

const controlVolume = () => {
  const doc = document;
  const $audio = doc.querySelector('.js-audio-player');
  const $control = doc.querySelector('.js-volume-control');

  $control.addEventListener('change', () => {
    $audio.volume = $control.value;
  }, false);

};

controlVolume.call();

const customControls = () => {
  const doc = document;
  const $audio = doc.querySelector('.js-audio-player');
  const $playPause = doc.querySelector('.js.-play-and-pause');
  const $next = doc.querySelector('.js.-next-track');
  const $prev = doc.querySelector('.js.-prev-track');

  $playPause.addEventListener('click', () => {

    if($audio.paused) {
      $audio.play();
    } else {
      $audio.pause();
    }

  }, false);
};

customControls.call();
