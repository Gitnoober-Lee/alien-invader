import {useState} from "react";

function Bullets() {
    const [bullets, setBullets] = useState()

    function handleKeyPress(event) {
        if (event.key === ' '){
            const key = new Date().getTime().toString();
            // setBullets();
        }
    }
}


export default Bullets