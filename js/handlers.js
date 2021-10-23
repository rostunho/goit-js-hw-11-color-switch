import refs from './refs.js';
import colors from './colors.js';
import randomIntegerFromInterval from './randomiser.js';

// console.log(colors);

let intervalId = null;

function runColorSwitcher() {
  intervalId = setInterval(changeColor, 1000);
  blockButton(refs.startBtn);
}

function stopColorSwitcher() {
  clearInterval(intervalId);
  unblockButton(refs.startBtn);
}

function changeColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];

  console.log('new bg-color');
}

function blockButton(button) {
  button.setAttribute('disabled', 'disabled');
}

function unblockButton(button) {
  button.removeAttribute('disabled');
}

export { runColorSwitcher, stopColorSwitcher };
