// action creator, must have type property
export function createCourse(course) {
  return { type: 'CREATE_COURSE', course: course };
}
