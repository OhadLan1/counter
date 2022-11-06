import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(props.initial);
  const plus = () => setCounter((oldValue) => oldValue + props.steps);
  const minus = () => setCounter((oldValue) => oldValue - props.steps);

  return (
    <div>
      <button onClick={plus} disabled={props.max === counter}>
        +
      </button>
      <span className="mx-2">{counter}</span>
      <button onClick={minus} disabled={props.min === counter}>
        -
      </button>
    </div>
  );
}
export default Counter;