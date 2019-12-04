import React, { Component } from "react";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  // arrow function binds to CoursesPage component
  // thus avoiding binding ambiguities of non-arrow function
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  render() {
    return (
      <form>
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
}

export default CoursesPage;
