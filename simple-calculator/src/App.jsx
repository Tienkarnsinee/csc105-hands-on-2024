import { useState } from "react";
import './App.css';

const App = () => {
  const [ans, setresult] = useState(0);
  const [input, setInput] = useState('');

  function add() {
    setresult((prev) => prev + Number(input));
  }
  function subtract() {
    setresult((prev) => prev - Number(input));
  }
  function multiply() {
    setresult((prev) => prev * Number(input));
  }
  function divide() {
    setresult((prev) => prev / Number(input));
  }
  function resetInput() {
    setInput('');
  }
  function resetResult() {
    setresult(0);
  }

  return (
    <>
      <h1>Simple Calculator</h1>
      <p>Result: {ans}</p>
      <input 
        type="number" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />
      <br /><br />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <br />
      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetResult}>Reset Result</button>
    </>
  );
}

export default App;