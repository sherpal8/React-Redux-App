import { createStore } from "redux";
import rootReducer from "../src/redux/reducers";
import initialState from "../src/redux/reducers/initialState";
import * as courseActions from "../src/redux/actions/courseActions";

it("Should handle creating courses", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = { title: "Clean Code" };
  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);
  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});

it("Should handle updating courses", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = { title: "Clean Code" };
  const course1 = { title: "Clean Code Always" };
  // act
  const action = {
    create: courseActions.createCourseSuccess(course),
    update: courseActions.updateCourseSuccess(course1)
  };
  store.dispatch(action.create);
  store.dispatch(action.update);
  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course1);
});
