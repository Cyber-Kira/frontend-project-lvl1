import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import { getRngInt, startGame } from '..';

const descrForGameGCD = 'Find the greatest common divisor of given numbers.\n';

const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    return getGCD(num2, num1 % num2);
  }
  return num1;
};

const gameData = () => {
  const rngNums = cons(getRngInt(0, 50), getRngInt(0, 10));
  const rngExpression = (`${car(rngNums)} ${cdr(rngNums)}`);
  const correctAnswer = getGCD(car(rngNums), cdr(rngNums));
  return cons(rngExpression, correctAnswer);
};

export default () => {
  startGame(gameData, descrForGameGCD);
};