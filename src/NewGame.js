import "./NewGame.css";
import bomb from "./images/bomb.png"

export default function NewGame({ handleClick }) {
  const style = { left: "50%", top: "65vh", position: "absolute" };
  return (
    <div className="enemy" style={style}>
      <img src={bomb} onClick={(event) => handleClick(event)} />      
    </div>
  );
}
