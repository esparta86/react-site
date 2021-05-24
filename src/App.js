import 'bootstrap/dist/css/bootstrap.min.css'
import './style/ti-bootstrap.css'
import './style/App.css'
import Header from './components/Header';
import TimeTracking from './pages/TimeTracking';

function App() {
  return (
    <div className="App">
      <Header/>
      <TimeTracking/>
    </div>
  );
}

export default App;
