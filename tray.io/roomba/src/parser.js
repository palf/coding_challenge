import _ from 'underscore';
import Actions from '../src/actions';
import Vector from '../src/vector';

const stringToVector = (string) => {
  const [x, y] = string.split(' ');
  return Vector.create(Number(x), Number(y));
};

const commandKey = {
  'N' : Actions.moveNorth,
  'S' : Actions.moveSouth,
  'E' : Actions.moveEast,
  'W' : Actions.moveWest
};

const parseCommand = (key) => commandKey[key];
const parseCommands = (string) => _.map(string, parseCommand);

const parse = (string) => {
  const lines = string.split('\n');
  if (lines.length < 4) {
    return {
      bounds: stringToVector('0 0'),
      position: stringToVector('0 0'),
      dirt: [],
      commands: []
    };
  } else {

    const bounds = stringToVector(lines[0]);
    const position = stringToVector(lines[1]);
    const dirt = _.map(lines.slice(2, -1), stringToVector);
    const commands = parseCommands(lines.slice(-1)[0]);

    return {
      bounds,
      position,
      dirt,
      commands
    };
  }
};

export default { parse };
