function checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, kayakAnswer, roryAnswer) {
    rangerAnswer = rangerAnswer.toLowerCase();
    smokeyAnswer = smokeyAnswer.toLowerCase();
    tybaltAnswer = tybaltAnswer.toLowerCase();
    //kayakAnswer = kayakAnswer.toLowerCase();
    roryAnswer = roryAnswer.toLowerCase();
    
    let score = 0;

    if(rangerAnswer === 'bengal') {
        score += 1;
    }

    if(smokeyAnswer === 'chicks') {
        score += 1;
    }
    
    if(tybaltAnswer === 'siamese') {
        score += 1;
    }

    if(kayakAnswer.toLowerCase() === 'kayaking') {
        score += 1;
    }

    if(roryAnswer === 'early') {
        score += 1;
    }

    console.log('score from function', score)
    return score;

}

export default checkResults;
