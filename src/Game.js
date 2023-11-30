import "./Game.css";
import React, { useState, useEffect, useSound } from "react";
import Boss from "./Boss";
import Enemy from "./Enemy";
import DefenseNet from "./DefenseNet";
import Shooter from "./Shooter";
import NewGame from "./NewGame";
import MagicWords from "./MagicWords";
import Chances from "./Chances";
import BGM from "./BGM";
import linesLevel1 from "./phrases/phrases_level1.txt";
import linesLevel2 from "./phrases/phrases_level2.txt";
import linesLevel3 from "./phrases/phrases_level3.txt";
import linesLevel4 from "./phrases/phrases_level4.txt";
import linesLevel5 from "./phrases/phrases_level5.txt";
import linesLevel6 from "./phrases/phrases_level6.txt";

const EndGameCondition = {
  Win: 'win',
  Lose: 'lose',
  Playing: 'playing'
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

export default function Game() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  const [gameStarted, setGameStarted] = useState(false);
  const [enemies, setEnemies] = useState([]);
  const maxHeight = 60; // Set your desired maximum height
  const [bossX, setBossX] = useState();
  const [bossY, setBossY] = useState(10);
  
  const [isGuessed, setIsGuessed] = useState(Array(26).fill(false)); // if character A->Z is guessed
  const [hiddenPhrase, setHiddenPhrase] = useState("");
  const [phrasesLevel1, setPhrasesLevel1] = useState([]);
  const [phrasesLevel2, setPhrasesLevel2] = useState([]);
  const [phrasesLevel3, setPhrasesLevel3] = useState([]);
  const [phrasesLevel4, setPhrasesLevel4] = useState([]);
  const [phrasesLevel5, setPhrasesLevel5] = useState([]);
  const [phrasesLevel6, setPhrasesLevel6] = useState([]);
  const [answerPhrase, setAnswerPhrase] = useState("");
  const [chancesLeft, setChancesLeft] = useState(10);
  let generateEnemyInterval;
 
  function endGameCheck(){
    if(chancesLeft!=0){
      if(hiddenPhrase!==""&&hiddenPhrase===answerPhrase){
        return EndGameCondition.Win;
      }else{
        return EndGameCondition.Playing;
      }
    }else{
      return EndGameCondition.Lose;
    }
  }

  // Event handler for clicking on NewGame component
  function handleClickNewGame(event) {
    event.preventDefault(); // Prevent the default behavior of the click event
    let randomIndex = Math.floor(Math.random() * phrasesLevel1.length);
    setAnswerPhrase(phrasesLevel1[randomIndex]);
    setGameStarted(true);
    setEnemies([]);
    setIsGuessed(Array(26).fill(false));
    setHiddenPhrase("");
    setChancesLeft(10);   
  }

  // Event handler for clicking on Enemy components
  function handleClickParent(event, type, text) {
    event.preventDefault(); // Prevent the default behavior of the click event
    console.log(type + "," + text);   
    // If click on a Alien
    switch (type) {
      case "Alien":
        setIsGuessed((prevIsGuessed) => {
          const updatedIsGuessed = [...prevIsGuessed];          
          updatedIsGuessed[characters.indexOf(text)] = true;
          return updatedIsGuessed;
        });        
        setChancesLeft((prevChancesLeft) => {
          // Ensure chances are only decreased if the character is not in the answerPhrase
          if (answerPhrase.toUpperCase().indexOf(text.toUpperCase()) === -1) {
            return prevChancesLeft - 1;
          }
          return prevChancesLeft;
        });
        break;
      case "Bonus":
        //To be implemented
        break;
      case "Bomb":
        //To be implemented
        break;
      case "Desitined Card":
        //To be implemented
        break;
    }
  }

  // Use useEffect to update hiddenPhrase after isGuessed is updated
  useEffect(() => {
    let hiddenPhraseTmp = "";
    for (let i = 0; i < answerPhrase.length; i++) {
      if (
        isGuessed[characters.indexOf(answerPhrase[i].toUpperCase())] === true ||
        !isLetter(answerPhrase[i])
      ) {
        hiddenPhraseTmp += answerPhrase[i];
      } else {
        hiddenPhraseTmp += "*";
      }
    }
    setHiddenPhrase(hiddenPhraseTmp);
    console.log(endGameCheck());
  }, [isGuessed, answerPhrase]);

  //Get phrases from file based on levels (easy:1->hard:6)
  useEffect(() => {
    fetch(linesLevel1)
      .then((response) => response.text())
      .then((data) => {
        const phrasesArray = data.split("\n");
        setPhrasesLevel1(phrasesArray);
      });
    fetch(linesLevel2)
      .then((response) => response.text())
      .then((data) => {
        const phrasesArray = data.split("\n");
        setPhrasesLevel2(phrasesArray);
      });
    fetch(linesLevel3)
      .then((response) => response.text())
      .then((data) => {
        const phrasesArray = data.split("\n");
        setPhrasesLevel3(phrasesArray);
      });
    fetch(linesLevel4)
      .then((response) => response.text())
      .then((data) => {
        const phrasesArray = data.split("\n");
        setPhrasesLevel4(phrasesArray);
      });
    fetch(linesLevel5)
      .then((response) => response.text())
      .then((data) => {
        const phrasesArray = data.split("\n");
        setPhrasesLevel5(phrasesArray);
      });
    fetch(linesLevel6)
      .then((response) => response.text())
      .then((data) => {
        const phrasesArray = data.split("\n");
        setPhrasesLevel6(phrasesArray);
      });
  }, []);

  //Initialize the hiddenPhrase
  useEffect(() => {
    let hiddenPhraseTmp = "";
    for (var i = 0; i < answerPhrase.length; i++) {
      if (isLetter(answerPhrase.charAt(i))) {
        hiddenPhraseTmp += "*";
      } else {
        hiddenPhraseTmp += answerPhrase.charAt(i);
      }
    }
    setHiddenPhrase(hiddenPhraseTmp);
  }, [answerPhrase]);

  useEffect(() => {
    if (gameStarted) {
      // Interval for generating a new enemy every 2 seconds
      generateEnemyInterval = setInterval(() => {
        const x = Math.floor(Math.random() * 90);
        const typePool = ["Alien","Alien","Alien","Alien","Bomb","Desitined Card","Alien","Alien","Alien","Alien","Alien","Alien","Alien","Bonus"];
        
        let randomIndex = Math.floor(Math.random() * characters.length);
        while(isGuessed[randomIndex]===true){
          randomIndex = Math.floor(Math.random() * characters.length);
        }

        let text = characters.charAt(randomIndex);   
        const type = typePool.at(Math.floor(Math.random() * typePool.length));
        setBossX(x);
        setEnemies((prevEnemies) => [
          ...prevEnemies,
          {
            key: prevEnemies.length,
            x: x,
            y: 10,
            type: type,
            text: type === "Alien" ? text : null,
            handleClick: handleClickParent,
          },
        ]);
      }, 500);

      // Interval for updating the position of existing enemies every 16 milliseconds
      const updatePositionInterval = setInterval(() => {
        setEnemies((prevEnemies) =>
          prevEnemies.map((enemy) => ({
            ...enemy,
            y: enemy.y + 0.3,
          }))
        );
      }, 24);

      // Clear the intervals when the component is unmounted
      return () => {
        clearInterval(generateEnemyInterval);
        clearInterval(updatePositionInterval);
      };
    }
  }, [gameStarted, isGuessed, characters]);

  // Filter out enemies that exceed the maximum height
  const visibleEnemies = enemies.filter((enemy) => enemy.y <= maxHeight);

  return (
    <>
      <div className="up">
        <BGM />
      </div>     
      <NewGame handleClick={handleClickNewGame} />
      <Boss x={bossX} y={bossY} />
      {visibleEnemies.map((enemy) => (
        <Enemy
          key={enemy.key}
          index={enemy.key}
          x={enemy.x}
          y={enemy.y}
          type={enemy.type}
          text={enemy.text}
          handleClick={enemy.handleClick}
        />
      ))}
      <DefenseNet y={maxHeight} />
      <div className="down">
        <MagicWords answerPhrase={answerPhrase} hiddenPhrase={hiddenPhrase}/>
        <Chances leftChance={chancesLeft}/>        
        <Shooter />          
      </div>
    </>
  );
}
