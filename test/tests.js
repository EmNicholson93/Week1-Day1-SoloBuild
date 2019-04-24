const test = QUnit.test;

import checkResults from '../src/checkResults.js';

test('return a score of 5 if all answers are correct', assert => {

//arrange

    const rangerAnswer = 'bengal';
    const smokeyAnswer = 'chicks';
    const tybaltAnswer = 'siamese';
    const kayakAnswer = 'kayaking';
    const roryAnswer = 'early';
    const expectedResult = 5;

//act

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, kayakAnswer, roryAnswer);

//assert
    assert.equal(expectedResult, score);
});

test('return a score of 3 if 2 answers are incorrect', assert => {

//arrange
    
    const rangerAnswer = 'bengallol';
    const smokeyAnswer = 'chickssd';
    const tybaltAnswer = 'siamese';
    const kayakAnswer = 'kayaking';
    const roryAnswer = 'early';
    const expectedResult = 3;

//act

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, kayakAnswer, roryAnswer);

//assert

    assert.equal(expectedResult, score);
});

test('return a score of 0 if all answers are incorrect', assert => {

//arrange
    
    const rangerAnswer = 'bengallol';
    const smokeyAnswer = 'chickssd';
    const tybaltAnswer = 'siamesdfe';
    const kayakAnswer = 'kayasdking';
    const roryAnswer = 'earlsy';
    const expectedResult = 0;

//act

    const score = checkResults(rangerAnswer, smokeyAnswer, tybaltAnswer, kayakAnswer, roryAnswer);
    
//assert

    assert.equal(expectedResult, score);
});