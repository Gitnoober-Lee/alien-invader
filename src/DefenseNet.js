import "./css/DefenseNet.css";

export default function DefenseNet({ y }) {
  const style = { top: `${y+5}vh`, position: "absolute" };
  return <div className="defense-net" style={style}></div>;  
}
