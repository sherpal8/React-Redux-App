import React, { useEffect, useState, setState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm.jsx";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  ...props
}) {
  // useState() hook allows use of state in functional component
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
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

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveCourse(course);
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
