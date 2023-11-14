import { throttle } from './throttle';
import vars from '../config.script/vars';

const fixFullheight = () => {
	let vh = window.innerHeight;
	vars.page.style.setProperty('--vh', `${vh}px`);
};

let fixHeight = throttle(fixFullheight);

fixHeight();

window.addEventListener('resize', fixHeight);
