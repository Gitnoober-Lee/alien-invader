import "./css/Boss.css";
import BossImg from './images/Boss.png'
import {motion} from "framer-motion";

export default function Boss({x}) {

    return (
        <motion.div
            initial={{x: "50%"}}
            animate={{x: `${x}vh`}}
            transition={{duration: 0.5}}
            className='boss'
        >

        </motion.div>
    )

}