// action creator, must have type property
import * as types from './actionTypes';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}
