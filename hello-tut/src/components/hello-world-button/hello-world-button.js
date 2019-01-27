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

    add(id, itemAmount, h1) {
        const body = document.querySelector('body');
        const button = document.createElement('button');

        button.innerHTML = itemAmount;
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);

        button.onclick = function() {
          let counter = h1.innerHTML;
          let cost = 10 * (parseInt(itemAmount, 10) + 1);
          // console.log('counter: ' + counter);

          switch (id) {
            case 'vag':

              break;
            case 'vil':

              break;
            default:

          }

          if (counter >= cost) {
            itemAmount++;
            counter = counter - cost;
            h1.innerHTML = counter;

            button.innerHTML = itemAmount;
            // console.log('itemAmount: ' + itemAmount);
          }
        }
    }
}

export default HelloWorldButton;
