import background from "./video/alien-bg1.mp4";

export default function welcome({setStart}) {
    return (
        <div>
            <video className='back-video' width='100%' autoPlay muted playsInline loop>
                <source src={background} type="video/mp4"/>
            </video>
            <div className='wel-content'>
                <h1>Alien Invader</h1>
                <button className='wel-btn' onClick
                    ={event => setStart(true)}>Start Fight
                </button>
            </div>
        </div>
    )
}