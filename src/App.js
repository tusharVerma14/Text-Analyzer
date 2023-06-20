
import { useState } from 'react';
import {
  BrowserRouter as Router,Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextContent from './components/TextContent';
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const [mode, setMode] = useState('light');
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#1b365f";
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("White Mode Enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Router>
      <Switch>
        <Route exact path="/">
      <TextContent mode={mode} showAlert={showAlert} />

        </Route>
        <Route path="/about">
          <About />
          </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;


