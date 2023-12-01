import { useState } from "react";
import "./Enemy.css";
import slime from "./images/slime.png"
import questionMark from "./images/question_mark.png"
import bomb from "./images/bomb.png"
import bonus from "./images/bonus.png"

export default function Enemy({ index, x, y, type, text, handleClick }){
  const color = useState("#" + (((1 << 24) * Math.random()) | 0).toString(16));
  const style = { left: `${x}%`, top: `${y}vh`, position: 'absolute'/*, "background-color":color */};
  var imgSrc;
  if(type==='Alien'){
    imgSrc = slime;
  }else if(type==='Desitined Card'){  
    imgSrc = questionMark;
  }else if(type==='Bomb'){
    imgSrc = bomb;
  }else if(type==='Bonus'){
    imgSrc = bonus;
  }
  
    
  return (
    <div className="enemy" style={style}>
        <img src={imgSrc} onClick={(event) => handleClick(event, type, text, index)}/>
        <div>{text}</div>    
    </div>
  );
};