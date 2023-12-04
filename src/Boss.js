import "./css/Boss.css";
import BossImg from './images/Boss.png'
import {motion} from "framer-motion";
import ufo from "./images/gif/ufo.gif";

export default function Boss({x}) {

    return (
        <motion.div
            initial={{x: "50%"}}
            animate={{x: `${x}vh`}}
            transition={{duration: 0.5}}
            className='boss'
        >
            <img className='ufo' src={ufo} alt='ufo'/>
        </motion.div>
    )

}