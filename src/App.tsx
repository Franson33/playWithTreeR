import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cubes from "./screens/Cubes";
import ControlledCube from "./screens/ControlledCube";
import Home from "./screens/Home";

function App(): JSX.Element {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/controlledCube">
          <ControlledCube />
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
