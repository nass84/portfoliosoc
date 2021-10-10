import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/homepage";
import AboutPage from "./components/about";
import Projects from "./components/projects";
import Reference from "./components/reference";
import Employment from "./components/employment";
import Landing from "./components/index"

function App() {
  return (
    <div className="App">
      <main>
      
       <Router>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/references">
              <Reference />
            </Route>
            <Route path="/employment">
              <Employment />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
