
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextContent from './components/TextContent'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);
  // in order to show alert just call show alert function it will take care of setalert
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
      <Switch>
        <Route exact path="/">
      <TextContent mode={mode} showAlert={showAlert} />

        </Route>
        <Route path="/about">
          <About />
          </Route>
      </Switch>
    </>
  );
}

export default App;
// OR
// export default function App() krke start kr skte ho

