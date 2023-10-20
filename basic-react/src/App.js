import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFormBig from './components/TextFormBig';

function App() {
  const [mode, setMode] = useState('light') // wheather dark mode is enabled or not
  return (
    <>
      <Navbar title="TetxUtils" mode={mode} /> <br />
      <TextFormBig title="Enter text" />
      <About />
    </>
  );
}

export default App;
