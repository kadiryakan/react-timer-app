import { useEffect, useRef } from "react";

const TimerControls = ({toggleTimer, isRunning, resetTimer}) => {
    
  const startButtonRef = useRef(null);

  useEffect(() => {
    if(startButtonRef.current){
      startButtonRef.current.focus();
    }
  }, [])
  
  return (
        <>
        

        <button ref={startButtonRef} onClick={ toggleTimer} className="mt-3 bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 transition-colors">
          {isRunning ? "Pause" : "Start"}
        </button>

        {/* Reset */}
        <button 
          onClick={resetTimer} 
          className="bg-red-500 text-white px-4 py-2 rounded ml-2 cursor-pointer hover:bg-red-600 transition-colors"
        >
          Reset
        </button>
        </>
    );
}
 
export default TimerControls;