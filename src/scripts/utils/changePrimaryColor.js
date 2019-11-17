/* eslint-disable no-param-reassign */
import { COOL_COLORS } from '../constants';

let currColor = 1;

const changePrimaryColor = (primaryColorElements) => {
  primaryColorElements.forEach((node) => { node.style.backgroundColor = COOL_COLORS[currColor]; });
  currColor = (currColor + 1) % COOL_COLORS.length;
};

export default changePrimaryColor;
