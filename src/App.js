import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

//Import the pages

import Page1 from "./Components/page1"
import Page2 from "./Components/page2"
import Page3 from "./Components/page3"

//import css
import "./app.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/page3">
            <Page3 />
          </Route>
        </Switch>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;
