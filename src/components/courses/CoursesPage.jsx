import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="enter title"
            value={this.state.course.title}
          />
        </label>
        <button>
          <input type="submit" value="Save" />
        </button>
        <ol>
          {this.props.courses.map(course => (
            <li key={course.title}>{course.title}</li>
          ))}
        </ol>
      </form>
    );
  }

  // arrow function binds to CoursesPage component, thus
  // avoiding binding ambiguities of non-arrow functions
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    // debugger;
    this.props.createCourse(this.state.course);
  };
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
