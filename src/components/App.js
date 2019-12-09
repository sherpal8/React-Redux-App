import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage.jsx";
import AboutPage from "./about/AboutPage.jsx";
import Header from "./common/Header.jsx";
import CoursesPage from "./courses/CoursesPage.jsx";
import PageNotFound from "./PageNotFound.jsx";
import ManageCoursePage from "./courses/ManageCoursePage.jsx";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
