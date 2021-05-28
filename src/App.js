import 'bootstrap/dist/css/bootstrap.min.css'
import './style/ti-bootstrap.css'
import './style/App.css'
import Header from './components/Header';
import TimeTracking from './pages/TimeTrackingPage';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import TimeLogsPage from './pages/TimeLogsPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/timetracking" component={TimeTracking}/>
          <Route path="/timelogs" component={TimeLogsPage}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
