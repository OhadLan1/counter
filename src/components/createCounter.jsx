import { useState } from "react";
import Counter from "./counter";
const arr = [];
function CreateCounter() {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [initial, setInitial] = useState();
  const [steps, setSteps] = useState();
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setMin(e.target.value);
        }}
        placeholder="min"
      />
      <input
        type="number"
        onChange={(e) => {
          setMax(e.target.value);
        }}
        placeholder="max"
      />
      <input
        type="number"
        onChange={(e) => {
          setInitial(e.target.value);
        }}
        placeholder="initial"
      />
      <input
        type="number"
        onChange={(e) => {
          setSteps(e.target.value);
        }}
        placeholder="steps"
      />
      <button
        className="ms-2"
        onClick={() => {
          arr.push({ min, max, initial, steps });
          console.log(arr);
        }}
      >
        submit
      </button>
      <div>{mapCounters(arr)}</div>
    </div>
  );
}
function mapCounters(arr) {
  return arr.map((counter) => {
    return (
      <Counter
        min={counter.min}
        max={counter.max}
        initial={counter.initial}
        steps={counter.steps}
      />
    );
  });
}
export default CreateCounter;
