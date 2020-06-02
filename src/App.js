import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./contents/About";
import Experience from "./contents/Experience";
import Projects from "./contents/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="SideNav">
          <Navbar />
        </div>

        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/experience" exact>
            <Experience />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
