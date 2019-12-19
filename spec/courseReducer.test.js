import courseReducer from "../src/redux/reducers/courseReducer";
import * as actions from "../src/redux/actions/courseActions";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [{ title: "A" }, { title: "B" }];
  const newCourse = { title: "C" };
  const action = actions.createCourseSuccess(newCourse);
  // act
  const newState = courseReducer(initialState, action);
  //assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];
  const course = { id: 2, title: "New Title" };
  const action = actions.updateCourseSuccess(course);

  // act
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find(a => a.id === course.id);
  const untouchedCourses = newState.find(a => a.id !== course.id);

  // assert
  expect(updatedCourse.title).toEqual("New Title");
  expect(untouchedCourses.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
