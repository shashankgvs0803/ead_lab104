import { useState, useEffect, useRef } from "react";

function Timer2 () {
    const [seconds, setSeconds] = useState(0);
    const [isactive, setIsActive] = useState(false);
    const [ispaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() =>{
        if(isactive && !ispaused){
            intervalRef.current = setInterval(() =>{
                setSeconds(prevseconds => prevseconds + 1)
            },1000);
            return () => clearInterval(intervalRef.current)
        } else {
            clearInterval(intervalRef.current);
        }
    }, [isactive, ispaused]);
    const StartTimer = () =>{
        setIsActive(true);
        setIsPaused(false);
    }
    const PauseTimer = () =>{
        setIsPaused(true);
    }

    const ResetTimer = () => {
        setIsActive(false)
        setIsPaused(false)
        setSeconds(0)
    }
    const Buttonstyle = {
        margin: "0 5px",
        padding: "10px 15px",
        fontSize: "16px",
        cursor: "pointer",
    }
    return(
        <div>
            <h1> TIMER </h1>
            <p>{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2,'0')}</p>
            <button onClick={StartTimer} disabled={isactive && !ispaused} style={Buttonstyle}> Start </button>
            <button onClick={PauseTimer} disabled ={!isactive || ispaused} style={Buttonstyle}> pause </button>
            <button onClick={ResetTimer} style={Buttonstyle}> reset </button>

        </div>
    )
}
export default Timer2;