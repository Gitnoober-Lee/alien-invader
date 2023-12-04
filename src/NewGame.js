import * as React from 'react';
import "./css/NewGame.css";
import {motion} from "framer-motion";
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


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
          <Button variant="outlined" color="primary"><p style={{fontSize:"xx-large"}}>START</p></Button>
      </motion.div>
  );
}
