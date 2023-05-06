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

  const products = [
    { name: "X-Box 980", price: "$679.75" },
    { name: "GT-600", price: "$1000" },
  ];

  const kings = ["Saladin", "Humayun", "Babar", "Suleyman", "Fatih"];

  return (
    <div className="App">
      <header className="App-header">
        <p className="" style={style}>
          Hello {world}
        </p>
        <p className="" style={{ backgroundColor: "cyan" }}>
          I am {info.name} and my age is {info.age}
        </p>
        <h4>This is {2000 + 3}</h4>

        <ul>
          {kings.map((king) => (
            <li>{king}</li>
          ))}
        </ul>

        <div style={personContainerStyle}>
          <Person name="Nabil" job="Software Engineer"></Person>
          <Person></Person>
        </div>
        <Employee></Employee>
        <Product name={products[0].name} price={products[0].price}></Product>
        {/* <Product product={products[1]}></Product> */}
      </header>
    </div>
  );
}

// it s a simple component
function Person(props) {
  var personStyle = {
    border: "2px solid white",
    margin: "5px",
    padding: "5px",
  };
  return (
    // <div style={{ border: "2px solid yellow", margin: "5px", padding: "5px" }}>
    <div style={personStyle}>
      <p>Hello {props.name} </p>
      <p>Job : {props.job}</p>
      <p>{props.name} is awesome !!</p>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "5px solid grey",
    borderRadius: "5px",
    backgroundColor: "grey",
    height: "200px",
    weight: "200px",
    float: "left",
  };
  return (
    <div style={productStyle}>
      <h5>Name:{props.name}</h5>
      <h5>Price:{props.price}</h5>
      <button>Buy now</button>
    </div>
  );
}

function Employee(props) {
  var personStyle = {
    border: "2px solid grey",
    margin: "5px",
    padding: "5px",
    backgroundColor: "black",
  };
  return (
    <div style={personStyle}>
      <p>Hello {props.name} </p>
      <p>Job : {props.job}</p>
    </div>
  );
}

export default App;
