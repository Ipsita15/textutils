// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



// let name = "Ipsita";
function App() {

  const [mode, setMode] = useState('light');   //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const removeBodyClassess = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyClassess();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042747';
      showAlert("Dark mode has been enabled.", "success");
      // document.title = 'Textutils - Dark Mode';
      //   setInterval(() => {
      //   document.title ='Textutils is user-friendly';
      //   }, 2000);
      //   setInterval(() => {
      //   document.title ='Install Textutils now'; 
      //   }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      // document.title = 'Textutils - Light Mode';
    }
  }

  //greenmode
  const [greenMode, setGreenMode] = useState('light');
  const toggleGreenMode = () => {
    if (greenMode === 'light') {
      setGreenMode('dark');
      document.body.style.backgroundColor = '#339533';
      showAlert("Green mode has been enabled.", "success");
      // document.title = 'Textutils - Green Mode';
    }
    else {
      setGreenMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      // document.title = 'Textutils - Light Mode';
    }
  }

  return (

    <>
      <Router>
        <Navbar title="TextUtils" contact="Contact Us" history="History" transactions="Transactions" mode={mode} toggleMode={toggleMode} greenMode={greenMode} toggleGreenMode={toggleGreenMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Switch>
            {/* /users ---> Component 1
            /user/home ---> ---> Component 2 
            thus exact is used to get the right path as react matches only partial path value */}
            <Route exact path="/contact">
              <Contact mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter, Add underscore" mode={mode} greenMode={greenMode} />
            </Route>
          </Switch>
      </div>
        </Router>
    </>

    // -------------------------------------------------------------------------------------------------------------------------?


    //jsx --------- is the html which is rendered in js(javascript) in curly braces
    // <> <h1>Hiee</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React  with Ipszz
    //     </a>
    //   </header>
    // </div></>

    //htmlFor    //className  //tabIndex  ----------camelCase

  );
}

export default App;
