//this is the meeting place of redcers
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';

//this is where you put the different reducers
export default combineReducers({
    item: itemReducer
});
