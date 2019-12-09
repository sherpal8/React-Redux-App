import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends Component {
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
        <h2>Manage Course</h2>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequire
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
