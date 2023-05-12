import logo from './logo.svg';
import './App.css';

let name = "Nabil"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contanct</li>
      </nav>
      <div className="container">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti officia eveniet totam facere vel nulla eos necessitatibus animi illo. Reiciendis, cum corporis debitis aut laborum temporibus libero iure adipisci in.</p>
      </div>
      <h4>This is {name}</h4>
    </>
  );
}

export default App;
