import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFormBig from './components/TextFormBig';

function App() {
  const [mode, setMode] = useState('light') // wheather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TetxUtils" mode={mode} toggleMode={toggleMode} /> <br />
      <TextFormBig title="Enter text" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
