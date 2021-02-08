// finding WebElements
const menueContainer = document.querySelector(".menue-container");
const javaCh = document.querySelector("#java");
const javaTeckCh = document.querySelector("#technical");
const selenCh = document.querySelector("#selenium");
const gitCh = document.querySelector("#github");
const behavCh = document.querySelector("#behavioral");
const jiraCh = document.querySelector("#jira");
const timerCh = document.querySelector("#timer");
const videoCh = document.querySelector("#videoCh");
const goBt = document.querySelector("#go");
const alertMsg = document.querySelector(".alert");
const questionsLeftWebElement = document.querySelector(
  "#questions-left-message"
);
const timerWebElement = document.querySelector("#timer-clock");
const hasSolutionWebElement = document.querySelector(
  "#solutin-avaliable-message"
);
const questionWebElement = document.querySelector("#question");
const solutionButton = document.querySelector("#show-solution");
const nextButton = document.querySelector("#next-question");
const switchContainer = document.querySelector(".switch-container");
const autoNextButton = document.querySelector("#auto-next");
const autoSolutionButton = document.querySelector("#auto-solution");
const goMenueCaller = document.querySelector("#go-menue");
const videoContainer = document.querySelector("#video-container");
const autoRecordButton = document.querySelector("#auto-record");
const autoPlayButton = document.querySelector("#auto-play");
const disaebleWebElemets = document.querySelectorAll(".disayeble");
const videoPowerButton = document.querySelector("#video-on");
const videoRecordButton = document.querySelector("#video-record");
const videoPlayButton = document.querySelector("#video-play");
const videoPauseButton = document.querySelector("#video-pause");
const videoDownloadButton = document.querySelector("#video-download");
const videoFullScreenButton = document.querySelector("#video-fullScreen");
const video = document.querySelector("#video");
const recordindMessageText = document.querySelector("#record-message");
const videoSwitchContainer = document.querySelector("#video-switch-container");
// global variables
let isTimerEnabled = false;
let isVideoEnabled = false;
let isRecording = false;
let isRecordingPaused = false;
let isPlayPaused = false;
let timerIntervalID = null;
let recIntervalID = null;
let questions = [];
let question;
let solution;
let time;
let camera_stream = null;
let media_recorder = null;
let blobs_recorded = [];
let video_local = null;
// event listeners
goBt.addEventListener("click", goHandler);
solutionButton.addEventListener("click", solutionButtonHandler);
nextButton.addEventListener("click", nextButtonHandler);
autoNextButton.addEventListener("click", autoButtonHendler);
autoSolutionButton.addEventListener("click", autoButtonHendler);
autoRecordButton.addEventListener("click", autoButtonHendler);
autoPlayButton.addEventListener("click", autoButtonHendler);
goMenueCaller.addEventListener("click", goMenueHandler);
videoPowerButton.addEventListener("click", videoPowerButtonHandler);
videoRecordButton.addEventListener("click", videoRecordButtonHandler);
videoPauseButton.addEventListener("click", videoPauseButtonHandler);
videoPlayButton.addEventListener("click", videoPlayButtonHandler);

// functions
function goHandler(e) {
  e.preventDefault();
  if (!someChecked()) {
    alertMsg.classList.remove("hidden");
  } else {
    startGame();
  }
}

function videoPlayButtonHandler() {
  if (isRecording) {
    stopRecord();
    isRecording = false;
    video.srcObject = null;
    video.src = video_local;
    video.muted(false);
  }
  setTimeout(() => {
    video.controls = true;
    if (isPlayPaused) {
      isPlayPaused = false;
      video.resume();
    } else {
      video.play();
    }
  }, 300);
}

function videoRecordButtonHandler() {
  if (isRecording === false) {
    startRecord();
  } else {
    stopRecord();
  }
}

function startRecord() {
  isRecording = true;
  video.src = null;
  video.srcObject = camera_stream;
  video.muted(true);
  recordMessage("rec");
  // start recording with each recorded blob
  media_recorder.start();
}

function stopRecord() {
  isRecording = false;
  recordMessage("stop");
  media_recorder.stop();
}

function recordMessage(status) {
  switch (status) {
    case "rec":
      recordindMessageText.innerHTML = "Rec";
      recIntervalID = setInterval(() => {
        recordindMessageText.classList.toggle("hidden");
      }, 1000);
      break;
    case "stop":
      clearInterval(recIntervalID);
      recIntervalID = null;
      recordindMessageText.classList.add("hidden");
      break;
    case "rec-pause":
      clearInterval(recIntervalID);
      recIntervalID = null;
      recordindMessageText.classList.remove("hidden");
      recordindMessageText.innerHTML = "Rec paused";
      break;
    case "rec-resume":
      recordindMessageText.innerHTML = "Rec";
      recIntervalID = setInterval(() => {
        recordindMessageText.classList.toggle("hidden");
      }, 1000);
      break;
  }
}

function videoPauseButtonHandler() {
  isRecordingPaused = !isRecordingPaused;
  if (isRecording) {
    if (isRecordingPaused) {
      recordMessage("rec-pause");
      media_recorder.pause();
    } else {
      recordMessage("rec-resume");
      media_recorder.resume();
    }
  } else {
    isPlayPaused = !isPlayPaused;
    if (isPlayPaused) {
      video.pause();
    } else {
      video.resume();
    }
  }
}

function videoPowerButtonHandler() {
  isVideoEnabled = !isVideoEnabled;
  for (let x of disaebleWebElemets) {
    x.classList.toggle("disabled");
  }
  toggleVideo();
}

