import React from "react";
import CourseForm from "../src/components/courses/CourseForm.jsx";
import renderer from "react-test-renderer";
import { courses, authors } from "../tools/mockData";

it("set submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );
  expect(tree).toMatchSnapshot(); // note: activate snapshot-tools ext VS code to hover-view of code
});

it("set submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
