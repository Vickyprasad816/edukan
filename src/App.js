import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Components/Loginscreen/Login';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/nav" element={<Nav/>}>  
          </Route> 
        </Routes>
      </Router> 

    </div>
  );
}

export default App;
