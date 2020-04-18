import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';


const description = 'What number is missing in the progression?';

const createQuestion = (firstElement, lastElement, indexOfHiddenElement, step) => {
  const iter = (number, counter, acc) => {
    if (counter > lastElement) {
      return acc;
    }
    if (counter === indexOfHiddenElement) {
      return iter(number + step, counter + 1, `${acc} ..`);
    }
    return iter(number + step, counter + 1, `${acc} ${number}`);
  };

  return iter(firstElement, 1, '');
};

const getQuestionAndAnswer = (progressionLength) => {
  const firstElement = getRandomInt(0, 10);
  const step = getRandomInt(1, 4);
  const indexOfHiddenElement = getRandomInt(1, progressionLength);
  const question = createQuestion(firstElement, progressionLength, indexOfHiddenElement, step);
  const answer = firstElement + step * (indexOfHiddenElement - 1);
  return cons(question, answer);
};

const getGameData = () => {
  const progressionLength = 10;
  const questionAndAnswer = getQuestionAndAnswer(progressionLength);
  const question = car(questionAndAnswer);
  const answer = cdr(questionAndAnswer);
  return cons(question, String(answer));
};

export default () => {
  startGame(getGameData, description);
};
