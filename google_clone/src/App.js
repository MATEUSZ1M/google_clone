// import "./App.css";
import Home from "./components/Home/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/Home/Home/SearchPage/SearchPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
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
