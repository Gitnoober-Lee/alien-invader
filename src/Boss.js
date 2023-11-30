import "./Boss.css";
import BossImg from './images/Boss.png'

export default function Boss({ x, y }) {
    const style = { left: `${x}%`, top: `${y}vh`, position: 'absolute' };
    return <div className="boss" style={style}><img src={BossImg}/></div>;
}