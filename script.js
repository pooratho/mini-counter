const increaseButtonE1 = document.querySelector(".counter_button--increase");
//console.log(increaseButtonE1);
const decreaseButtonE1 = document.querySelector(".counter_button--decrease");
const counterValueE1 = document.querySelector(".counter_value");
const resetButtonE1 = document.querySelector(".counter_reset-button");

function incrementCounter() {
  const currentValue = counterValueE1.textContent;
  let currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1;
  if (newValue !== 0 && newValue % 100 == 0) {
    alert("Good Job!");
  }
  counterValueE1.textContent = newValue;
}

function decreaseCounter() {
  const currentValue = counterValueE1.textContent;
  let currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterValueE1.textContent = newValue;
}

increaseButtonE1.addEventListener("click", incrementCounter);
decreaseButtonE1.addEventListener("click", decreaseCounter);

resetButtonE1.addEventListener("click", function () {
  counterValueE1.textContent = 0;
});

document.addEventListener("keydown", (e) => {
  const hoveredButton = document.querySelector(
    ".counter_button:hover, .counter_reset-button:hover",
  );

  (hoveredButton || increaseButtonE1).click();
});
