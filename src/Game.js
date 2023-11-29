import "./Game.css";
import React, { useState, useEffect } from "react";
import Boss from "./Boss";
import Enemy from "./Enemy";
import DefenseNet from "./DefenseNet"
import Shooter from "./Shooter";

export default function Game() {
  const [enemies, setEnemies] = useState([]);
  const maxHeight = 60; // Set your desired maximum height
  const [bossX, setBossX] = useState();
  const [bossY, setBossY] = useState(10);

  useEffect(() => {
    // Interval for generating a new enemy every 2 seconds
    const generateEnemyInterval = setInterval(() => {
      const x = Math.floor(Math.random() * 95) + 1;
      setBossX(x);
      setEnemies((prevEnemies) => [
        ...prevEnemies,
        { key: prevEnemies.length, x: x, y: 10 },
      ]);
    }, 500);

    // Interval for updating the position of existing enemies every 16 milliseconds
    const updatePositionInterval = setInterval(() => {
      setEnemies((prevEnemies) =>
        prevEnemies.map((enemy) => ({
          ...enemy,
          y: enemy.y + 0.5,
        }))
      );
    }, 16);

    // Clear the intervals when the component is unmounted
    return () => {
      clearInterval(generateEnemyInterval);
      clearInterval(updatePositionInterval);
    };
  }, []);

  // Filter out enemies that exceed the maximum height
  const visibleEnemies = enemies.filter((enemy) => enemy.y <= maxHeight);

  return (
    <div>
      <Boss x={bossX} y={bossY}/>
      {visibleEnemies.map((enemy) => (
        <Enemy key={enemy.key} index={enemy.key} x={enemy.x} y={enemy.y} />
      ))}
      <DefenseNet y={maxHeight}/>
      <Shooter/>
    </div>
  );
};
