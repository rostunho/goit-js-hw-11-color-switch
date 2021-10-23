import refs from './js/refs.js';
import { runColorSwitcher, stopColorSwitcher } from './js/handlers.js';

refs.startBtn.addEventListener('click', runColorSwitcher);
refs.stopBtn.addEventListener('click', stopColorSwitcher);
