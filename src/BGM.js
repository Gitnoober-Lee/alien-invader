import './css/BGM.css';
import React, { useState, useEffect } from "react";
import bgmLever1 from './musics/Allegretto.mp3';

const useAudio = url => {
  const [audio] = useState(new Audio(bgmLever1));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const BGM = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="bgm">
      <button onClick={toggle}>{playing ? "Pause" : "BGM"}</button>
    </div>
  );
};

export default BGM;