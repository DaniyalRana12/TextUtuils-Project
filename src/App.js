import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
      setalert({
        msg: message,
        type: type
      });
      setTimeout(() => {
          setalert(null);
      }, 1500);
  }

  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  }

  return (
    <>    
      <Router>
        <Navbar title="Text Manipulator" text="About" mode={mode} togglemode={togglemode} key={new Date()} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Try Text Manipulator - word counter, character counter, remove extra spaces" mode={mode}/>} />   
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
