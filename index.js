import refs from './js/refs.js';
import { runColorSwitcher, stopColorSwitcher } from './js/handlers.js';

refs.startBtn.addEventListener('click', runColorSwitcher);
refs.stopBtn.addEventListener('click', stopColorSwitcher);

// console.dir(refs.body.style.backgroundColor);

// console.log(refs);
// console.log(colors);
// console.log(randomIntegerFromInterval(0, 10));
