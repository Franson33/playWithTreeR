import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cubes from "./screens/Cubes";
import Second from "./screens/Second";
import Home from "./screens/Home";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/second">
          <Second />
        </Route>
        <Route path="/cubes">
          <Cubes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
