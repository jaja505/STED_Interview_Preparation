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
const autoNextButton = document.querySelector("#auto-next");
const autoSolutionButton = document.querySelector("#auto-solution");

let timerFunck;
let questions = [];
let question;
let solution;
let time;
let minutes;
let seconds;
let tick = true;

goBt.addEventListener("click", goHandler);
solutionButton.addEventListener("click", solutionButtonHandler);
nextButton.addEventListener("click", nextButtonHandler);
autoNextButton.addEventListener("click", autoButtonHendler);
autoSolutionButton.addEventListener("click", autoButtonHendler);

function goHandler(e) {
  e.preventDefault();
  if (!someChecked()) {
    alertMsg.classList.remove("hidden");
  } else {
    startGame();
  }
}

function solutionButtonHandler() {
  clearInterval();
  timerWebElement.innerHTML = "00:00";
  if (solution !== "") {
    hasSolutionWebElement.innerHTML = "Solution:";
    questionWebElement.innerHTML = solution;
  } else {
    questionWebElement.innerHTML =
      "Unfortunatly we don't have a solution for this question yet. If you want to contribute please fill free to contuct us. Thank you!";
  }
}

function nextButtonHandler() {
  clearInterval();
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
    console.log("java checked");
    questions = [...JAVA];
  }
  if (javaTeckCh.checked) {
    questions = [...TECHNICKAL];
  }
  if (selenCh.checked) {
    questions = [...SELENIUM];
  }
  if (gitCh.checked) {
    questions = [...GITHUB];
  }
  if (jiraCh.checked) {
    questions = [...JIRA];
  }
}

function shwoSolution() {
  hasSolutionWebElement.innerHTML = "Solution:";
  questionWebElement.innerHTML = solution;
  minutes = time - 1;
  seconds = 60;
  setInterval(() => {
    if (seconds === 0) {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval();
      }
    } else {
      seconds--;
    }
    timerWebElement.innerHTML = "" + minutes + (tick ? ":" : ".") + seconds;
    tick = !tick;
  }, 1000);
}

function startSycle() {
  if (questions.length !== 0) {
    console.log("step");
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
    minutes = time - 1;
    seconds = 60;
    setInterval(() => {
      if (seconds === 0) {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          clearInterval();
          if (autoSolutionButton.classList.contains("on")) {
            if (solution !== "") {
              shwoSolution();
            }
          }
          if (autoNextButton.classList.contains("on")) {
            startSycle();
          }
        }
      } else {
        seconds--;
      }
      timerWebElement.innerHTML = "" + minutes + (tick ? ":" : ".") + seconds;
      tick = !tick;
    }, 1000);
  } else {
    timerWebElement.innerHTML = "--:--";
    questionWebElement.innerHTML = "All questions are done!";
  }
}

function startGame() {
  gsap.to(".menue-container", 1, { y: "-120%", ease: "elastic.in" });
  prepareQuestions();
  startSycle();
}
