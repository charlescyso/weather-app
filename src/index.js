import 'normalize.css';
import './styles/main.scss';
import generateJoke from './generateJoke.js';
import soraidh from './asset/soraidh blue square.png';

const soraidhImg = document.querySelector('#soraidhImg');

soraidhImg.src = soraidh;

const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('hi');
});

console.log(generateJoke());
