import { useState } from 'react';
import './App.css';

function TimerGroup(props) {
  return (
    <div>
      <label id={props.idPrefix + "-label"}>{props.message}</label>
      <button id={props.idPrefix + "-increment"} class="timer">&uarr;</button>
      <div id={props.idPrefix + "-length"}>{props.time}</div>
      <button id={props.idPrefix + "-decrement"} class="timer">&darr;</button>
    </div>
  )
}

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);

  return (
    <div className="App">
      <header>
        <h1>Pomodoro Timer</h1>
      </header>
      <body>
        <TimerGroup idPrefix="break" time={breakTime} message="Break Length" />
        <TimerGroup idPrefix="session" time={sessionTime} message="Session Length" />
      </body>
      <footer>
        Will Beaumont &copy; 2022
      </footer>
    </div>
  );
}

export default App;
