import { combineReducers } from 'redux';
import counter from './reducers/counter';
import {animalReducer} from './components/animal/reducer'

export default combineReducers({ 
    counter,
    animal: animalReducer
});