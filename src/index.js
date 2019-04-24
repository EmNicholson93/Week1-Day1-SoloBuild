import checkResults from './checkResults.js';

const rangerInput = document.getElementById('ranger');
const smokeyInput = document.getElementById('smokey');
const tybaltInput = document.getElementById('tybalt');
const kayakInput = document.getElementById('kayak');
const roryInput = document.getElementById('rory');
const result = document.getElementById('resultsare');
const button = document.getElementById('results');

button.addEventListener('click', event => {
    event.preventDefault();
    const rangerAnswer = rangerInput.value.trim();
    const smokeyAnswer = smokeyInput.value.trim();
    const tybaltAnswer = tybaltInput.value.trim();
    const kayakAnswer = kayakInput.value.trim();
    const roryAnswer = roryInput.value.trim();

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, kayakAnswer, roryAnswer);

    if(rangerAnswer === '' || smokeyAnswer === '' || tybaltAnswer === '' || kayakAnswer === '' || roryAnswer === ''){ alert('You did not answer all the questions!!!');
    }

    const message = 'Your score: ' + score + 'out of 5!';

    results.textContent = message;

});
