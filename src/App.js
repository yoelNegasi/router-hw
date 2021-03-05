import Names from "./Names";
import Age from "./Another";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav">
        <h1>
          <Link to="/"> Table </Link>
        </h1>
        <h1>
          <Link to="/another"> Another </Link>
        </h1>
      </div>
      <Switch>
        <Route path="/" exact component={Names} />
        <Route path="/another" component={Age} />
      </Switch>
    </Router>
  );
}

export default App;
