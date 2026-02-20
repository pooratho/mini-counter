const increaseButtonE1 = document.querySelector(".counter_button--increase");
//console.log(increaseButtonE1);
const decreaseButtonE1 = document.querySelector(".counter_button--decrease");
const counterValueE1 = document.querySelector(".counter_value");

increaseButtonE1.addEventListener("click", function () {
  //console.log('hi');
  //console.log(2);
  const currentValue = counterValueE1.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber + 1;
  counterValueE1.textContent = newValue;
});

decreaseButtonE1.addEventListener("click", function () {
  //console.log('hi');
  //console.log(2);
  const currentValue = counterValueE1.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber - 1;
  counterValueE1.textContent = newValue;
});
