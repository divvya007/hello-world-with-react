import logo from "./logo.svg";
import "./App.css";
import HelloLabel from "./HelloLabel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloLabel color="red" fontStyle="italic" />
        <div>My first react App</div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
