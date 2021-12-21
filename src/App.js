import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Parallax from "./Pages/LandingPage2/Parallax"
import Login from "./thapa-login-src/component/Login"
import Register from "./thapa-login-src/component/Register";
import Home from "./Content/Pages/Home";
import About from './Content/Pages/About';
import { Certifications } from './Content/Pages/Certifications';
import Courses from './Content/Pages/Courses';
import Resume from './Content/Pages/Resume';
import Vision from './Content/Pages/Vision';
import Logout from './thapa-login-src/component/Logout';
import Execution from "./Projects/ExpenseTracker/Section-2_5/Vid-52/Execution"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/parallax">
            <Parallax />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/certifications">
            <Certifications />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/vision">
            <Vision />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/expense-tracker">
            <Execution />
          </Route>
          {/* <E/> */}
          {/* <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
