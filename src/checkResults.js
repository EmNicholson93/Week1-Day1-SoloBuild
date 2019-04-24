function checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer) {
    let score = 0;

    if(rangerAnswer.toLowerCase() === 'bengal') {
        score += 1;
    }

    if(smokeyAnswer.toLowerCase() === 'chicks') {
        score += 1;
    }
    
    if(tybaltAnswer.toLowerCase() === 'siamese') {
        score += 1;
    }
    
    if(roryAnswer.toLowerCase() === 'early') {
        score += 1;
    }

    if(kayakAnswer.toLowerCase() === 'kayaking') {
        score += 1;
    }
    return score;

}

export default checkResults;
