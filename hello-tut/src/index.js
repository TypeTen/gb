import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import Counter from './components/counter/counter.js';
import addImage from './add-image.js';

const heading = new Heading();
heading.render();
const h1 = document.querySelector('h1');
let count = h1.innerHTML;
const counter = new Counter();
const countdownTimer = 10;

const helloWorldButton = new HelloWorldButton();
helloWorldButton.click(h1);

let loop = window.setInterval(updater, countdownTimer); //miliseconds
let iteration = 0; //t
let vagrants = 0;
let villagers = 0;
helloWorldButton.add(vagrants, h1, 'vagrants');
helloWorldButton.add(villagers, h1, 'villagers');

console.log(document.querySelectorAll('button'));

let vagrantsButton = document.querySelectorAll('button')[1];
let villagersButton = document.querySelectorAll('button')[2];


function updater() {
    vagrants = vagrantsButton.innerHTML;
    villagers = villagersButton.innerHTML;
    count = h1.innerHTML;
    console.log('count: ' + count + ' | ' + vagrants);

    if (iteration == 100) { //Happens every second
      if (vagrants > 0) counter.a('vag', vagrants, h1, count);
      if (villagers > 0) counter.b('vil', villagers, h1, count);
    } else if ((iteration % 10) == 0) { //Happens every tenth
    }

    if (iteration < 100) {
        iteration++;
    } else {
        iteration = 0;
    }
}
