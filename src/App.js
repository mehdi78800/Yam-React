import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './components/Home';
import Stat from './components/Stat';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Router>
        <MyNavbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/stat" exact component={Stat}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
