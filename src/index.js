import checkResults from './checkResults.js';

const rangerInput = document.getElementById('ranger');
const smokeyInput = document.getElementById('smokey');
const tybaltInput = document.getElementById('tybalt');
const kayakInput = document.getElementById('kayaking');
const roryInput = document.getElementById('rory');
const button = document.getElementById('submit');
const resultsAre = document.getElementById('resultsAre');

button.addEventListener('click', event => {
    event.preventDefault();
    console.log('rangerInput', rangerInput)
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

    console.log(rangerAnswer);
});
