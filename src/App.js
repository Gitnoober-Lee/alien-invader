import "./css/App.css";
import Login from "./Login";
import Game from "./Game";
import coffee from "./images/buyMeACoffee.png"
import RecordList from "./Record";
import {useState} from "react";
import User from "./User";

function App() {
    const [userId, setUserId] = useState("")
    const [userName, setUserName] = useState("Anonymous")


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
                        <Game/>
                    </div>
                </div>

                <div className="col3">
                    <div className="playerInput">
                        <User userId={userId} userName={userName} setUserName={setUserName}/>
                    </div>

                    <div className="gameRecords">
                        <RecordList/>
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
