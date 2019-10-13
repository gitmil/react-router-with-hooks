import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/about",
                  state: {
                    from: "root"
                  }
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/user/john/johnson">User</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:firstname/:lastname" component={User} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
