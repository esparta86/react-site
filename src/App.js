import 'bootstrap/dist/css/bootstrap.min.css'
import './style/ti-bootstrap.css'
import './style/App.css'
import Header from './components/Header';
import TimeTracking from './pages/TimeTracking';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/timetracking" component={TimeTracking}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
