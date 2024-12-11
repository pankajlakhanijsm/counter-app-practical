import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10);
  const [trigger, setTrigger] = useState("");
  const [timmerId, setTimerId] = useState("");

  useEffect(() => {
    if(trigger === "start"){
      const timerId = setInterval(() => {
        setCounter((counter) => counter -1);
      },1000);
      setTimerId(timerId)
    }else if(trigger === "stop"){
      clearInterval(timmerId);
    }

    return () => {
      clearInterval(timmerId);
    }
  }, [trigger]);

  if(counter < 1){
    clearInterval(timmerId)
  }

  const handleStart = () => {
    setTrigger("start")
  }

  const handleStop = () => {
    setTrigger("stop")
  }

  return (
    <div className="App" style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <span>{counter}</span>
      </div>
      <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
