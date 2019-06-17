import { combineReducers } from 'redux';
import counter from './reducers/counter';
import {animalReducer} from './components/animal/reducer'
import {productReducer} from './components/product/reducer'

export default combineReducers({ 
    counter,
    animal: animalReducer,
    product: productReducer
});