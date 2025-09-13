import React, { useState, useEffect, useMemo } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let frame: number;

    const tick = () => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft((prev) => {
          const next = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          };
          // ✅ Update only if something actually changed
          return JSON.stringify(prev) === JSON.stringify(next) ? prev : next;
        });
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [targetDate]);

  // ✅ Memoize time units so array isn’t rebuilt on every render
  const timeUnits = useMemo(
    () => [
      { value: timeLeft.days, label: "Days" },
      { value: timeLeft.hours, label: "Hours" },
      { value: timeLeft.minutes, label: "Minutes" },
      { value: timeLeft.seconds, label: "Seconds" },
    ],
    [timeLeft]
  );

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-7  max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <Clock className="w-10 h-10  text-yellow-300 mx-auto mb-3 md:mb-4" />
        <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
          Webinar Starts In
        </h2>
        <p className="text-blue-100 text-sm md:text-base">
          Don't miss this amazing opportunity!
        </p>
      </div>

      {/* Timer Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {timeUnits.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 will-change-transform"
          >
            <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-blue-100 text-xs  font-medium uppercase tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
