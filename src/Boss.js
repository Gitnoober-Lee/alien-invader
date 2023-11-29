import "./Boss.css";

export default function Boss({ x, y }) {
    const style = { left: `${x}%`, top: `${y}vh`, position: 'absolute' };
    return <div className="boss" style={style}><img src="https://www.pngmart.com/files/8/UFO-PNG-Image-Free-Download.png"/></div>;
}