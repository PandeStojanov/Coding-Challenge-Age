import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import RandomQuote from "./pages/RandomQuotes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route exact path="/random-quote">
          <RandomQuote />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
