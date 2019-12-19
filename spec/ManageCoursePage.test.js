import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../tools/mockData";
import ManageCoursePage from "../src/components/courses/ManageCoursePage.jsx";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    history: {}, // unlike previous approach, here is the stubbing out of MemoryRouter
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    course: newCourse,
    match: {}
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}
