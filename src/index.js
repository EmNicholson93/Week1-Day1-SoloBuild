import checkResults from './checkResults.js';

const rangerInput = document.getElementById('ranger');
const smokeyInput = document.getElementById('smokey');
const tybaltInput = document.getElementById('tybalt');
const kayakInput = document.getElementById('kayak');
const roryInput = document.getElementById('rory');
const resultsAre = document.getElementById('resultsAre');
const button = document.getElementById('submit');

button.addEventListener('click', event => {
    event.preventDefault();
    const rangerAnswer = rangerInput.value;
    const smokeyAnswer = smokeyInput.value;
    const tybaltAnswer = tybaltInput.value;
    const kayakAnswer = kayakInput.value;
    const roryAnswer = roryInput.value;

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, kayakAnswer, roryAnswer);

    if(rangerAnswer === '' || smokeyAnswer === '' || tybaltAnswer === '' || kayakAnswer === '' || roryAnswer === '') { 
        alert('You did not answer all the questions!!!');
    }

    const message = 'Your score:' + score + ' out of 5!';

    resultsAre.textContent = message;

    console.log(message)
});
