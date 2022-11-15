import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(props.initial);
  
  const color = props.boundaries ? props.boundaries.color : "";

  const isNotAtMax = counter + props.steps <= props.max;
  const isNotAtMin = counter + props.steps >= props.min;

  const plus = () => setCounter((oldValue) => oldValue + props.steps);
  const minus = () => setCounter((oldValue) => oldValue - props.steps);

  return (
    <div>
      <button onClick={plus} disabled={props.max <= counter}>
        +
      </button>
      <span
        style={{ color: paint(props.from, props.to, props.color, counter) }}
        className="mx-2"
      >
        {counter}
      </span>
      <button onClick={minus} disabled={props.min >= counter}>
        -
      </button>
    </div>
  );
}
export default Counter;
function paint(from, to, color, counter) {
  if (counter < to && counter > from) {
    return color;
  } else return;
}
