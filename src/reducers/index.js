import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// root reducer
const rootReducer = combineReducers({
  courses : courses
});

export default rootReducer;
