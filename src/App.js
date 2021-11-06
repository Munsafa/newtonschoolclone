import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LaunchPad from './LaunchPad';
import CodingContest from './CodingContest';
import Header from './Header';
import Home from "./Home"
import HireFromUs from './HireFromUs';
import Fees from './Fees';
import Login from './Login';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/launchpad" component={LaunchPad} />
      <Route path="/codingcontest" component={CodingContest} />
      <Route path="/hirefromus" component={HireFromUs} />
      <Route path="/fees" component={Fees} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
      </Router>
    );
  }
}

export default App;