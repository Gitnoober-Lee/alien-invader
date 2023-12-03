import "./css/Shooter.css";
import React, {useEffect, useState} from "react";
import { motion } from "framer-motion"

function Shooter({score, time}) {

    const [x, setX] = useState(window.innerWidth / 2);

    // using max, min to keep the component within boundary
    function handleKeyDown(event) {
        const key = event.keyCode;
        if (key === 37) {
            setX((x)=> Math.max(x - 100, 0));
        } else if (key === 39){
            setX((x)=> Math.min(x + 100, window.innerWidth - 800));
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);


    return (
        <motion.div
            initial={{x: x}}
            animate={{x: x+"%"}}
            transition={{ duration: 0.2 }}
            className="shooter"
        >
            <div>{score}</div>
            <div>{time}</div>
        </motion.div>
    )
}
export default Shooter;
