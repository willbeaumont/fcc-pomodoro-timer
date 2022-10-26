import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pomodoro Timer</h1>
      </header>
      <body>
        <div>
          <label id="break-label">Break Length</label>
          <button id="break-increment" class="adjustTimer">&uarr;</button>
          <div id="break-length"></div>
          <button id="break-decrement" class="adjustTimer">&darr;</button>
        </div>
        <div>
          <label id="session-label">Session Length</label>
          <button id="session-increment" class="adjustTimer">&uarr;</button>
          <div id="session-length"></div>
          <button id="session-decrement" class="adjustTimer">&darr;</button>
        </div>
      </body>
      <footer>
        Will Beaumont &copy; 2022
      </footer>
    </div>
  );
}

export default App;
