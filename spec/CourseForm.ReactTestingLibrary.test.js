import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "../src/components/courses/CourseForm.jsx";

afterEach(cleanup);

function renderCourseForm(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render `Add Course` header", () => {
  const { getByText, debug } = renderCourseForm();
  // debug();  // to print out document onto console
  getByText("Add Course");
});

it("should label save button as `Save` when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should label save button as `Saving...` when saving=true", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
