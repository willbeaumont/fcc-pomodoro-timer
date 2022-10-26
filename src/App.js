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
        </div>
        <div>
          <label id="session-label">Session Length</label>
        </div>
      </body>
      <footer>
        Will Beaumont &copy; 2022
      </footer>
    </div>
  );
}

export default App;
