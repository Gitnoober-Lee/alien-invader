import "./css/App.css";
import Login from "./Login";
import Game from "./Game";
import coffee from "./images/buyMeACoffee.png"
import RecordList from "./Record";
import {useEffect, useState} from "react";
import User from "./User";

function App() {  
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("Anonymous");
     // Win, Lose, or Playing for gaming control
    const [endGameCondition, setEndGameCondition] = useState(""); 
    // Score now
    const [score, setScore] = useState(0);  
    const [saved, setSaved] = useState(false); 

    return (
        userId
            ?
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
                        <Game endGameCondition={endGameCondition} setEndGameCondition={setEndGameCondition} score={score} setScore={setScore} setSaved={setSaved} />
                    </div>
                </div>

                <div className="col3">
                    <div className="playerInput">
                        <User userId={userId} userName={userName} setUserName={setUserName}/>
                    </div>

                    <div className="gameRecords">
                        <RecordList end={endGameCondition} userId={userId} userName={userName} score={score} saved={saved} setSaved={setSaved}/>
                    </div>
                </div>

                <footer>
                    <p style={{display: "inline-block"}}>Copyright YJ, Marshall, Vincent</p>
                    <a href="https://www.buymeacoffee.com/redjackfred">
                        <img src={coffee} alt="coffee"/>
                    </a>
                </footer>
            </div>
            :
            <Login onLogin={setUserId}/>
    );
}

export default App;
