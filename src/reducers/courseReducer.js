import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      //  state.push(action.course); // wrong, instead use ES6 spread!
      //  return state;
      return [...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
