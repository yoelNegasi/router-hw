import Names from "./Names";
import Age from "./Age";
import { BrowserRouter as Router, Seitch, Link, Route } from "react-router-dom";
import House from "./House";

function App() {
  return (
    <Router>
      <div>
        <h1>
          <Link to="/"> na </Link>
        </h1>
        <h1>
          <Link to="/another"> ag</Link>
        </h1>
        <h1>
          <Link to="/new">ho</Link>
        </h1>
      </div>
      <switch>
        <Route path="/" exact component={Names} />
        <Route path="/another" component={Age} />
        <Route path="/new" component={House} />
      </switch>
    </Router>
  );
}

export default App;
