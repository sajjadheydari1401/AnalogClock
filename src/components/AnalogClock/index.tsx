import React, { useEffect, useState } from "react";
import "./AnalogClock.css";

const AnalogClock: React.FC = () => {
  const [hourRotation, setHourRotation] = useState<number>(0);
  const [minuteRotation, setMinuteRotation] = useState<number>(0);
  const [secondRotation, setSecondRotation] = useState<number>(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12; // Convert to 12-hour format
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Calculate rotations for clock hands
      const newHourRotation = (360 / 12) * (hours + minutes / 60);
      const newMinuteRotation = (360 / 60) * (minutes + seconds / 60);
      const newSecondRotation = (360 / 60) * seconds;

      setHourRotation(newHourRotation);
      setMinuteRotation(newMinuteRotation);
      setSecondRotation(newSecondRotation);
    };

    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Initial update
    updateClock();

    // Clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="clock">
      <div id="one" className="oneEleven tick"></div>
      <div id="two" className="twoTen tick"></div>
      <div id="three" className="threeNine tick"></div>
      <div id="four" className="fourEight tick"></div>
      <div id="five" className="fiveSeven tick"></div>
      <div id="six" className="sixTwelve tick"></div>
      <div id="seven" className="fiveSeven tick"></div>
      <div id="eight" className="fourEight tick"></div>
      <div id="nine" className="threeNine tick"></div>
      <div id="ten" className="twoTen tick"></div>
      <div id="eleven" className="oneEleven tick"></div>
      <div id="twelve" className="sixTwelve tick"></div>
      <div
        className="hand hour"
        style={{ transform: `rotate(${hourRotation}deg)` }}
      ></div>
      <div
        className="hand minute"
        style={{ transform: `rotate(${minuteRotation}deg)` }}
      ></div>
      <div
        className="hand second"
        style={{ transform: `rotate(${secondRotation}deg)` }}
      ></div>
    </div>
  );
};

export default AnalogClock;
