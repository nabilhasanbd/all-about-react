import logo from "./logo.svg";
import "./App.css";

function App() {
  var world = "World";
  var info = {
    name: "nabil",
    age: 26,
  };
  var style = {
    color: "aqua",
    backgroundColor: "grey",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="" style={style}>
          Hello {world}
        </p>
        <p className="" style={{ backgroundColor: "cyan" }}>
          I am {info.name} and my age is {info.age}
        </p>
        <h4>This is {2000 + 3}</h4>
      </header>
    </div>
  );
}

export default App;
