import "./css/Shooter.css";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function Shooter({ score, time }) {
  const [x, setX] = useState(50);
  const [shooterWidth, setShooterWidth] = useState(0);
  const containerRef = useRef(null);
  const shooterRef = useRef(null);
  const step = 50; // Adjust the step value as needed

  function handleKeyDown(event) {
    const key = event.keyCode;
    const containerWidth = containerRef.current.clientWidth;
    if (key === 37) {
      setX((x) => Math.max(x - step, 0));
    } else if (key === 39) {
      setX((x) => Math.min(x + step, containerWidth - shooterWidth)); // Adjust the subtracted value as needed
    }    
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shooterWidth]);

  useEffect(() => {
    setShooterWidth(shooterRef.current.getBoundingClientRect().width);
    console.log(x);
  }, [x]);

  return (
    <div className="shooter-container" ref={containerRef}>
      <motion.div
        initial={{ x: x }}
        animate={{ x: x }}
        transition={{ duration: 0.2 }}
        className="shooter"
        ref={shooterRef}
      >
        <div>{score}</div>
        <div>{time / 1000}</div>
      </motion.div>
    </div>
  );
}

export default Shooter;