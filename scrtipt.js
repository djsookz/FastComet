const values = document.querySelectorAll(".input");
var isNotNumber = document.querySelector(".isNaN");
var isNumber = false;

function results() {
  var value = (values[0].value / values[1].value) * 100;

  let circularProgress = document.querySelector(".circular_progress"),
    progressValue = document.querySelector(".percent");

  let progressStartValue = 0,
    progressEndValue = Math.round(value),
    speed = 25;

  let progress = setInterval(() => {
    isNumber = false;

    if (values[0].value === "" || values[1].value === "") {
      clearInterval(progress);
      progressEndValue = null;
      progressStartValue = 0;
      alert("Please fill both inputs");
    } else {
      progressStartValue++;
    }

    if (isNaN(value)) {
      clearInterval(progress);
      progressStartValue = 0;
      isNumber = true;
      isNotNumber.innerHTML = `<span class="remove">Please type numbers</span>`;
    } else {
      isNotNumber.innerHTML = `<span class="remove"></span>`;
    }

    if (progressEndValue === Infinity) {
      clearInterval(progress);
      alert("Result is infinity");
      progressStartValue = 0;
    }

    if (progressEndValue === 0) {
      clearInterval(progress);
      alert("Result is under 1%");
      progressStartValue = 0;
    }

    if (value > 100 && value < 999999999) {
      clearInterval(progress);
      alert(`Result is more than 100%. To be exact is ${Math.round(value)}%`);
      progressStartValue = 0;
    }

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#489fd7 ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressEndValue == progressStartValue) {
      clearInterval(progress);
    }
  }, speed);
}
