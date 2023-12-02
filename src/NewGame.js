import "./css/NewGame.css";
import playButton from "./images/playButton.png"

export default function NewGame({ handleClick }) {
  const style = { top: "75vh", position: "absolute" };
  return (
    <div className="newgame" style={style}>
      <img src={playButton} onClick={(event) => handleClick(event)} />      
    </div>
  );
}
