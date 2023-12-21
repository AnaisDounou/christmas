import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const christmasDate = new Date(2023, 11, 25); // Christmas is on December 25th

    const difference = christmasDate.getTime() - currentDate.getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
        <div className="flex gap-[10px] justify-center m-5">
            <span className="text-[30px] text-white text-center p-4 py-3 bg-red rounded-lg font-bold ">
                {time.days}
                <span className="text-[12px] font-regular"> Days </span> 
            </span>
            <span className="text-[30px] text-white text-center p-4 py-3 bg-red rounded-lg font-bold ">
                {time.hours}
                <span className="text-[12px] font-regular"> Hours </span> 
            </span>
            <span className="text-[30px] text-white text-center p-4 py-3 bg-red rounded-lg font-bold ">
                {time.minutes} 
                <span className="text-[12px] font-regular"> Minutes </span> 
            </span>
            <span className="text-[30px] text-white text-center p-4 py-3 bg-red rounded-lg font-bold ">
                {time.seconds}
                <span className="text-[12px] font-regular"> Seconds </span> 
            </span>
        </div>
    </div>
  );
};

export default CountdownTimer;
