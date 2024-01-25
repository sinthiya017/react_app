import logo from './logo.svg';
import './App.css';
//import Testcomp1 from './hello/testComponent';
//import Reiteratorclasscomponent from './hello/testclassComponent';
//import Login from './hello/LoginComponent';
//import Propscomponent from './hello/propsComponent';
//import Statecomponent from './hello/stateComponent';
import NavBar from './hello/NavBar';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      {/* <Propscomponent name="sinthiya" course="MERN"/> */}
      
      <header className="App-header">
        {/* <Statecomponent/> */}
       
        <login/>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
