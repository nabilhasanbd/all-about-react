import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App(props) {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Text-Utils" />
      {/* <Navbar /> */}
      {/* my-4 -> for margin  */}
      <div className="container my-4 col-md-8">
        <Textform heading="Enter your text to analyze"></Textform>
      </div>
    </>
  );
}

export default App;
