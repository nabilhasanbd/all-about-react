import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFormBig from './components/TextFormBig';

function App() {
  const [mode, setMode] = useState('dark') // wheather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <>
      <Navbar title="TetxUtils" mode={mode} toggleMode={toggleMode} /> <br />
      <TextFormBig title="Enter text" />
      {/* <About /> */}
    </>
  );
}

export default App;
