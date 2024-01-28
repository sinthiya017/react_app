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
import Home from './hello/Home';
import Footer from './hello/Footer';
import Termsofservice from './hello/Termsofservice';
import PrivacyPolicy from './hello/Privacypolicy';
import SignUp from './hello/SignUp';   
import Reference from './hello/reference';       
import Callback from './hello/callback';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Education' element={<Education />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Reference' element={<Reference />}></Route>
          <Route path='/callback' element={<Callback />}></Route>
        </Routes>
      </BrowserRouter>
      

      {/* <Propscomponent name="sinthiya" course="MERN"/> */}

      <header className="App-header">

        {/* <Statecomponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <h5>
          Edit <code>src/App.js</code> and save to reload.
        </h5>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <footer> */}
       
          
          <BrowserRouter>
            <Footer />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            <Routes>
              <Route path='/Termsofservice' element={<Termsofservice />}></Route>
              <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}></Route>


            </Routes>
          </BrowserRouter>

      <footer/>
    </div>
  );
}

export default App;
