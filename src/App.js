import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("June 21 2020");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>-</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>-</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}{" "}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

/*
function AddNumber() {
  let step = 0;
  return (
    <div>
      <button> - </button>
      {`Step: ${step}`}
      <button> + </button>
    </div>
  );
}

function AddCount() {
  let count = 0;
  return (
    <div>
      <button onClick={() => (count = count + 1)}> - </button>
      {`Count: ${count}`}
      <button> + </button>
    </div>
  );
}

function CountDate() {
  let count = 0;
  return <div>{`${count} days from today is ${Date()}`}</div>;
}
*/
