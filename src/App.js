import "./App.css";
import Handle from "./Handle";
import Login from "./Login";
import Game from "./Game";
import GameRecords from "./GameRecords";
import { initializeApp } from "firebase/app";
import coffee from "./images/buyMeACoffee.png"

function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAERTNpMBLxr3ExY7s4YnuXAJUzVnRFzq8",
    authDomain: "alieninvaderreact.firebaseapp.com",
    projectId: "alieninvaderreact",
    storageBucket: "alieninvaderreact.appspot.com",
    messagingSenderId: "351353651255",
    appId: "1:351353651255:web:eebc74b16d376a1ba6ffb2",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

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
          <GameRecords />
        </div>
      </div>

      <footer>
        <p style={{display:"inline-block"}}>Copyright YJ, Marshall, Vincent</p>
        <a href="https://www.buymeacoffee.com/redjackfred">
          <img src={coffee} />
        </a>
      </footer>
    </div>
  );
}

export default App;
