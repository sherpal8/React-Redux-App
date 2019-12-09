import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {
  // note: useEffect() hook takes function it will call as 1st arg.
  // its 2nd arg is an array of items to watch to call that function.
  // as the array arg is empty, it has the same effect as componentDidMount()
  useEffect(() => {
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
  }, []);
  return (
    <div>
      <h2>Manage Course</h2>
    </div>
  );
}

ManageCoursePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
