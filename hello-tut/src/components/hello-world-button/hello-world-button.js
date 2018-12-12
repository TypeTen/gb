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

    add(gains) {
        const body = document.querySelector('body');
        const button = document.createElement('button');

        button.innerHTML = 'Goodbye World';
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);

        button.onclick = function() {
            gains++;

            console.log('gains: ' + gains);

            return (gains);
        }
    }
}

export default HelloWorldButton;
