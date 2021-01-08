// import "./App.css";
import Home from "./components/Home/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>this is the search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* Search page (the results page)*/}
    </div>
  );
}
export default App;
