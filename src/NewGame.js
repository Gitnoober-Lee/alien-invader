import "./css/NewGame.css";
import {motion} from "framer-motion";

export default function NewGame({ handleClick }) {

  return (
      <motion.div
          className="newGame"
          onClick={handleClick}
          animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 0, 0],
              borderRadius: ["0%", "0%", "25%", "75%", "0%"],
          }}
          transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
          }}
      >
          START
      </motion.div>
  );
}