async function toggleVideo() {
  if (isVideoEnabled) {
    camera_stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    video.srcObject = camera_stream;
    video.controls = false;
    // set MIME type of recording as video/webm
    media_recorder = new MediaRecorder(camera_stream, {
      mimeType: "video/webm;codecs=vp9,opus",
    });
    // event : new recorded video blob available
    media_recorder.addEventListener("dataavailable", function (e) {
      blobs_recorded.push(e.data);
    });
    // event : recording stopped & all blobs sent
    media_recorder.addEventListener("stop", function () {
      // create local object URL from the recorded video blobs
      video_local = null;
      video_local = URL.createObjectURL(
        new Blob(blobs_recorded, { type: "video/webm" })
      );
      videoDownloadButton.href = video_local;
    });
  } else {
    camera_stream = null;
    video.srcObject = null;
  }
}

function solutionButtonHandler() {
  if (timerIntervalID) {
    clearInterval(timerIntervalID);
    timerIntervalID = null;
  }
  timerWebElement.innerHTML = "off";
  if (solution !== "") {
    hasSolutionWebElement.innerHTML = "Solution:";
    questionWebElement.innerHTML = solution;
  } else {
    questionWebElement.innerHTML =
      "Unfortunatly we don't have a solution for this question yet. If you want to contribute please fill free to contuct us. Thank you!";
  }
}

function nextButtonHandler() {
  if (timerIntervalID) {
    clearInterval(timerIntervalID);
    timerIntervalID = null;
  }
  startSycle();
}

function autoButtonHendler(e) {
  e.target.classList.toggle("on");
  if (e.target.classList.contains("on")) {
    e.target.src = "../img/switch_on.gif";
    if (e.target.id === "auto-play") {
      autoRecordButton.classList.add("on");
      autoRecordButton.src = "../img/switch_on.gif";
    }
  } else {
    e.target.src = "../img/switch_off.gif";
    if (e.target.id === "auto-record") {
      autoPlayButton.classList.remove("on");
      autoPlayButton.src = "../img/switch_off.gif";
    }
  }
}

function someChecked() {
  for (let x of [javaCh, javaTeckCh, selenCh, gitCh, behavCh, jiraCh]) {
    if (x.checked) {
      return true;
    }
  }
  return false;
}

function prepareQuestions() {
  if (javaCh.checked) {
    questions.push(...JAVA);
  }
  if (javaTeckCh.checked) {
    questions.push(...TECHNICKAL);
  }
  if (selenCh.checked) {
    questions.push(...SELENIUM);
  }
  if (gitCh.checked) {
    questions.push(...GITHUB);
  }
  if (jiraCh.checked) {
    questions.push(...JIRA);
  }
  if (timerCh.checked) {
    isTimerEnabled = true;
    switchContainer.classList.remove("disabled");
  } else {
    isTimerEnabled = false;
    switchContainer.classList.add("disabled");
  }
  if (videoCh.checked) {
    isVideoEnabled = true;
    for (let x of disaebleWebElemets) {
      x.classList.remove("disabled");
    }
    toggleVideo();
  } else {
    isVideoEnabled = false;
    for (let x of disaebleWebElemets) {
      x.classList.add("disabled");
    }
  }
}

function shwoSolution() {
  hasSolutionWebElement.innerHTML = "Solution:";
  questionWebElement.innerHTML = solution;
  timerupdater("from solution");
}

function timerupdater(from) {
  let minutes = time - 1;
  let seconds = 60;
  let tick = true;
  if (from === "from question") {
    if (
      isVideoEnabled &&
      autoRecordButton.classList.contains("on") &&
      isRecording === false
    ) {
      isRecording = true;
      startRecord();
    }
  }
  timerIntervalID = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval(timerIntervalID);
        timerIntervalID = null;
        if (from === "from question") {
          if (isVideoEnabled && autoRecordButton.classList.contains("on")) {
            videoPlayButtonHandler();
          }
          if (autoSolutionButton.classList.contains("on") && solution !== "") {
            shwoSolution();
          }
        } else if (autoNextButton.classList.contains("on")) {
          startSycle();
        }
      }
    }
    timerWebElement.innerHTML =
      "" + minutes + (tick ? ":" : " ") + (seconds < 10 ? "0" : "") + seconds;
    tick = !tick;
  }, 1000);
}

function startSycle() {
  if (questions.length !== 0) {
    let randomIdex = Math.floor(Math.random() * questions.length);
    question = questions[randomIdex].q;
    solution = questions[randomIdex].s;
    time = questions[randomIdex].t;
    questions.splice(randomIdex, 1);
    let questionsLeft = questions.length + " questions left";
    let hasSolution =
      solution.length > 0
        ? "Solution is avaliable"
        : "Solution is not avaliable";
    questionsLeftWebElement.innerHTML = questionsLeft;
    hasSolutionWebElement.innerHTML = hasSolution;
    questionWebElement.innerHTML = question;
    if (isTimerEnabled) {
      timerupdater("from question");
    } else {
      timerWebElement.innerHTML = "off";
    }
  } else {
    timerWebElement.innerHTML = "END";
    questionWebElement.innerHTML = "All questions are done!";
  }
}

function startGame() {
  gsap.to(".menue-container", 1, { y: "-120%", ease: "elastic.in" });
  goMenueCaller.classList.remove("hidden");
  prepareQuestions();
  startSycle();
}

function goMenueHandler() {
  clearInterval(timerIntervalID);
  isTimerEnabled = false;
  timerIntervalID = null;
  questions = [];
  goMenueCaller.classList.add("hidden");
  gsap.to(".menue-container", 1, { y: 0, ease: "elastic.out" });
}
