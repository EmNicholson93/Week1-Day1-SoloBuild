const rangerInput = document.getElementById('ranger');
const smokeyInput = document.getElementById('smokey');
const tybaltInput = document.getElementById('tybalt');
const roryInput = document.getElementById('rory');
const kayakInput = document.getElementById('kayak');
const result = document.getElementById('resultsare');
const button = document.getElementById('results');

button.addEventListener('click', event => {
    event.preventDefault();
    const rangerAnswer = rangerInput.nodeValue.trim();
    const smokeyAnswer = smokeyInput.nodeValue.trim();
    const tybaltAnswer = tybaltInput.nodeValue.trim();
    const roryAnswer = roryInput.nodeValue.trim();
    const kayakAnswer = kayakInput.nodeValue.trim();
})
