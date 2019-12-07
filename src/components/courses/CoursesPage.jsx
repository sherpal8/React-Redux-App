import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <ol>
          {this.props.courses.map(course => (
            <li key={course.title}>{course.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
