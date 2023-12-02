import "./css/Shooter.css";
import React from "react";

export default function Shooter({score, time}) {
    return (
        <div className="shooter">
            <div>
                <p>Score: {score}</p>
            </div>
            <div>
                <p>Time: {time / 1000} s</p>
            </div>
        </div>
    )
}