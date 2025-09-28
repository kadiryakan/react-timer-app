const TimerDisplay = ({timer, formatTime}) => {
    return (
        <h2 className="text-4xl font-semibold mt-4">
        ⌛ Timer: {formatTime(timer)}
      </h2>
    );
}
 
export default TimerDisplay;