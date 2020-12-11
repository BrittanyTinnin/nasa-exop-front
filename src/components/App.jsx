import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from "./Search"

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search}/>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
