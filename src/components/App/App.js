import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Authenticate/Login';
import Register from '../../Pages/Authenticate/Register';
import AuthDetails from '../Auth/AuthDetails';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
      {/* <AuthDetails/> */}

      </Router>
    </div>
  );
}

export default App;
