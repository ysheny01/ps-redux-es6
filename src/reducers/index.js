import {combineReducers} from 'redux';
import courses from './courseReducer';

// root reducer
const rootReducer = combineReducers({
  courses : courses
});

export default rootReducer;
