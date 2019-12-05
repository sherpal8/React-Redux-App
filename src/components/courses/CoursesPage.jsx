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
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
