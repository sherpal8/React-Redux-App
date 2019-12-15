import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList.jsx";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner.jsx";

class CoursesPage extends Component {
  state = { redirectToAddCoursePage: false };
  componentDidMount() {
    const { courses, authors, loadCourses, loadAuthors } = this.props;
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed :" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed: " + error);
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Courses</h2>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        {this.props.courses.length < 1 && <Spinner />}
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => {
            this.setState({ redirectToAddCoursePage: true });
          }}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(
                author => author.id === course.authorId
              ).name
            };
          }),
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
