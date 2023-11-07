import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFormBig from './components/TextFormBig';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light') // wheather dark mode is enabled or not
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

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TetxUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextFormBig title="Enter text" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
