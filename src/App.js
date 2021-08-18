import "./App.css";
import HelloLabel from "./HelloLabel";
import Button from "./myComponent/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloLabel color="red" fontStyle="italic" />
        <div>My first react App</div>
        <Button />
      </header>
    </div>
  );
}

export default App;
