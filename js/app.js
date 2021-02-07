const menueContainer = document.querySelector(".menue-container");
const javaCh = document.querySelector("#java");
const javaTeckCh = document.querySelector("#technickal");
const selenCh = document.querySelector("#selenium");
const gitCh = document.querySelector("#github");
const behavCh = document.querySelector("#behavioral");
const jiraCh = document.querySelector("#jira");
const timerCh = document.querySelector("#timer");
const videoCh = document.querySelector("#video");
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

let isTimerEnabled = false;
let intervalID = null;
let questions = [];
let question;
let solution;
let time;

goBt.addEventListener("click", goHandler);
solutionButton.addEventListener("click", solutionButtonHandler);
nextButton.addEventListener("click", nextButtonHandler);
autoNextButton.addEventListener("click", autoButtonHendler);
autoSolutionButton.addEventListener("click", autoButtonHendler);
goMenueCaller.addEventListener("click", goMenueHandler);

function goHandler(e) {
  e.preventDefault();
  if (!someChecked()) {
    alertMsg.classList.remove("hidden");
  } else {
    startGame();
  }
}

function solutionButtonHandler() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
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
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }
  startSycle();
}

function autoButtonHendler(e) {
  e.target.classList.toggle("on");
  if (e.target.classList.contains("on")) {
    e.target.src = "../img/switch_on.gif";
  } else {
    e.target.src = "../img/switch_off.gif";
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
    questions.push(JAVA);
  }
  if (javaTeckCh.checked) {
    questions.push(TECHNICKAL);
  }
  if (selenCh.checked) {
    questions.push(SELENIUM);
  }
  if (gitCh.checked) {
    questions.push(GITHUB);
  }
  if (jiraCh.checked) {
    questions.push(JIRA);
  }
  if (timerCh.checked) {
    isTimerEnabled = true;
    switchContainer.classList.remove("hidden");
  } else {
    isTimerEnabled = false;
    switchContainer.classList.add("hidden");
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
  intervalID = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval(intervalID);
        intervalID = null;
        if (
          from === "from question" &&
          autoSolutionButton.classList.contains("on") &&
          solution !== ""
        ) {
          shwoSolution();
        } else if (autoNextButton.classList.contains("on")) {
          startSycle();
        }
      }
    }
    timerWebElement.innerHTML = "" + minutes + (tick ? ":" : " ") + (seconds < 10 ? "0" : "") + seconds;
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
  clearInterval(intervalID);
  isTimerEnabled = false;
  intervalID = null;
  questions = [];
  goMenueCaller.classList.add("hidden");
  gsap.to(".menue-container", 1, { y: 0, ease: "elastic.out" });
}
