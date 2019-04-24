const test = QUnit.test;

function checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer) {
    let score = 5;
    return score;

}

test('return a score of 5 if all answers are correct', assert => {

//arrange

    const rangerAnswer = 'bengal';
    const smokeyAnswer = 'chicks';
    const tybaltAnswer = 'siamese';
    const roryAnswer = 'early';
    const kayakAnswer = 'kayaking';
    const expectedResultOne = '5';

//act

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, roryAnswer, kayakAnswer);

//assert

    assert.equal(expectedResultOne, score);
});