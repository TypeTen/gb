import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import Counter from './components/counter/counter.js';
import addImage from './add-image.js';

const heading = new Heading();
heading.render(gains);
const h1 = document.querySelector('h1');
let count = h1.innerHTML;
const counter = new Counter();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.click(h1);

let loop = window.setInterval(updater, 10); //miliseconds
let iteration = 0; //t
let gains = 0;
helloWorldButton.add(gains);


function updater() {
    if (iteration == 100) { //Happens every second
        if (gains > 1) {
            counter.render(gains, count);
            console.log('aaaa: ' + count);
        }
    } else if ((iteration % 10) == 0) { //Happens every tenth
    }

    count = h1.innerHTML;
    console.log('count: ' + count);

    if (iteration < 100) {
        iteration++;
    } else {
        iteration = 0;
    }
}
