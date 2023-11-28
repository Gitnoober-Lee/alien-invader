import "./Game.css";
import React, { useState, useEffect } from "react";
import Boss from "./Boss";
import Enemy from "./Enemy";

export default function Game() {
  const randomColors = [];

  //Generate enemies in every x milliseconds
  const generateInterval = 2000;
  const EnemyGenerator = () => {
    const [enemyCount, setEnemyCount] = useState(0);    

    useEffect(() => {
      const interval = setInterval(() => {
        setEnemyCount(enemyCount + 1);
      }, generateInterval);

      return () => clearInterval(interval);
    }, [enemyCount]);
    
    const generateEnemy = (index) => {     
      randomColors.push("#" + (((1 << 24) * Math.random()) | 0).toString(16));      
      
      return (
        <div className="enemy" id={index} style={{"background-color":randomColors[index]}}>
          Enemy {index}          
        </div>
      );
    };

    const components = [];

    for (let i = 0; i < enemyCount; i++) {
      components.push(generateEnemy(i));
    }

    return <div>{components}</div>;
  };

  return (
    <div>
      <Boss />
      <EnemyGenerator />
    </div>
  );
}
