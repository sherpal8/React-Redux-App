import React, { Component } from "react";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

  // arrow function binds to CoursesPage component, thus
  // avoiding binding ambiguities of non-arrow functions
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);
  };
}

export default CoursesPage;
