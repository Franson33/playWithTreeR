import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cubes from "./screens/Cubes";
import Home from "./screens/Home";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
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
