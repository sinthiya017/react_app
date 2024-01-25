import logo from './logo.svg';
import './App.css';
//import Testcomp1 from './hello/testComponent';
//import Reiteratorclasscomponent from './hello/testclassComponent';
//import Login from './hello/LoginComponent';
//import Propscomponent from './hello/propsComponent';
//import Statecomponent from './hello/stateComponent';
import NavBar from './hello/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './hello/About';
import Education from './hello/Education';
import Login from './hello/Login';
import Home from './hello/Hello';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Education' element={<Education />}></Route>
          <Route path='/Login' element={<Login/>}></Route>

        </Routes>
      </BrowserRouter>

      {/* <Propscomponent name="sinthiya" course="MERN"/> */}

      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
