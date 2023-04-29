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
  var personContainerStyle = {
    display: "flex",
    flexDirection: "row",
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
        <div style={personContainerStyle}>
          <Person></Person>
          <Person></Person>
        </div>
      </header>
    </div>
  );
}

// it s a simple component
function Person() {
  // var personStyle = {
  //   border: "2px solid white",
  //   margin: "5px",
  //   padding: "5px",
  // };
  return (
    <div style={{ border: "2px solid yellow", margin: "5px", padding: "5px" }}>
      <p p> Hello</p>
      <p>How are yoy</p>
    </div>
  );
}

export default App;
