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
const questions = [];

goBt.addEventListener("click", goHandler);

function goHandler(e) {
  e.preventDefault();
  if (!someChecked()) {
    alertMsg.classList.remove("hidden");
  } else {
    startGame();
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
    questions.concat(JAVA);
  }
  if (javaTeckCh.checked) {
    questions.concat(TECHNICKAL);
  }
  if (selenCh.checked) {
    questions.concat(SELENIUM);
  }
  if (gitCh.checked) {
    questions.concat(GITHUB);
  }
  if (jiraCh.checked) {
    questions.concat(JIRA);
  }
}

function startSycle() {}

function startGame() {
  gsap.to(".menue-container", 0.5, { y: "-120%", ease: "elastic.in" });
  prepareQuestions();
  startSycle();
}
