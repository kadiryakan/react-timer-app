import { useState, useRef, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
  const timerRef = useRef(null)

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time") || 0)})
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    localStorage.setItem("time", time)
  }, [time])

  const toggleTimer = () => {
    if(isRunning){
      // Clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    }else{
      // Start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime+1)
      }, 1000)
    }

    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false)
    setTime(0)
    timerRef.current = null
    localStorage.removeItem(time);
  }

  const formatTime = (seconds) => {
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''}`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      
      return `${hours} hour${hours !== 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''} ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    }
  }

  return (

      <div>
        <TimerDisplay formatTime={formatTime} timer={time}/>
        <TimerControls toggleTimer={toggleTimer} isRunning={isRunning} resetTimer={resetTimer}/>
      </div>
  );
}
 
export default Timer;