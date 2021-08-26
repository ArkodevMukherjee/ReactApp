import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = (type)=>{
    setMode(type)

    if(type=="success"){
      document.body.style.backgroundColor="#3bfb24"

      document.body.style.color="white"
      document.body.style.fontWeight="bold"
    }
    else if(type=="dark"){
      document.body.style.backgroundColor="black"

      document.body.style.color="white"

      
      document.body.style.fontWeight="bold"
    }
    else if(type=="light"){
      document.body.style.backgroundColor="white"

      document.body.style.color="white"

      
      document.body.style.fontWeight="bold"
    }
    // else if(type=="light"){
    //   document.body.style.backgroundColor="white;"

    //   document.body.style.color="white"
    //   // document.body.style.fontWeight="bold"
    // }
    else{
      document.body.style.backgroundColor="yellow"

      document.body.style.color="white"
      document.body.style.fontWeight="bold"
    }
    

     
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="Text Analyzor" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route> */}

          <TextForm showAlert={showAlert}/>
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;
