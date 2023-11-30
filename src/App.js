import "./App.css";
import Handle from "./Handle";
import Login from "./Login";
import Game from "./Game";
import GameRecords from "./GameRecords";

function App() {
  return (
    <div className="App">      
        <div className="col1">
          <div className="sideBar">
            <p>How to play:</p>
          </div>
        </div>

        <div className="col2">
          <div className="title">
            <p>Alien Invader</p>
          </div>
          <div className="game">
            <Game />
          </div>
        </div>

        <div className="col3">
          <div className="playerInput">
            <Login />
            <Handle />
          </div>
          <div className="gameRecords">
            <GameRecords/>
          </div>
        </div>

      <footer>
        <p>Copyright YJ, Marshall, Vincent</p>
      </footer>
    </div>
  );
}

export default App;