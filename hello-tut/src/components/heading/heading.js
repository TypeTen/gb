import './heading.scss';

class Heading {
    render() {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');

        h1.innerHTML = 0;
        body.appendChild(h1);
    }
}

export default Heading;
