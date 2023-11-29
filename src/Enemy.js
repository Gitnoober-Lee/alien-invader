import { useState } from "react";
import "./Enemy.css";
import image from "./images/slime.png"

export default function Enemy({ index, x, y }){
  const [color] = useState("#" + (((1 << 24) * Math.random()) | 0).toString(16));
  const style = { left: `${x}%`, top: `${y}vh`, position: 'absolute' };

  return (
    <div className="enemy" style={style}><img src={image}/></div>
  );
};