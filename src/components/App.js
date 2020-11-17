import React from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./coursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./manageCoursePage";
import { Route, Switch } from "react-router-dom";

function App() {
  // function getPage() {
  //   const route = window.location.pathname;
  //   if (route === "/about") return <AboutPage />;
  //   if (route === "/courses") return <CoursesPage />;
  //   return <HomePage />;
  // }
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
