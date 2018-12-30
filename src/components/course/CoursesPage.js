import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // // init state
    // this.state = {
    //   course: { title: "null" }
    // };

    // this.onTitleChange = this.onTitleChange.bind(this); // this binding issue!
    // this.onClickSave = this.onClickSave.bind(this);     // this binding issue!
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course });
  // }

  // onClickSave() {
  //   //  alert(`Saving ${this.state.course.title}`);
  //   //  this.props.dispatch(courseActions.createCourse(this.state.course)); // dispatch: call action
  //   this.props.actions.createCourse(this.state.course);
  // }         // {this.props.courses.map(this.courseRow)}

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {courses} = this.props; //? destructure
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
        value="Add Course"
        className="btn btn-primary"
        onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequried,
  actions: PropTypes.object.isRequired
  //createCourse: PropTypes.func.isRequired
};

// state in store, from rootReducer.
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
    //createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

//export default CoursesPage;
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
