import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/about";
import Projects from "./components/projects";
import Reference from "./components/reference";
import Employment from "./components/employment";
import Landing from "./components/index";
import Flexercise from "./components/flexercise";
import Casestudies from "./components/casestudies";
import Wonderers from "./components/wonderers";
import Rebel from "./components/rebel";

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
            <Route path="/casestudies">
              <Casestudies />
            </Route>
            <Route path="/flexercise">
              <Flexercise />
            </Route>
            <Route path="/wonderers">
              <Wonderers />
            </Route>
            <Route path="/rebel">
              <Rebel />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
