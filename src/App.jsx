import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //state
  const [time, setTime] = useState(new Date())

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime();
    birthDate = new Date(birthDate).getTime();
    let timeCount = birthDate - now;
    timeCount = timeCount / 1000; //convert milliseconds to seconds

    let days = Math.floor(timeCount / (60 * 60 * 24)); //convert seconds to days

    let hours = Math.floor(
      (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
    );
    let minutes = Math.floor(
      ((timeCount % (60 * 60 * 24)) % (60 * 60)) / 60 //convert seconds to minutes
    );
    let seconds = Math.floor(
      ((timeCount % (60 * 60 * 24)) % (60 * 60)) % 60 //convert seconds to minutes
    );

    return [days, hours, minutes, seconds];
  };
  
   useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date());
    }, 1000); //1000 millisecond = 1 second
    return () => clearInterval(intervalTask);
  }, []);

  return (
    <div className='container'>
             <div className="countdown">
      <h1 className="countdown-title">Countdown to my birthday</h1>
      <p className="countdown-sub">
        It is very important for the customer to pay attention to the adipiscing
        process. Where are you blinded? Some of the architects, the most worthy,
        will fall in love with the expedient because, from the error of the
        trouble, it prevents it. Never, solved pain.
      </p>
      <div className="countdown-group">
        <div className="countdown-card">
          <div className="countdown-card-time">
            {getCountdown("2025/1/8")[0]}{" "}
          </div>
          <div className="countdown-card-title">Days</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-card-time">
            {getCountdown("2025/1/8")[1]}{" "}
          </div>
          <div className="countdown-card-title">Hours</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-card-time">
            {getCountdown("2025/1/8")[2]}{" "}
          </div>
          <div className="countdown-card-title">Minutes</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-card-time">
            {getCountdown("2025/1/8")[3]}{" "}
          </div>
          <div className="countdown-card-title">Seconds</div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default App