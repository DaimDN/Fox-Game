import { combineReducers } from 'redux';
import ANIMALS from './Animal.reducers';
import GAME from './Game.reducer';

export default combineReducers({
  ANIMALS,
  GAME
});