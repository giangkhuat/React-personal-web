import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Education/Experience";
import Projects from "./components/Projects/Projects";

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
          <Route path="/projects/:id" render={routeProps => <div>{JSON.stringify(routeProps, null, 2)}</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
