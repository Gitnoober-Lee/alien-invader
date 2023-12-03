import "./css/App.css";
import Login from "./Login";
import Game from "./Game";
import coffee from "./images/buyMeACoffee.png"
import RecordList from "./Record";
import React, {useState} from "react";
import User from "./User";
import styled from "styled-components";
import Shooter from "./Shooter";


function App() {
    const [userId, setUserId] = useState("")
    const [userName, setUserName] = useState("Anonymous")


    const GridContainer = styled.div`
      display: grid;
      grid-template-columns: 20% 60% 20%;
      gap: 3px;
    `;

    const GridItem = styled.div`
      background-color: antiquewhite;
      padding: 5px;
      border: 1px solid #ccc;
      height: 100vh;
      border-radius: 10px;
    `;

    return (
        userId
            ?
                <GridContainer>
                <GridItem>
                    <div className="col1">
                        <div className="sideBar">
                            <p>How to play:</p>
                        </div>
                    </div>
                </GridItem>
                <GridItem>
                        <div className="col2">
                            <div className="title">
                                <p>Alien Invader</p>
                            </div>
                            <div className="game">
                                <Game/>
                            </div>
                        </div>
                </GridItem>
                <GridItem>
                        <div className="col3">
                            <div className="playerInput">
                                <User userId={userId} userName={userName} setUserName={setUserName}/>
                            </div>
                            <div className="gameRecords">
                                <RecordList/>
                            </div>
                        </div>
                </GridItem>
                        <footer>
                            <p style={{display: "inline-block"}}>Copyright YJ, Marshall, Vincent</p>
                            <a href="https://www.buymeacoffee.com/redjackfred">
                                <img src={coffee} alt="coffee"/>
                            </a>
                        </footer>
                </GridContainer>
            :
            <Login onLogin={setUserId}/>
    );
}

export default App;
