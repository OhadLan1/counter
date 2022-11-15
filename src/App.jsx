import "./App.css";
import Counter from "./components/counter";
import CreateCounter from "./components/createCounter";
import Paint from "./components/paintCounter";
function App() {
  return (
    <div className="App">
      <Counter min={-20} max={20} initial={0} steps={1} />
      <CreateCounter />
    </div>
  );
}

export default App;
