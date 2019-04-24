function checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer) {
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
    
    if(roryAnswer === 'early') {
        score += 1;
    }

    if(kayakAnswer === 'kayaking') {
        score += 1;
    }
    return score;

}

export default checkResults;
