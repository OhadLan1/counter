import { render } from "@testing-library/react";
import { useState } from "react";
import Counter from "./counter";
const arr = [];
let key = 0;
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
          setMin(Number(e.target.value));
        }}
        placeholder="min"
      />
      <input
        type="number"
        onChange={(e) => {
          setMax(Number(e.target.value));
        }}
        placeholder="max"
      />
      <input
        type="number"
        onChange={(e) => {
          setInitial(Number(e.target.value));
        }}
        placeholder="initial"
      />
      <input
        type="number"
        onChange={(e) => {
          setSteps(Number(e.target.value));
        }}
        placeholder="steps"
      />
      <button
        className="ms-2"
        onClick={() => {
          arr.push({ key, min, max, initial, steps });
          key++;
          mapCounters(arr);
          arr.splice(0, arr.length);
        }}
      >
        submit
      </button>
    </div>
  );
}
function mapCounters(arr) {
  return arr.map((counter) => {
    render(
      <Counter
        key={counter.key}
        min={counter.min}
        max={counter.max}
        initial={counter.initial}
        steps={counter.steps}
      />
    );
  });
}

export default CreateCounter;
