import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';

    click(h1) {
        const body = document.querySelector('body');
        const button = document.createElement('button');

        button.innerHTML = 'Hello World';
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);

        button.onclick = function() {
            let counter = h1.innerHTML;

            counter++;
            h1.innerHTML = counter;
        }
    }

    add(vagrants, h1, id) {
        const body = document.querySelector('body');
        const button = document.createElement('button');

        button.innerHTML = vagrants;
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);

        button.onclick = function() {
          let counter = h1.innerHTML;
          let cost = 10 * (parseInt(button.innerHTML, 10) + 1);
          // console.log('counter: ' + counter);
          if (counter >= cost) {
            vagrants++;
            counter = counter - cost;
            h1.innerHTML = counter;

            button.innerHTML = vagrants;
            // console.log('vagrants: ' + vagrants);
          }
        }
    }
}

export default HelloWorldButton;
