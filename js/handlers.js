import refs from './refs.js';
import colors from './colors.js';
import randomIntegerFromInterval from './randomiser.js';

let intervalId = null;
let currentColor;
let newColor;

function runColorSwitcher() {
  intervalId = setInterval(changeColor, 1000);
  blockButton(refs.startBtn);
}

function stopColorSwitcher() {
  clearInterval(intervalId);
  unblockButton(refs.startBtn);
}

function changeColor() {
  do {
    newColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  } while (newColor === currentColor);

  refs.body.style.backgroundColor = newColor;
  currentColor = newColor;

  console.log(`New background color is ${newColor}`);
}

function blockButton(button) {
  button.setAttribute('disabled', 'disabled');
}

function unblockButton(button) {
  button.removeAttribute('disabled');
}

export { runColorSwitcher, stopColorSwitcher };
