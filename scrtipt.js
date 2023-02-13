const values = document.querySelectorAll(".input");

function results() {
  var value = (values[0].value / values[1].value) * 100;

  let circularProgress = document.querySelector(".circular_progress"),
    progressValue = document.querySelector(".percent");

  let progressStartValue = 0,
    progressEndValue = Math.round(value),
    speed = 25;

  let progress = setInterval(() => {
    if (progressStartValue <= value) {
      progressStartValue++;
    } else {
      alert("Please fill the inputs");
      clearInterval(progress);
    }

    if (values[0].value === "" || values[1].value === "") {
      clearInterval(progress);
      progressEndValue = null;
      progressStartValue = 0;
      alert("Please fill both inputs");
    }

    if (progressEndValue === Infinity) {
      clearInterval(progress);
      alert("This is infinity");
      progressStartValue = 0;
    }

    if (progressEndValue === 0) {
      clearInterval(progress);
      alert("This is under 1%");
      progressStartValue = 0;
    }

    if (value > 100 && value < 99999999) {
      clearInterval(progress);
      alert(`This is more than 100%. To be exact is ${Math.round(value)}%`);
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
