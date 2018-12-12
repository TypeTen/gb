import Git from './git.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Git';
    img.width = 50;
    img.src = Git;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;
